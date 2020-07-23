import { getElement, validateData, test, auth, redirect, renderLoader, showLoader, removeLoader } from "../lib/helper";
import * as LoginView from "../view/loginView";
import { firebase, firebaseLooper } from "../firebase";
import _ from "lodash";



async function SubmitController(e) {


    e.preventDefault();


    LoginView.clearUi();

    const email = getElement("#email").value.trim();
    const password = getElement("#password").value.trim();


    // // // login patient
    // const email = "johnasante@gmail.com";
    // const password = "password";


    // // login doctor
    // const email = "kevindurant@gmail.com";
    // const password = "password"


    // login as admin
    // const email = "admin@gmail.com";
    // const password = "password";


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

                LoginView.renderFeedback("Invalid Username/Password combination")

            }

        } else {

            console.log('invalid email/password combination')
        }

        //compare password


        //login user

    }

}


// login controller
export default async function LoginController() {


    window.addEventListener("keypress", function (e) {

        if (e.keyCode == 13) {

            SubmitController(e);
        }
    })

    // render Loader
    // renderLoader();

    // clear errors
    LoginView.clearErrors()

    // check if user is logged in
    if (auth()) {

        redirect("dashboard.html")
    }



    const loginBtn = getElement("#login-btn")
    loginBtn.addEventListener("click", SubmitController)

    //get data from ui
    // const email = getElement("#email").value.trim();
    // const password = getElement('#password').value.trim();

    // remove this code later





}