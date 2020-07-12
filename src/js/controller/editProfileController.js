import { test, validateData, auth, getElement, showLoader, removeLoader, redirect } from "../lib/helper";
import User from "../model/user";
import { rest } from "lodash";

const user = new User();
const firstname = getElement("#firstname");
const lastname = getElement("#lastname");


// get id from url
const search = window.location.search;
const id = new URLSearchParams(search).get("id");

// submit controller

async function SubmitController(e) {

    e.preventDefault();

    const dataToSubmit = {
        firstname: firstname.value,
        lastname: lastname.value
    };

    // validate data
    const errors = validateData(dataToSubmit);

    if (!_.isEmpty(errors)) {

        test('render errors');
        test(errors);

    } else {

        try {

            await user.updateInfo(id, dataToSubmit);
            redirect(`profile.html?id=${id}`)
        } catch (error) {

            test(error);
        }



        // if (user.updateInfo(id, dataToSubmit)) {

        //     redirect(`profile.html ? id = ${ id } `)
        // }

    }

}

// edit profile
export default async function () {

    showLoader();

    // check if user is logged ins
    if (!auth) {
        redirect("login.html")
    }

    // get user from database
    const userData = await user.getUser(id);

    // check if userData is not empty
    if (!_.isEmpty(userData)) {

        removeLoader();
        // set fired values
        firstname.value = userData.firstname;
        lastname.value = userData.lastname;

        const form = getElement(".form-wrapper form");
        form.addEventListener("submit", SubmitController);
    } else {

        // redirect to error page
        test("user not found")
    }

}