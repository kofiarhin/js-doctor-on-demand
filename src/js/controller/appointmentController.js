import Appointment from "../model/appointment";
import User from "../model/user";
import * as AppointmentView from "../view/appointmentView";


export default async function () {

    // create user
    const user = new User();


    // if user is logged in
    if (user.checkLogin()) {


        // get user data
        const userData = user.getData();

        // get role
        const role = userData.role;


        // create appointment instance
        const appointment = new Appointment();

        let data = [];

        if (role !== "admin") {

            // get appointment data based on user and  role
            data = await appointment.getAppointments(role, userData.id);

        } else if (role === "admin") {

            data = await appointment.getAppointments(role);


        }


        // check if data is not empty
        if (data && data.length > 0) {


            AppointmentView.renderAppointments(role, data)
            // AppointmentView.renderAppointments(role, data)
        }

    } else {

        // redirect user to login page
        window.location.href = "login.html"
    }

}