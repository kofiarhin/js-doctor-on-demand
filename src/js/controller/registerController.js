import { getElement, test, renderLoader, redirect } from "../lib/helper";
import * as  RegisterView from "../view/registerView";
import User from "../model/user"
import { validateAll, validate } from "indicative/validator";

// SubmitController
async function SubmitController(e) {

    e.preventDefault();

    RegisterView.clearErrors();
    // clear ui errors;

    const email = getElement("#email").value;
    const password = getElement("#password").value;
    const firstname = getElement("#firstname").value;
    const lastname = getElement("#lastname").value;
    const gender = getElement("#gender").value;
    const contact = getElement("#contact-number").value;

    const userData = {
        email,
        password,
        firstname,
        lastname,
        contact,
        gender,
        createdOn: Date.now(),
        role: "patient"
    }

    // const userData = {
    //     email: "test@gmail.com",
    //     firstname: "test",
    //     lastname: "test",
    //     password: "password",
    //     contact: 223232323,
    //     gender: "male"
    // }


    const rules = {
        email: "required|email",
        firstname: "required",
        lastname: "required",
        password: "required",
        gender: "required",
        contact: "required|number"
    }

    const messages = {
        required: (field) => `${field} is required`,
        "email.email": "Invalid email format",
        "contact.number": "Contact must be a number"
    };

    try {

        await validateAll(userData, rules, messages);

        const user = new User();

        const result = await user.find(userData.email);


        if (!result) {

            await user.createPatient(userData);
            redirect("login.html")

        } else {

            // display error on ui
            const field = getElement(".error-email");

            field.textContent = "Email already taken"
        }

        // find user in database;



    } catch (errors) {

        // if there are any errors
        if (errors && errors.length > 0) {
            errors.forEach(error => {

                const field = getElement(`.error-${error.field}`);
                field.textContent = error.message;

            });
        }


    }

}


// keypress controller
function KeypressController(e) {

    // when user press the enter key
    if (e.keyCode === 13) SubmitController(e);
}

// Register Controller
export default async function RegisterController() {

    // renderLoader
    renderLoader();


    // clear all errors on ui
    RegisterView.clearErrors();

    // when user click on the submit button
    const registerBtn = getElement("#register-btn");

    // when user clicks on the the submit form
    registerBtn.addEventListener("click", SubmitController);

    // when the enter key is pressed
    window.addEventListener("keypress", KeypressController);


}


// vadlidate data
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