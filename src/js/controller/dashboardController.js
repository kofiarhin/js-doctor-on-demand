import { loggedIn } from "../lib/helper";
import User from "../model/user";
import * as DashboardView from "../view/dashboardView";

export default function () {

    // create user
    const user = new User();

    //   check if user is logged in

    if (user.checkLogin()) {

        const userData = user.getData();

        if (!_.isEmpty(userData)) {

            // render title
            DashboardView.renderTitle(userData);


            // render options
            DashboardView.renderDashboard(userData);
        }
    }

}