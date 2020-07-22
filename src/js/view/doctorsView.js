import { test, getElement } from "../lib/helper";


// render Feedback; 
export function renderFeedback(message) {

    const element = getElement("#feedback");

    element.innerHTML = `<p class="feedback center"> ${message} </p>`

}