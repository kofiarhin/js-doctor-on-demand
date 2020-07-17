import { getElement, test } from "../lib/helper";
import { validateAll } from "indicative/validator";


async function SubmitController(e) {

    e.preventDefault();
    const name = getElement("#name").value;
    const email = getElement('#email').value;
    const message = getElement("#message");

    const dataToSubmit = {
        name,
        email,
        message,
        createdOn: Date.now()
    };

    const rules = {
        name: 'required',
        email: "required",
        message: "required"
    };

    const messages = {
        required: (field) => `${field} is required`
    }

    try {

        await validateAll(dataToSubmit, rules, messages);

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

    const form = getElement("form");

    form.addEventListener("submit", SubmitController);

}