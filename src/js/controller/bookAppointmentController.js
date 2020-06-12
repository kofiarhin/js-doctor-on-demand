import User from "../model/user";
import { getElement } from "../lib/helper"
import Appointment from "../model/appointment"

async function formController(event) {

    event.preventDefault();

    const user = new User();

    if (user.checkLogin()) {

        // get doctor id
        const search = new URLSearchParams(window.location.search);

        const doctorId = search.get("id");

        const reason = getElement("#input-reason").value;
        const date = getElement("#input-date").value;
        const time = getElement("#input-time").value;

        // get data from ui
        // const appointmentData = {
        //     reason,
        //     date,
        //     time
        // };

        const appointmentData = { reason: "having stomach aches since morning and. I have not beeen able to bla bla bla", date: "2020-06-26", time: "12:04" }

        const userData = user.getData();
        const userId = userData.id;
        const doctorData = await user.getUser(doctorId);


        const dataToSubmit = {
            userData,
            doctorData,
            userId,
            doctorId,
            appointmentData,
            createdOn: Date.now(),
            status: "pending"
        };

        const appointment = new Appointment();

        appointment.create(dataToSubmit);

        if (appointment.create(dataToSubmit)) {

            window.location.href = "dashboard.html"
        }


    }

}


export default function () {

    const form = getElement(".form-wrapper form");
    form.addEventListener("submit", formController)
}