import User from "../model/user";
import _ from "lodash";
import * as ProfileView from "../view/profileView";

export default async function () {


    const user = new User();


    const search = new URLSearchParams(window.location.search);

    const id = search.get('id');

    const userData = await user.getUser(id);

    if (!_.isEmpty(userData)) {

        ProfileView.renderProfile(userData)
    }

}