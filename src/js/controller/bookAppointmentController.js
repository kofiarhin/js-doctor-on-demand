import User from "../model/user";
import { getElement } from "../lib/helper"
import Appointment from "../model/appointment";
import BookAppointmentView from "../view/bookAppointmentView";

const user = new User();

async function formController(event) {

    event.preventDefault();

    console.log("?????----- book appointment")
    return;

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

        // remove this code 
        const appointmentData = { reason: "having stomach aches since morning and. I have not beeen able to bla bla bla", date: "2020-06-26", time: "12:04" }

        // get user data
        const userData = user.getData();
        const userId = userData.id;
        // get doctor data
        const doctorData = await user.getUser(doctorId);

        // refactor data to submit
        const dataToSubmit = {
            userData,
            doctorData,
            userId,
            doctorId,
            appointmentData,
            createdOn: Date.now(),
            status: "pending"
        };




        if (userData.role === "patient") {

            const appointment = new Appointment();

            if (appointment.create(dataToSubmit)) {

                window.location.href = "dashboard.html"
            }
        } else {
            console.log("you are not authorised to do this transaction")
        }

    } else {

        // render error on ui
    }

}


function renderButton() {

    let ctaWrapper = getElement('.cta-wrapper');

    let markup = "";
    if (user.checkLogin()) {

        // get role and render button based  on role
        const role = user.userData.role;
        if (role === "patient") {
            markup = `<button type="submit" class='cta cta-block'> Book Appointment</button>`

        } else {
            markup = "<a href='dashboard.html' class='cta cta-block cta-danger'> You Cannot book an appointment </a>"
        }

    } else {
        markup = "<a href='login.html' class='cta cta-block'> You need to login </a>";
    }

    ctaWrapper.innerHTML = markup;
}


async function renderTitle() {

    if (user.checkLogin()) {

        //  get doctor id from url
        const search = new URLSearchParams(window.location.search);

        const id = search.get("id");

        if (id) {

            const doctor = await user.getUser(id);

            const { firstname, lastname } = doctor;
            const title = getElement(".main-title span");

            title.textContent = `Dr. ${firstname} ${lastname}`;
        }
    }

}



export default function () {

    renderButton()
    renderTitle()

    const form = getElement(".form-wrapper form");
    form.addEventListener("submit", formController)
}