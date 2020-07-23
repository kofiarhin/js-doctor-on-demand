import _, { templateSettings } from "lodash";
import { firebase, firebaseLooper } from "../firebase";
import { test } from "../lib/helper";
import moment from 'moment';

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


    // create patient

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

            users = await firebase.database().ref("users").once("value").then(snapshot => firebaseLooper(snapshot));
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
            } else if (role === "admin") {


                return { id, ...user };
            }
        }
    }


    // get list of patient
    async getPatients() {


        let result = [];

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


                // check if detail is empty
                if (!_.isEmpty(detail)) {
                    const { id: patientId, userId, ...rest } = detail;
                    const { id, ...userRest } = userData;


                    result.push({
                        ...rest,
                        patientId,
                        ...userRest,
                        userId

                    })
                }
            });

            return result;
        }
    }


    async getDoctors() {

        let dataToSubmit = [];

        const doctors = await firebase.database().ref("doctors").once("value").then(snapshot => firebaseLooper(snapshot));

        const usersDetails = await firebase.database().ref("users").orderByChild("role").equalTo("doctor").once("value").then(snapshot => firebaseLooper(snapshot));

        const result = await Promise.all([doctors, usersDetails]);

        const [doctorsResult, usersResult] = result;


        doctorsResult.forEach(doctor => {

            const detail = usersResult.find(user => user.id === doctor.userId);

            if (!_.isEmpty(detail)) {

                const { id: doctorId, ...rest } = doctor;

                dataToSubmit.push({ ...detail, doctorId, ...rest })
            }

        });

        return dataToSubmit;
    }


    async getPatient(id) {

        const data = await firebase.database().ref(`patients/${id}`).once("value").then(snapshot => snapshot.val());

        if (!_.isEmpty(data)) {

            const { userId, id: patientId, ...rest } = data;

            const userData = await this.getUser(userId);

            const result = { patientId, ...rest, ...userData };

            return result;
        }
    }


    async getDoctor(id) {
        if (id) {

            const data = await firebase.database().ref(`doctors/${id}`).once("value").then(snapshot => snapshot.val());

            if (!_.isEmpty(data)) {

                const { userId, ...rest } = data;

                const doctorData = await this.getUser(userId);
                const { id, ...doctorRest } = doctorData;
                const result = { ...rest, ...doctorRest, userId };

                return result;

            }
        }
    }

    async updateProfile(id, blob) {

        await firebase.database().ref(`users/${id}`).update({
            profile: blob
        });

        return true;

    }


    async updatePackage(patientId, packageId = 1) {


        // packakges
        const packages = [
            {
                id: 1,
                package_name: 'Starter',
                number_of_visits: 10
            },

            {
                id: 2,
                package_name: "Family",
                number_of_visits: 20
            },

            {
                id: 3,
                package_name: "Enterprise",
                number_of_visits: 40
            }
        ];

        const expiry = moment().add("30", "days").format("DD/MM/YYYY");
        const selectedPackage = packages[packageId - 1];

        const { id, package_name, number_of_visits } = selectedPackage;

        try {

            await firebase.database().ref(`patients/${patientId}`).update({ package_name, number_of_visits, expiry });

            return true;

        } catch (ex) {

            return false;
        }

    }


    async updateInfo(id, data) {


        try {

            await firebase.database().ref(`users/${id}`).update(data);
            return true;
        } catch (error) {

            return false;
        }
    }


    // find user
    async find(email) {

        const data = await firebase.database().ref(`users`).orderByChild("email").equalTo(email).once("value").then(snapshot => firebaseLooper(snapshot)[0]);

        if (!_.isEmpty(data)) {

            return data;
        } else {

            return false;
        }



    }

    async testing() {

        console.log("testing")

    }

    async deleteUser(userData) {

        // remove item from database


        const { role, id, email } = userData;

        const data = await this.find(email);

        if (!_.isEmpty(data)) {

            // remove from users table
            await firebase.database().ref(`users/${id}`).remove();

            if (role === "doctor") {

                await firebase.database().ref(`doctors/${userData.doctorId}`).remove();

                test("user removed from database");

                // remove all appointments by doctors too //DO TO


            }
        }


    }




}