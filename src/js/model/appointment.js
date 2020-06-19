import { firebase, firebaseLooper } from "../firebase";
import User from "./user";

export default class Appointment extends User {


    async create(data) {

        // push data to firebase
        const result = await firebase.database().ref('appointments').push(data).then(() => {
            return true;
        });

        if (result) {

            return true;
        }
    }


    async getAppointments() {

        // get all apointments
        const data = await firebase.database().ref("appointments").once("value").then(snapshot => firebaseLooper(snapshot));

        return data;

    }


    async getPatientAppointments(id) {


        console.log("???????", id);

        const appointments = await this.getAppointments()
        const doctors = await this.getDoctors();

        let result = [];

        appointments.forEach(item => {

            const { doctorId } = item;

            const detail = doctors.find(doctor => doctor.doctorId === doctorId);

            if (!_.isEmpty(detail)) {

                const { id: appointmentId } = item;
                result.push({ ...item, appointmentId, doctorData: detail });
            }

        });

        if (id) {

            const data = result.filter(item => item.patientId === id);

            return data;

        } else {

            return result;
        }

    }


    async getAppointment(id) {

        const data = await firebase.database().ref(`appointments/${id}`).once("value").then(snapshot => snapshot.val());

        if (!_.isEmpty(data)) {

            const { patientId, doctorId } = data;

            const patientData = await this.getUser(patientId);
            const doctorData = await firebase.database().ref(`doctors/${doctorId}`).once("value").then(snapshot => snapshot.val())

            const result = await Promise.all([patientData, doctorData]);

            if (!_.isEmpty(result)) {

                const [patientResult, doctorResult] = result;

                const doctorDetail = await this.getUser(doctorResult.userId);

                if (!_.isEmpty(doctorDetail)) {

                    return { patientId, doctorId, doctorData: doctorDetail, patientData, id }
                }
            }
        }

    }
}