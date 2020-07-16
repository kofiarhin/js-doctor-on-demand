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


        if (errors && errors.length > 0) {
            errors.forEach(error => {

                const field = getElement(`.error-${error.field}`);

                field.textContent = error.message;
            })
        }


    }



    // // get data from user
    // const email = getElement("#email").value;
    // const name = getElement("#name").value;
    // const password = getElement("#password").value;
    // const contact = getElement("#contact").value;
    // const gender = getElement("#gender").value;

    // const userData = {
    //     name,
    //     email,
    //     password,
    //     contact,
    //     gender,
    //     role: "patient",
    //     createdOn: Date.now()
    // };



    // const userData = {
    //     firstname: "Sarah",
    //     lastname: "Mbroh",
    //     email: "sarah@gmail.com",
    //     password: "password",
    //     contact: "2092003023",
    //     gender: "female",
    //     role,
    //     createdOn

    // };


    // validate data
    // const errors = validateData(userData);

    // // check if there is any error
    // if (errors.length > 0) {


    //     RegisterView.renderErrors(errors)

    // } else {

    //     const user = new User();

    //     try {

    //         await user.createPatient(userData);
    //         redirect("login.html");
    //     } catch (error) {

    //         test(error);
    //     }


    //     // // create an instance of user
    //     // const user = new User();

    //     // // create user
    //     // const newUser = await user.createPatient(userData)

    //     // if (!_.isEmpty(newUser)) {
    //     //     window.location.href = "login.html"
    //     // }
    //     // if (newUser) {

    //     //     window.location.href = "login.html"
    //     // }


    // }
}



// Register Controller
export default async function RegisterController() {

    // renderLoader
    // renderLoader();

    // clear all errors on ui
    RegisterView.clearErrors();

    // when user click on the submit button
    const registerBtn = getElement("#register-btn")
    registerBtn.addEventListener("click", SubmitController);


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