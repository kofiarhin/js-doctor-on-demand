import { test, getElement } from "../lib/helper";


// render Feedback; 
export function renderFeedback(message) {

    const element = getElement("#feedback");

    element.innerHTML = `<p class="feedback center"> ${message} </p>`

}

export function clearFeedBack() {

    const element = getElement("#feedback");

    element.textContent = "";
}


export function clearUsers() {

    const element = getElement(".users-wrapper");
    element.innerHTML = "";
}