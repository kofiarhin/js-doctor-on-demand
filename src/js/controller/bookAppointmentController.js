import _ from "lodash";
import User from "../model/user";
import * as BookAppointmentView from "../view/bookAppointmentView";
import Doctor from "../model/doctor";
import { getElement, redirect, test, showLoader, removeLoader, auth, renderLoader } from "../lib/helper";
import Appointment from "../model/appointment";
import moment from "moment";

const user = new User();

function renderTitle({ firstname, lastname }) {

    const title = getElement(".main-title");
    title.textContent = `Book Appointment with  Dr. ${firstname} ${lastname}`;

}




async function SubmitController(e) {


    showLoader();
    e.preventDefault();


    // get details from ui
    const reason = getElement("#input-reason").value;
    const preferedDate = getElement("#input-date").value;
    const preferedTime = getElement("#input-time").value;

    // get doctor id  from url
    const search = new URLSearchParams(window.location.search);
    const doctorId = search.get("id");

    if (_.isEmpty(doctorId)) {

        // window.location.href = "dashboard.html"
        redirect("dashboard.html")
    }



    // const { userData } = user;
    const userData = await user.getUser(user.userData.id);



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



    // create new appointment
    const appointment = new Appointment();
    const account = await appointment.create(dataToSubmit);

    if (account) {

        removeLoader();
        redirect("appointment.html")
    } else {

        test("there was a problem creating account")
    }

    // redirect user to dashboard
    // window.location.href = "appointment.html"

    // do some validation works
}

// book appointment controller
export default async function () {

    // render laoder
    renderLoader();

    if (!auth()) {

        redirect("login.html")
    }


    test("book appointment")


    // get the form
    const form = getElement('form');

    form.addEventListener("submit", SubmitController);
}