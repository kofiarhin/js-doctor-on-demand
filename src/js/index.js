import "../css/styles.sass";
import { getElement, test } from "./lib/helper";
import RegisterController from "./controller/registerController";
import LoginController from "./controller/LoginController";
import DashboardController from "./controller/dashboardController";
import HeaderController from "./controller/headerController";
import LogoutController from "./controller/logoutController";
import ProfileController from "./controller/profileController";
import UsersController from "./controller/usersController";
import UserController from "./controller/userController";
import BookAppointmentController from "./controller/bookAppointmentController"
import AppointmentsController from "./controller/appointmentController";
import ViewAppointmentController from "./controller/viewAppointmentController";
import RegisterDoctorController from "./controller/register_doctor_controller"
import VerifyAccountController from "./controller/verify_account_controller";
import DoctorsController from "./controller/DoctorsController";
import PatientsController from "./controller/pateintsController";
import ChangeProfileController from "./controller/change_profile_controller";
import ChoosePlanController from "./controller/choose_plan_controller";
import EditProfileController from "./controller/edit_profile";
import SideNavController from "./controller/side_nav_controller";


// global state 
const state = {
    url: "index.html"
}


// show laoder
function showLoader() {

    let markup = `<div class="loader active"> 
                <h1> Loading..... </h1>
                </div>`;

    document.body.insertAdjacentHTML("beforeend", markup);

}

// remove loader
function removeLoader() {

    const loader = getElement(".loader");
    loader.classList.remove("active");
}



// main-controller
function MainController() {

    // // // // render loader
    // showLoader()
    // setTimeout(removeLoader, 3000)

    // render Header
    HeaderController();

    // sidenav controller
    SideNavController();


    // get route information and set state of url
    Router();

}


// router
function Router() {

    // get url
    const url = window.location.pathname.replace("/", "");

    // set state of url
    state.url = url;

    // display current page
    console.log("---------current-page: ", state.url)

    // index page

    if (!url && state.url === "") {

        state.url = "index.html";

    }

    // register
    else if (state.url === "register.html") {
        const registerBtn = getElement("#register-btn")
        registerBtn.addEventListener("click", RegisterController);

    }

    // create account
    else if (state.url === "create_account.html") {


        RegisterDoctorController()
        // const registerBtn = getElement("#register-btn")
        // registerBtn.addEventListener("click", RegisterDoctorController);
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


    // doctors
    else if (state.url === "doctors.html") {

        DoctorsController()
    }

    // patients
    else if (state.url === 'patients.html') {

        PatientsController();
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

    // apppointment
    else if (state.url === "appointment.html") {

        AppointmentsController()
    }

    // view appointment 
    else if (state.url === "view_appointment.html") {

        ViewAppointmentController();
    }


    else if (state.url === "verify_account.html") {

        VerifyAccountController();
    } else if (state.url === "change_profile.html") {

        ChangeProfileController()
    }

    else if (state.url === "edit_profile.html") {

        EditProfileController();
    }
    // chosse plan
    else if (state.url === "choose_plan.html") {

        ChoosePlanController();
    }
}


function HashChangeController() {

    test("hash change")

}

window.addEventListener("load", MainController);


