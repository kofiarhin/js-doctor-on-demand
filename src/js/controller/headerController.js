import { loggedIn } from "../lib/helper";
import * as HeaderView from "../view/headerView";
import User from "../model/user";


export default function () {

    const user = new User();

    if (user.checkLogin()) {

        // take out the password
        const { userData: { password, ...rest } } = user;

        HeaderView.renderHeader(rest)
    }


}