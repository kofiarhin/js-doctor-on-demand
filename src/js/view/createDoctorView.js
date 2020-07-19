import { getElement, test } from "../lib/helper";

export function clearUi() {

    const errors = document.querySelectorAll(".error");

    errors.forEach(error => {

        error.textContent = "";
    });
}