import { getElement } from "../lib/helper";
import * as  RegisterView from "../view/registerView";
import User from "../model/user"
import moment from "moment";

export default async function RegisterController() {

    // clear all errors on ui
    RegisterView.clearErrors()

    // // get data from user
    // const email = getElement("#email").value;
    // const name = getElement("#name").value;
    // const password = getElement("#password").value;
    // const contact = getElement("#contact").value;
    // const gender = getElement("#gender").value;
    // const role = getElement("#role").value;

    // const userData = {
    //     name,
    //     email,
    //     password,
    //     contact,
    //     gender,
    //     role
    // };

    const createdOn = Date.now();
    const role = "patient"

    const userData = {
        firstname: "Sarah",
        lastname: "Mbroh",
        email: "sarah@gmail.com",
        password: "password",
        contact: "2092003023",
        gender: "female",
        role,
        createdOn

    };


    // validate data
    const errors = validateData(userData);

    // check if there is any error
    if (errors.length > 0) {
        RegisterView.renderErrors(errors)

    } else {

        // create an instance of user
        const user = new User();

        // create user
        const newUser = await user.createPatient(userData)

        if (!_.isEmpty(newUser)) {
            window.location.href = "login.html"
        }
        if (newUser) {

            window.location.href = "login.html"
        }




    }

}


function validateData(userData) {

    const errors = []
    // check for errors
    for (let key in userData) {
        if (userData[key] === "") {
            errors.push({ [key]: `${key} is required` })
        }
    }

    return errors;
}