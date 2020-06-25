import User from "../model/user";
import { test, getElement } from "../lib/helper";

const user = new User();

function renderButton() {

    const wrapper = getElement(".cta-wrapper");
    let markup = "";

    if (user.checkLogin()) {

        markup = `
                    <button class="cta cta-block">  Submit </button>
            `;
    } else {

        markup = ` <a href="login.html" class="cta cta-block"> You need to Login </a>`
    }

    wrapper.innerHTML = markup;

}


// submit controller
async function SubmitController(e) {
    e.preventDefault();

    //  get package id from url
    const search = new URLSearchParams(window.location.search);
    const packageId = search.get("id");

    if (user.checkLogin()) {

        // update package
        const { userData: { id: userId } } = user;
        const userData = await user.getUser(userId);

        const { patientId } = userData;

        try {
            await user.updatePackage(patientId, packageId);

            window.location.href = "dashboard.html";
        } catch (ex) {

            test("there was a problem updating account")
        }
    }
}

export default function () {

    renderButton()
    // get form
    const form = getElement("form");
    form.addEventListener("submit", SubmitController);
}