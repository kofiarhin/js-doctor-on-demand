import { getElement, test } from "../lib/helper";

// clear erros
export function clearErrors() {

    const elements = document.querySelectorAll(".error");

    elements.forEach(field => {

        field.textContent = ""
    });
}

// render errors
export function renderErrors(errors) {

    if (errors && errors.length > 0) {

        errors.forEach(item => {

            const key = Object.keys(item)[0];
            const field = `.error-${key}`;

            const element = getElement(field)
            element.textContent = item[key]

        });
    }
}
