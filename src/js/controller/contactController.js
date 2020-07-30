import { getElement, test, redirect, renderLoader } from "../lib/helper";
import { validateAll } from "indicative/validator";


async function SubmitController(e) {

    e.preventDefault();
    const name = getElement("#name").value;
    const email = getElement('#email').value;
    const message = getElement("#message").value;

    const dataToSubmit = {
        name,
        email,
        message,
        createdOn: Date.now()
    };

    const rules = {
        name: 'required',
        email: "required|email",
        message: "required"
    };



    const messages = {
        required: (field) => `${field} is required`,
        "email.email": "invalid email format"
    }

    try {

        await validateAll(dataToSubmit, rules, messages);

        redirect("index.html");

    } catch (errors) {

        if (errors && errors.length > 0) {


            test(errors)

            errors.forEach(error => {

                const field = getElement(`.error-${error.field}`);
                field.textContent = error.message;
            })
        }
    }
}
// contact controller
export default function () {


    // render loader
    renderLoader();

    // get form from dom
    const form = getElement("form");

    // add eventlistener
    form.addEventListener("submit", SubmitController);

}