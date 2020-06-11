export default function (url) {

    console.log(url)

    if (url === "register.html") {
        const registerBtn = getElement("#register-btn")
        registerBtn.addEventListener("click", RegisterController);

    }

    // login page
    else if (url === "login.html") {
        const loginBtn = getElement("#login-btn")

        loginBtn.addEventListener("click", LoginController)

    }


    // dashboard

    else if (url === "dashboard.html") {

        DashboardController()
    }

}