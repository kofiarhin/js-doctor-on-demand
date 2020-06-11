import { loggedIn } from "../lib/helper";
import * as HeaderView from "../view/headerView";

export default function () {

    if (loggedIn) {

        const user = JSON.parse(sessionStorage.getItem("user"))
        HeaderView.renderHeader(user)
    }

}