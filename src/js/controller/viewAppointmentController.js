import User from "../model/user";
import Appointment from "../model/appointment";
import * as ViewAppointment from "../view/viewAppointment";
import _ from "lodash";
import { test, showLoader, removeLoader } from "../lib/helper";



// view appointment controller
export default async function () {


    showLoader();
    // refactor this code
    // get appointment id from
    const search = new URLSearchParams(window.location.search);
    const id = search.get('id');

    if (!_.isEmpty(id)) {

        // get role of user
        const user = new User();
        const { userData: { role } } = user;

        // get appointment
        const appointment = new Appointment();
        const data = await appointment.getAppointment(id);

        if (!_.isEmpty(data)) {

            removeLoader();
            ViewAppointment.renderAppointment(role, data)
        }


    }

}