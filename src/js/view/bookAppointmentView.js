import { getElement, test } from "../lib/helper"

export function renderTitle({ firstname, lastname }) {


    const title = getElement(".main-title");

    title.textContent = `Book Appoiintment with Dr ${firstname} ${lastname}`;
}


export function renderError() {

    const element = getElement(".form-wrapper");

    let markup = `<div class="text-wrapper"> 
                <a href="pricing.html" class="error center">  Update your subscription Here </a>
    </div>`;
    element.innerHTML = markup;
}

export function renderForm() {

    let element = getElement(".form-wrapper");

    let markup = `
           
     `;


    element.innerHTML = markup;

}