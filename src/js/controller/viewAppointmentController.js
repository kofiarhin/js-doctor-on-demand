import User from "../model/user";
import Appointment from "../model/appointment";
import * as ViewAppointment from "../view/viewAppointment";
import _ from "lodash";

export default async function () {

    const user = new User();

    if (!user.checkLogin()) {
        window.location.href = "login.hhtml";
        // maybe you should consider clearing the session

    }

    const { userData } = user;
    const { role } = userData;

    //  get appointment id;

    const search = new URLSearchParams(window.location.search);

    const id = search.get("id");

    const appointment = new Appointment();

    const appointmentData = await appointment.getAppointment(id);


    if (!_.isEmpty(appointmentData)) {

        ViewAppointment.render(role, appointmentData);

    }
}