import Appointment from "../model/appointment";
import User from "../model/user";
import * as AppointmentView from "../view/appointmentView";
import { test, showLoader, removeLoader } from "../lib/helper";


// appointment controller

export default async function () {


    showLoader()
    const user = new User();
    const { userData } = user;
    const { role, id } = userData;


    const appointment = new Appointment();

    if (role === "patient") {

        const userData = await user.getUser(id);
        const { patientId } = userData;

        const data = await appointment.getPatientAppointments(patientId);

        removeLoader();
        AppointmentView.renderPatientAppointments(data)

    }


    // if role is a doctor 
    else if (role === "doctor") {

        // get doctor appointment based on id
        // get doctor id
        const doctorData = await user.getUser(id);

        if (!_.isEmpty(doctorData)) {

            const { doctorId } = doctorData;

            // get appointment of doctor
            const data = await appointment.getDoctorAppointments(doctorId)

            if (!_.isEmpty(data)) {

                removeLoader();
                AppointmentView.renderDoctorAppointments(data)
            }
        }

    }


    else if (role === "admin") {

        const data = await appointment.getAdminAppointments(role);


        if (!_.isEmpty(data)) {
            removeLoader();
            AppointmentView.renderAdminAppointments(data)
        }


    }



}

