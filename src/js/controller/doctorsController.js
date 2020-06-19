import Doctor from "../model/doctor";
import _ from "lodash";
import * as UsersView from "../view/UsersView";

export default async function (user) {

    const doctor = new Doctor()

    const doctors = await doctor.getDoctors();
    if (!_.isEmpty(doctors)) {


        UsersView.renderDoctors(doctors)
    }


}