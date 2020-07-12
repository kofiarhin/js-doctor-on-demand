import { firebase, firebaseLooper } from "../firebase";
import User from "./user";
import { test } from "../lib/helper";
import _ from "lodash"

export default class Appointment extends User {


    async create(data) {


        // push data to firebase
        try {
            await firebase.database().ref('appointments').push(data).then(() => {
                return true;
            });
            return true;
        } catch (error) {

            return false;
        }
    }


    async getAppointments() {

        // get all apointments
        const appData = await firebase.database().ref("appointments").once("value").then(snapshot => firebaseLooper(snapshot));

        return appData;

    }

    async getAdminAppointments() {

        let dataToSubmit = [];

        const appData = await firebase.database().ref("appointments").once("value").then(snapshot => firebaseLooper(snapshot));

        const patientsData = await this.getPatients();
        const doctorsData = await this.getDoctors();

        const result = await Promise.all([appData, patientsData, doctorsData]);


        if (!_.isEmpty(result)) {
            const [appResult, patientsResult, doctorsResult] = result;

            if (!_.isEmpty(appResult)) {
                appResult.forEach(item => {

                    const { patientId, doctorId, id: appId, ...rest } = item;

                    const patientDetail = patientsResult.find(patient => patient.patientId === patientId);

                    const doctorDetail = doctorsResult.find(doctor => doctor.doctorId === doctorId);

                    dataToSubmit.push({ patientData: patientDetail, doctorData: doctorDetail, ...rest, appId });


                });


                if (!_.isEmpty(dataToSubmit)) {

                    return dataToSubmit;
                }
            }

        }


    }

    // get appointments for patients
    async getPatientAppointments(id) {


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




    // get doctor apppoints
    async getDoctorAppointments(id) {

        let dataToSubmit = [];

        const appointments = await firebase.database().ref("appointments").orderByChild("doctorId").equalTo(id).once("value").then(snapshot => firebaseLooper(snapshot));

        // get list of patients
        const patients = await this.getPatients();

        const result = await Promise.all([appointments, patients]);

        const [appData, patientsData] = result;

        if (!_.isEmpty(result)) {

            appData.forEach(app => {

                const { patientUserId } = app;

                const detail = patientsData.find(item => {

                    return item.userId === patientUserId;
                });

                const { id: appId, ...rest } = app;

                dataToSubmit.push({ appId, patientData: detail, ...rest });

                // console.log("appointmentData:", app, "patientData:", detail)
            });

            if (!_.isEmpty(dataToSubmit)) {

                return dataToSubmit;
            }
        }
    }


    // 
    // get appointment with id
    async getAppointment(id) {

        const data = await firebase.database().ref(`appointments/${id}`).once("value").then(snapshot => snapshot.val());


        if (!_.isEmpty(data)) {

            const { patientId, doctorId, ...rest } = data;

            // get patient data
            const patientData = await this.getPatient(patientId)

            // get doctorData
            const doctorData = await this.getDoctor(doctorId)

            const result = await Promise.all([patientData, doctorData]);

            if (!_.isEmpty(result)) {

                const [patientResult, doctorResult] = result;

                return { ...rest, doctorData: doctorResult, patientData: patientResult, appointmentId: id }




            }


        }
    }


}