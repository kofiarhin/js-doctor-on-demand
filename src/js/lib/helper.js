import _ from "lodash";

export function getElement(name) {

    return document.querySelector(name)

}

// remove loader
export function removeLoader() {

    const loader = getElement(".loader");
    loader.classList.remove("active");
}

// show laoder
export function showLoader() {

    let markup = `<div class="loader active"> 
                <h1> Loading..... </h1>
                </div>`;

    document.body.insertAdjacentHTML("beforeend", markup);

}


export function renderLoader() {

    showLoader()
    setTimeout(removeLoader, 3000)
}


//  so that we dont write the damn console.log
export function test(item) {

    console.log(item)
}


// redirect user to page
export function redirect(path) {

    window.location.href = path;
}

// validate data
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

export function auth() {

    const user = sessionStorage.getItem("user");

    if (!_.isEmpty(user)) {

        return true;
    }

    return false;
}
