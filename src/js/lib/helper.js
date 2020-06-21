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


export function formatDate(timestamp) {

    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDay() + 1;

    const result = `${day}/${month}/${year}`;

    return result;
    // var timestamp = new Date('02/10/2016').getTime();
    // var todate = new Date(timestamp).getDate();
    // var tomonth = new Date(timestamp).getMonth() + 1;
    // var toyear = new Date(timestamp).getFullYear();
    // var original_date = tomonth + '/' + todate + '/' + toyear;
}

//  so that we dont write the damn console.log
export function test(item) {

    console.log(item)
}