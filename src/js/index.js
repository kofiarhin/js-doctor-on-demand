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



// model
import User from "./model/user";


const user = new User();



// global state 
const state = {
    url: "index.html"
}


function renderLoader() {

    let markup = `<svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
//    <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
// </svg>`;

    const element = document.createElement("div");

    element.classList.add("loader");

    element.innerHTML = markup;

    console.log(element);

    getElement("body").appendChild(element)

}


// main-controller
function MainController() {

    // render loader
    // renderLoader()



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
        DoctorsController(user)
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

window.addEventListener("load", MainController);


