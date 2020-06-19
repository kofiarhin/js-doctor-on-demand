import User from "../model/user";
import Appointment from "../model/appointment";
import * as ViewAppointment from "../view/viewAppointment";
import _ from "lodash";

export default async function () {

    // refactor this code
    // get appointment id from
    const search = new URLSearchParams(window.location.search);
    const id = search.get('id');

    if (!_.isEmpty(id)) {

        const appointment = new Appointment();

        const data = await appointment.getAppointment(id)

        console.log(data)
    }

}