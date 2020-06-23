import { getElement, test } from "../lib/helper";
import _ from "lodash";


import User from "../model/user";
const search = new URLSearchParams(window.location.search);
const id = search.get("id");

const user = new User();

// global state
const state = {
    blob: ""
}


const file = getElement("#file");
const cta = getElement(".cta-wrapper .cta-success")


function renderButton() {

    cta.classList.add("active");
}


function ChangeController() {

    const reader = new FileReader();
    const result = getElement("#result");
    reader.onload = function (e) {

        state.blob = reader.result;
        result.style.backgroundImage = `url(${reader.result})`;
        renderButton();

    }

    reader.readAsDataURL(file.files[0]);

}

async function SaveController() {

    await user.updateProfile(id, state.blob)

    window.location.href = `profile.html?id=${id}`;
}

// change profile controller
export default function () {



    file.addEventListener("change", ChangeController);

    cta.addEventListener("click", SaveController);
}