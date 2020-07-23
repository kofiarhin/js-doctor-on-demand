import User from "../model/user";
import { getElement, test, redirect } from "../lib/helper";
import { validateAll } from "indicative/validator"
import { clearUi } from "../view/createDoctorView";


async function SubmitController(e) {


    clearUi();
    const email = getElement("#email").value;
    const firstname = getElement('#firstname').value;
    const lastname = getElement('#lastname').value;
    const contact = getElement('#contact').value;
    const password = getElement("#password").value;
    const gender = getElement("#gender").value;
    const specialty = getElement("#specialty").value;

    e.preventDefault();

    // const dataToSubmit = {
    //     firstname: "Tina",
    //     lastname: "Thompson",
    //     password: "password",
    //     email: "tina@gmail.com",
    //     contact: "23232232232",
    //     gender: "female",
    //     specialty: "general practice",
    //     role: "doctor"
    // };

    const rules = {
        email: 'required|email',
        firstname: "required",
        lastname: "required",
        password: "required",
        contact: "required",
        gender: "required",
        specialty: "required"
    }
    const messages = {
        required: (field) => `${field} is required`
    }

    const dataToSubmit = {
        email,
        firstname,
        lastname,
        password,
        contact,
        gender,
        specialty,
        role: 'doctor'
    }


    try {

        await validateAll(dataToSubmit, rules, messages);

        // clear errors
        // check if user already exist;
        //display errors  or register user


        const user = new User();

        await user.createDoctor(dataToSubmit);

        redirect("doctors.html");

    } catch (errors) {

        if (errors && errors.length > 0) {

            errors.forEach(error => {

                const field = getElement(`.error-${error.field}`);

                field.textContent = error.message;
            })
        }
    }
    return;

    await user.createDoctor(dataToSubmit);
    window.location.href = "dashboard.html"

}

// register doctor controller
export default function () {


    const user = new User();
    const btn = getElement("#register-btn");

    if (user.checkLogin()) {

        const { userData } = user;

        const { role } = userData;

        if (role === "admin") {

            // when the submit button is pressedd

            btn.addEventListener("click", SubmitController);

            // when the enter key is presssed
            window.addEventListener("keydown", (e) => {

                if (e.keyCode == 13) {

                    SubmitController(e
                    )
                }

            });

        } else {

            window.location.href = "login.html"
        }
    }





}