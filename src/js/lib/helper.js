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

    let markup = `
    <div class="loader active">
        <div id="wifi-loader">
            <svg class="circle-outer" viewBox="0 0 86 86">
                <circle class="back" cx="43" cy="43" r="40"></circle>
                <circle class="front" cx="43" cy="43" r="40"></circle>
                <circle class="new" cx="43" cy="43" r="40"></circle>
            </svg>
            <svg class="circle-middle" viewBox="0 0 60 60">
                <circle class="back" cx="30" cy="30" r="27"></circle>
                <circle class="front" cx="30" cy="30" r="27"></circle>
            </svg>
            <svg class="circle-inner" viewBox="0 0 34 34">
                <circle class="back" cx="17" cy="17" r="14"></circle>
                <circle class="front" cx="17" cy="17" r="14"></circle>
            </svg>
            <div class="text" data-text="Loading....."></div>
        </div>
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
