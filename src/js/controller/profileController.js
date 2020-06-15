import User from "../model/user";
import _ from "lodash";
import * as ProfileView from "../view/profileView";

export default function () {


    const user = new User();

    // if user is not logged in redcirect to login page
    if (!user.checkLogin()) {

        window.location.href = "login.html"
    }

    if (!_.isEmpty(user.userData)) {

        const { userData } = user;

        ProfileView.renderProfile(userData);


    }

}