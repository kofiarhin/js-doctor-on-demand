import { getElement } from "../lib/helper";


export function clearErrors() {

    const elements = document.querySelectorAll(".error");

    elements.forEach(field => {

        field.textContent = ""
    });
}



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