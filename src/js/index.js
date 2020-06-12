import "../css/styles.sass";
import { getElement } from "./lib/helper";
import RegisterController from "./controller/registerController";
import LoginController from "./controller/LoginController";
import DashboardController from "./controller/dashboardController";
import HeaderController from "./controller/headerController";
import LogoutController from "./controller/logoutController";
import ProfileController from "./controller/profileController";
import UsersController from "./controller/usersController";
import UserController from "./controller/userController";
import BookAppointmentController from "./controller/bookAppointmentController"

// global state 
const state = {
    url: "index.html"
}


// main-controller
function MainController() {

    // render Header
    HeaderController();

    // get route information and set state of url
    Router();



}



function Router() {

    // get url
    const url = window.location.pathname.replace("/", "");

    // set state of url
    state.url = url;


    console.log("---------current-page: ", state.url)


    if (!url && state.url === "") {

        state.url = "index.html"
    }

    else if (state.url === "register.html") {
        const registerBtn = getElement("#register-btn")
        registerBtn.addEventListener("click", RegisterController);

    }

    // login page
    else if (state.url === "login.html") {
        const loginBtn = getElement("#login-btn")

        loginBtn.addEventListener("click", LoginController)

    }


    // dashboard
    else if (state.url === "dashboard.html") {

        DashboardController()
    }

    // logout
    else if (state.url === "logout.html") {

        LogoutController()

    }

    // profile
    else if (state.url === "profile.html") {

        ProfileController()
    }

    // list of users

    else if (state.url === "users.html") {

        UsersController()
    }

    // user
    else if (state.url === "user.html") {

        UserController()
    }

    else if (state.url === "book_appointment.html") {

        BookAppointmentController()
    }
}

window.addEventListener("load", MainController);


