import _ from "lodash";
import User from "../model/user";
import * as BookAppointmentView from "../view/bookAppointmentView";
import Doctor from "../model/doctor";
import { getElement } from "../lib/helper";

function renderTitle({ firstname, lastname }) {

    const title = getElement(".main-title");

    title.textContent = `Book Appointment with  Dr. ${firstname} ${lastname}`

}

export default async function () {

    // get doctor id from url
    const search = new URLSearchParams(window.location.search)
    const id = search.get("id");

    // render title

    const user = new User();
    const doctor = new Doctor();

    const doctorData = await doctor.getData(id);

    if (!_.isEmpty(doctorData)) {

        renderTitle(doctorData);


    }

    // get form details
}