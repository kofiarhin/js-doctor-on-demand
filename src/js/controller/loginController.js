import { getElement, validateData } from "../lib/helper";
import * as LoginView from "../view/loginView";
import { firebase, firebaseLooper } from "../firebase";
import _ from "lodash";


export default async function LoginController() {

    // clear errors
    LoginView.clearErrors()
    //get data from ui
    // const email = getElement("#email").value.trim();
    // const password = getElement('#password').value.trim();

    // remove this code later

    // // login doctor
    // const email = "kevindurant@gmail.com";
    // const password = "password"


    // // // login patient
    // const email = "sarah@gmail.com";
    // const password = "password";


    // login as admin
    const email = "admin@gmail.com";
    const password = "password";



    // validate data
    const errors = validateData({ email, password });

    // check if there are any errors
    if (errors && errors.length > 0) {

        // render error on ui
        LoginView.renderErrors(errors);

    } else {

        // get user from database
        const snapshot = await firebase.database().ref('users').orderByChild("email").equalTo(email).once("value").then(snapshot => snapshot);

        // check if there is as user

        if (!_.isEmpty(snapshot)) {

            // format data
            const userData = firebaseLooper(snapshot)[0];

            // compare password
            if (userData && userData.password === password) {

                const { id, firstname, lastname, email, password, role, contact, gender } = userData;

                const sessionData = {
                    id,
                    firstname,
                    lastname,
                    email,
                    password,
                    role,
                    contact,
                    gender
                }


                // set session
                sessionStorage.setItem("user", JSON.stringify(sessionData));

                window.location.href = "dashboard.html"

                // // set session storage
                // sessionStorage.setItem("user", JSON.stringify({ id: userData.id, email: userData.email, role: userData.role, firstName: userData.firstName, lastName: userData.lastName }));



                // redirect to dashboard
                // window.location.href = "dashboard.html"

            } else {

                console.log("???????", "invalid email/password combination ")
            }

        } else {

            console.log('invalid email/password combination')
        }

        //compare password


        //login user

    }
}