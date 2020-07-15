import { getElement, test } from "../lib/helper";

export function clearErrors() {

    const elements = document.querySelectorAll(".error");

    elements.forEach(field => {

        field.textContent = ""
    });
}


// render errors
export function renderErrors(errors) {


    if (errors && errors.length > 0) {

        errors.forEach((error, index) => {

            const key = Object.keys(error);
            const field = getElement(`.error-${key}`);

            field.textContent = `${key} is required`;

        });

    }

}