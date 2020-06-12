import Appointment from "../model/appointment";
import User from "../model/user";
import * as AppointmentView from "../view/appointmentView";


export default async function () {

    const user = new User()


    // if user is logged in
    if (user.checkLogin()) {

        // get user data
        const userData = user.getData();

        // get role
        const role = userData.role;

        // create appointment instance
        const appointment = new Appointment();

        // get appointment data based on role
        const data = await appointment.getAppointments(role, userData.id);

        if (data && data.length > 0) {

            AppointmentView.renderAppointments(role, data)
        }

    }

}