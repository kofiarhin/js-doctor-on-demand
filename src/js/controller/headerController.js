import { loggedIn } from "../lib/helper";
import * as HeaderView from "../view/headerView";
import User from "../model/user";
import { getElement, test } from "../lib/helper";
import logoutController from "./logoutController";


function sideNavController() {

    const sidenav = getElement(".sidenav");

    sidenav.classList.add("active");
}

// header controller
export default function () {

    const user = new User();

    const header = getElement(".main-header");


    // logout user
    header.addEventListener("click", function (event) {

        if (event.target.className === "logout") {
            logoutController();
        }

        if (event.target.className === "fa fa-bars") {
            sideNavController();
        }



    })

    if (user.checkLogin()) {

        // take out the password
        const { userData: { password, ...rest } } = user;
        HeaderView.renderHeader(rest)

    } else {

        HeaderView.renderDefault();

    }

}