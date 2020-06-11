import User from "../model/user";

export default function () {


    const user = new User();

    // if user is not logged in redcirect to login page
    if (!user.checkLogin()) {

        window.location.href = "login.html"
    }


    const userData = user.userData;
    console.log(userData)

}