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

        let users = [];
        if (query) {

            users = await firebase.database().ref("users").orderByChild("role").equalTo(query).once("value").then(snapshot => firebaseLooper(snapshot));


        } else {

            users = await firebase.database().or.ref("users").once("value").then(snapshot => firebaseLooper(snapshot));
        }

        return users;
    }


    async getUser(id) {


        const user = await firebase.database().ref(`users/${id}`).once("value")
            .then(snapshot => snapshot.val());

        if (!_.isEmpty(user)) {

            // get details
            const { role } = user;

            // patient
            if (role === "patient") {

                const detail = await firebase.database().ref('patients').orderByChild("userId").equalTo(id).once("value").then(snapshot => firebaseLooper(snapshot)[0]);

                if (!_.isEmpty(detail)) {

                    const { id: patientId, userId, ...rest } = detail;

                    return { id, ...user, patientId, ...rest }
                }
            }

            else if (role === "doctor") {

                const detail = await firebase.database().ref('doctors').orderByChild("userId").equalTo(id).once("value").then(snapshot => firebaseLooper(snapshot)[0]);

                const { id: doctorId, userId, ...rest } = detail;

                return { id, doctorId, ...user, ...rest }
            }
        }
    }



    async getPatients() {

        const users = await this.getUsers("patient");
        const details = await firebase.database().ref("patients").once("value").then(snapshot => firebaseLooper(snapshot));


        const data = await Promise.all([users, details]);

        const [usersData, detailsData] = data;

        if (!_.isEmpty(usersData)) {

            usersData.forEach((userData, index) => {

                // const { id: userId } = userData;

                const detail = detailsData.find(d => {
                    return d.userId === userData.id;
                });

                if (!_.isEmpty(detail)) {
                    const { id: patientId, userId, ...rest } = detail;

                    usersData[index] = { patientId, ...userData, ...rest }
                }
            });



            return usersData;
        }
    }

    async test() {

        console.log("passss")
    }


}