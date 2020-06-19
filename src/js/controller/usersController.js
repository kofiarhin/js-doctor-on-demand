import User from "../model/user";
import * as  UsersView from "../view/usersView";

export default async function () {

    const search = window.location.search
    const query = new URLSearchParams(search).get("query");


    // UsersView.renderTitle(query)

    if (query && query.length > 0) {

        // UsersView.renderTitle(query)

        // get users from database and render to ui 
        const user = new User();
        const users = await user.getUsers(query);

        if (!_.isEmpty(users)) {

            UsersView.renderPatients(users)
        }


    }
}