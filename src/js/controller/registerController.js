import { getElement } from "../lib/helper";
import * as  RegisterView from "../view/registerView";
import User from "../model/user"

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

    const userData = {
        firstname: "azumah",
        lastname: "nelson",
        email: "azumah@gmail.com",
        password: "password",
        contact: "2092003023",
        gender: "male",
        role: "patient"
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
        const newUser = await user.createUser(userData)

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