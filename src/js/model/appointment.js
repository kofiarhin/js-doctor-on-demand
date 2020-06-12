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

            appData = data.filter(item => item.doctorId === id);


        }

        return appData;

    }
}