import User from "../model/user";
import * as UserView from "../view/userView";
export default async function () {

    const search = new URLSearchParams(window.location.search);
    const id = search.get("id");

    if (id && id.length > 0) {

        const user = new User();
        const newUser = await user.getUser(id)

        UserView.renderUser(newUser);
    }
}