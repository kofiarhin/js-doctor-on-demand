import _ from "lodash";
import User from "../model/user";
import * as BookAppointmentView from "../view/bookAppointmentView";
import Doctor from "../model/doctor";
import { getElement } from "../lib/helper";
import Appointment from "../model/appointment";
import { test } from "../lib/helper";


function renderTitle({ firstname, lastname }) {

    const title = getElement(".main-title");
    title.textContent = `Book Appointment with  Dr. ${firstname} ${lastname}`;

}


async function formController() {

    // get the form
    const form = getElement('form');

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        // get details from ui
        const reason = getElement("#input-reason").value;
        const preferedDate = getElement("#input-date").value;
        const preferedTime = getElement("#input-time").value;

        // get doctor id  from url
        const search = new URLSearchParams(window.location.search);
        const doctorId = search.get("id");

        // get user details
        const user = new User();
        // const { userData } = user;
        const userData = await user.getUser(user.userData.id);

        if (_.isEmpty(doctorId)) {

            window.location.href = "dashboard.html"
        }



        const { id: patientUserId, patientId } = userData;


        const dataToSubmit = {

            reason: "dummy text of the printing and typesetting industry. Lorem Ipsum has beem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker inclu",
            preferedDate: "2020-06-27",
            preferedTime: "19:42",
            doctorId,
            patientUserId,
            status: "pending",
            createdOn: Date.now(),
            patientId
        }


        const appointment = new Appointment();
        await appointment.create(dataToSubmit);

        // redirect user to dashboard
        window.location.href = "appointment.html"

        // do some validation works



    });

}


// book appointment controller
export default async function () {

    formController();
    // load form using javascript to prevent loading errors





    // renderTitle(doctorData);






}