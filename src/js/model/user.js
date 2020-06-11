import _ from "lodash";
import { firebase, firebaseLooper } from "../firebase";

export default class User {

    constructor(id) {

        if (id) {



        } else {


            const userData = sessionStorage.getItem("user");

            if (!_.isEmpty(userData)) {
                const user = JSON.parse(userData);
                this.isLoggedIn = true;
                this.userData = user;
            }
        }



    }




    async createUser(userData) {


        // save data to firebase
        const user = await firebase.database().ref("users").push(userData).then(() => userData);

        return user;
    }

    checkLogin() {

        return this.isLoggedIn;
    }


    getData() {

        return this.userData;
    }


    async getUsers(query) {



        if (query && query.length > 0) {

            const users = await firebase.database().ref("users").once("value").then(snapshot => firebaseLooper(snapshot));

            const newData = users.filter(user => user.role === query);

            console.log(newData)
            return newData;

        }
    }

    async getUser(id) {

        if (id) {

            const user = await firebase.database().ref(`users/${id}`).once("value").then(snapshot => snapshot.val());

            return user;
        }
    }
}