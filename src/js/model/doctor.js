import User from "../model/user";
import _ from "lodash";
import { firebase, firebaseLooper } from "../firebase";


export default class Doctor extends User {

    async verify(id) {

        await firebase.database().ref(`doctors/${id}`).update({
            verified: true
        });

        return true;
    }

    async getDoctors() {


        // get list of doctors
        const doctors = await firebase.database().ref("users").orderByChild("role").equalTo("doctor").once("value").then(snapshot => firebaseLooper(snapshot));


        // get all doctor details
        const details = await firebase.database().ref("doctors").once("value").then(snapshot => firebaseLooper(snapshot));


        // wait for data from both doctors and details
        const data = await Promise.all([doctors, details]).then(promiseData => {


            // format data
            const [doctors, details] = promiseData;

            doctors.forEach((item, index) => {

                const doctorDetail = details.find(detail => detail.userId === item.id);
                const { id: doctorId, userId, ...rest } = doctorDetail;
                doctors[index] = { ...item, doctorId, ...rest }
            });

            // return doctors details
            return doctors;


        });

        // return data from operation
        return data;



    }



}