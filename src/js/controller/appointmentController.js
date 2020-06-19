import Appointment from "../model/appointment";
import User from "../model/user";
import * as AppointmentView from "../view/appointmentView";


export default async function () {

    const user = new User();
    const { userData } = user;
    const { role, id } = userData;


    const appointment = new Appointment();



    if (role === "patient") {
        const data = await appointment.getPatientAppointments(id);
        AppointmentView.renderPatientAppointments(data)
    }



}

function test(item) {

    console.log(item)
}