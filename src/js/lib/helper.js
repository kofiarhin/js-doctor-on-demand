import _ from "lodash";

export function getElement(name) {

    return document.querySelector(name)

}


export function validateData(userData) {

    const errors = []
    // check for errors
    for (let key in userData) {
        if (userData[key] === "") {
            errors.push({ [key]: `${key} is required` })
        }
    }

    return errors;
}

export function loggedIn() {

    const user = sessionStorage.getItem("user");

    if (!_.isEmpty(user)) {
        return true;
    }

}
