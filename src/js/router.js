export default function () {

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
}