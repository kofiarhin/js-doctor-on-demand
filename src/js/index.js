import "../css/styles.sass";
import { getElement, test, renderLoader } from "./lib/helper";
import RegisterController from "./controller/registerController";
import LoginController from "./controller/LoginController";
import DashboardController from "./controller/dashboardController";
import HeaderController from "./controller/headerController";
import LogoutController from "./controller/logoutController";
import ProfileController from "./controller/profileController";
import UsersController from "./controller/usersController";
import UserController from "./controller/userController";
import BookAppointmentController from "./controller/bookAppointmentController"
import AppointmentController from "./controller/appointmentController";
import ViewAppointmentController from "./controller/viewAppointmentController";
import RegisterDoctorController from "./controller/register_doctor_controller"
import VerifyAccountController from "./controller/verify_account_controller";
import DoctorsController from "./controller/DoctorsController";
import PatientsController from "./controller/pateintsController";
import ChangeProfileController from "./controller/change_profile_controller";
import ChoosePlanController from "./controller/choose_plan_controller";
import EditProfileController from "./controller/editProfileController";
import SideNavController from "./controller/side_nav_controller";
import FooterController from "./controller/footer_controller";
import IndexController from "./controller/indexController";
import AboutController from "./controller/aboutController";
import ContactController from "./controller/contactController";
import AppointmentsController from "./controller/appointmentsController";


// global state 
const state = {
    url: "index.html"
}



// main-controller
function MainController() {



    // get route information and set state of url
    Router();

    // // // // render loader

    // render Header
    HeaderController();

    // sidenav controller
    SideNavController();

    // render footer
    FooterController();


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
    if (!url || state.url === "" || state.url === "index.html") {

        IndexController();

    }

    // about page
    else if (state.url === "about.html") {
        renderLoader();
        AboutController();
    }
    // contact
    else if (state.url === "contact.html") {
        // renderLoader();

        ContactController();
    }

    // register page
    else if (state.url === "register.html") {

        // renderLoader();
        // const registerBtn = getElement("#register-btn")
        // registerBtn.addEventListener("click", RegisterController);

        RegisterController();
    }

    // create account
    else if (state.url === "create_account.html") {

        renderLoader();
        RegisterDoctorController()
        // const registerBtn = getElement("#register-btn")
        // registerBtn.addEventListener("click", RegisterDoctorController);
    }

    // login page
    else if (state.url === "login.html") {

        // renderLoader();
        LoginController();
        // const loginBtn = getElement("#login-btn")
        // loginBtn.addEventListener("click", LoginController)

        // test("Login controller")

    }

    // dashboard
    else if (state.url === "dashboard.html") {
        renderLoader();
        DashboardController()
    }

    // profile
    else if (state.url === "profile.html") {

        ProfileController()
    }

    // doctors
    else if (state.url === "doctors.html") {

        renderLoader();
        DoctorsController()
    }

    // patients
    else if (state.url === 'patients.html') {

        renderLoader();
        PatientsController();
    }

    // list of users
    else if (state.url === "users.html") {

        renderLoader();
        UsersController()
    }

    // user
    else if (state.url === "user.html") {

        UserController()
    }
    // book appointment
    else if (state.url === "book_appointment.html") {

        BookAppointmentController()
    }


    // appointments
    else if (state.url === "appointments.html") {

        AppointmentsController();
    }

    // apppointment
    else if (state.url === "appointment.html") {
        AppointmentController()
    }

    // view appointment 
    else if (state.url === "view_appointment.html") {
        // renderLoader();
        ViewAppointmentController();
    }

    // verify account
    else if (state.url === "verify_account.html") {
        renderLoader();
        VerifyAccountController();
    }
    // change profile
    else if (state.url === "change_profile.html") {
        renderLoader();
        ChangeProfileController()
    }

    else if (state.url === "edit_profile.html") {
        EditProfileController();
    }
    // chosse plan
    else if (state.url === "choose_plan.html") {
        // renderLoader();
        ChoosePlanController();
    }
}


window.addEventListener("load", MainController);


