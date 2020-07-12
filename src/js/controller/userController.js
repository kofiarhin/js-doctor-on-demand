import User from "../model/user";
import * as UserView from "../view/userView";
import { test, auth, redirect } from "../lib/helper"

export default async function () {

    // check if user is logged in
    if (!auth) {

        redirect("login.html")
    }

    const search = new URLSearchParams(window.location.search);
    const id = search.get("id");

    const user = new User();

    // get user with id from database
    const userData = await user.getUser(id);

    if (!_.isEmpty(userData)) {

        UserView.renderUser(userData)
    }


}