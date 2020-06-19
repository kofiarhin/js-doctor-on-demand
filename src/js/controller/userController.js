import User from "../model/user";
import * as UserView from "../view/userView";

export default async function () {

    const search = new URLSearchParams(window.location.search);
    const id = search.get("id");

    const user = new User();


    // get user with id from database
    const userData = await user.getUser(id);

    if (!_.isEmpty(userData)) {

        UserView.renderUser(userData)
    }


}