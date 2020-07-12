import User from "../model/user";
import _ from "lodash";
import * as ProfileView from "../view/profileView";
import { test, showLoader, removeLoader } from "../lib/helper";

export default async function () {

    showLoader();

    const user = new User();

    // get user id from url
    const search = new URLSearchParams(window.location.search);
    const id = search.get('id');

    const userData = await user.getUser(id);

    if (!_.isEmpty(userData)) {

        removeLoader();
        ProfileView.renderProfile(userData)
    }

}