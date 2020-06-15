import { firebase, firebaseLooper } from "../firebase";

export default class Appointment {

    constructor() {


        // get list of appointments
    }


    async create(data) {

        // push data to firebase
        const result = await firebase.database().ref('appointments').push(data).then(() => {
            return true;
        });

        if (result) {

            return true;
        }
    }


    async getAppointments(role, id) {

        const data = await firebase.database().ref("appointments").once("value").then(snapshot => firebaseLooper(snapshot));

        let appData = [];

        if (role === "patient") {

            appData = data.filter(item => item.userId === id);


        }

        else if (role === "doctor") {

            // if role is doctor return doctor data
            appData = data.filter(item => item.doctorId === id);


        }


        else if (role === "admin") {
            // if role is admin return all the datas
            return data;
        }

        return appData;

    }

    async getAppointment(id) {

        const data = await firebase.database().ref(`appointments/${id}`).once("value").then(snapshot => snapshot.val());

        return data;

    }
}