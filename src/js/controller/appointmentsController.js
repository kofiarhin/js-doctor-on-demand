import { test, getElement, auth } from "../lib/helper";
import Appointment from "../model/appointment";
import * as AppointmentsView from "../view/appointmentsView";

export default async function () {


    if (auth()) {

        const search = new URLSearchParams(window.location.search);
        const id = search.get('id');

        if (id && id.length > 0) {

            const appointment = new Appointment();

            // get doctor appointments
            const data = await appointment.getDoctorAppointments(id);


            if (!_.isEmpty(data)) {

                AppointmentsView.renderAppointments(data);
            }

        }

    } else {

        test("you are not logged in")
    }

}