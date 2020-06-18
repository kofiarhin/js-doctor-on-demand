import _ from "lodash";
import { firebase, firebaseLooper } from "../firebase";

export default class User {

    constructor(id) {

        this.isLoggedIn = false;

        if (id) {

            console.log("get uuser with id" + id);

        } else {

            // check if user is logged in
            const userData = sessionStorage.getItem("user");

            if (!_.isEmpty(userData)) {
                const user = JSON.parse(userData);
                this.isLoggedIn = true;
                this.userData = user;
            }
        }



    }




    async createPatient(userData) {

        // get role of user
        const role = userData.role;



        // save data to firebase
        let user = await firebase.database().ref("users").push(userData).then(() => userData);

        // get user id from database

        const newUser = await firebase.database().ref('users').orderByChild("email").equalTo(userData.email).once("value").then(snapshot => {

            const data = firebaseLooper(snapshot);

            return data[0];

        });


        const newUserId = newUser.id;

        //    add user to patient databse
        await firebase.database().ref("patients").push({ userId: newUserId, package_name: "none" })

        return newUser;
    }


    // refactor to creat just user and return user details
    // create doctor
    async createDoctor(data) {

        const { firstname, lastname, email, contact, gender, specialty, role, password } = data;
        const userData = {
            firstname,
            lastname,
            email,
            gender,
            contact,
            role,
            createdOn: Date.now(),
            password
        };

        // do some validation works


        await firebase.database().ref("users").push(userData).then(() => console.log('user created'));

        // get user id and add to doctor database

        const newUser = await firebase.database().ref("users").orderByChild('email').equalTo(email).once('value').then(snapshot => {

            const data = firebaseLooper(snapshot);

            return data[0];
        })

        const { id } = newUser;

        const doctorData = {
            userId: id,
            specialty,
            verified: false,
            cases: 0
        }

        // add data to database
        await firebase.database().ref("doctors").push(doctorData);

        return newUser;


    }

    async verifyDoctor(id) {

        try {
            await firebase.database().ref(`doctors/${id}`).update({
                verified: true
            });

            console.log("??? ---- user updated ");
            return true;

        } catch (error) {

            return false;
        }

    }

    // check login
    checkLogin() {

        return this.isLoggedIn;
    }


    getData() {

        return this.userData;
    }


    async getUsers(query) {


        const users = await firebase.database().ref('users').orderByChild("role")
            .equalTo(query).once("value").then(snapshot => firebaseLooper(snapshot));

        if (query === "doctor") {


            //  get doctor list

            const doctors = await firebase.database().ref("doctors").once('value').then(snapshot => firebaseLooper(snapshot));

            if (doctors && doctors.length > 0) {

                users.forEach((user, index) => {

                    const data = doctors.find(doctor => doctor.userId == user.id);


                    // why i did this
                    // because id overrides original user id 
                    // reset the id to dotor id and pass new data instead
                    const { id: doctorId, ...rest } = data;
                    const newData = { doctorId, ...rest }

                    // users[index] = { ...user, ...data }
                    users[index] = { ...user, ...newData };

                });

            }
        }


        else if (query === "patient") {

            users.forEach(async (user, index) => {

                const userData = await firebase.database().ref('patients').orderByChild("userId").equalTo(user.id).once("value")
                    .then(snapshot => firebaseLooper(snapshot)[0]);

                users[index] = { ...user, ...userData }

            });


            return users;
        }

        return users;


    }

    async getUser(id) {

        // get user from user table
        const user = await firebase.database().ref(`users/${id}`).once("value").then(snapshot => snapshot.val());

        if (!_.isEmpty(user)) {

            const { role } = user;


            // if user is a doctor get details from dotor table
            if (role === "doctor") {

                const doctorData = await firebase.database().ref("doctors").orderByChild("userId").equalTo(id).once("value").then(snapshot => firebaseLooper(snapshot)[0]);

                if (!_.isEmpty(doctorData)) {

                    // reneme id field to doctor id and remove user id  from field
                    const { id: doctorId, userId, ...rest } = doctorData;
                    // reformat doctor data
                    const newDoctorData = { doctorId, ...rest };

                    // reformat user data
                    const userData = { id, ...user, ...newDoctorData }

                    // return userData
                    return userData;
                }
            }

            else if (role === "patient") {

                const patientData = await firebase.database().ref("patients").orderByChild('userId').
                    equalTo(id).once("value").then(snapshot => firebaseLooper(snapshot)[0]);

                if (!_.isEmpty(patientData)) {

                    const { id: patientId, userId, ...rest } = patientData;

                    const newPatientData = { patientId, ...rest }

                    const userData = { ...user, ...newPatientData }

                    return userData;
                }
            }
            // to do that of patient
            return { id, ...user };

        }
    }

    async test() {

        console.log("passss")
    }


}