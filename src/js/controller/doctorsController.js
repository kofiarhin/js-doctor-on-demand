import Doctor from "../model/doctor";
import _ from "lodash";
import * as UsersView from "../view/UsersView";
import { getElement, test } from "../lib/helper";
import * as DoctorsView from "../view/doctorsView";



// state 
const state = {
    doctors: []
}


// sort controller
function SortController() {

    if (!_.isEmpty(state.doctors)) {

        const search = this.value;

        if (!_.isEmpty(search)) {

            const fileteredData = state.doctors.filter(item => item.specialty === search);
            UsersView.renderDoctors(fileteredData)

        } else {

            UsersView.renderDoctors(state.doctors)
        }


    }
}


// doctors controller

export default async function (user) {


    const select = getElement("#search select");

    select.addEventListener("change", SortController);

    const doctor = new Doctor()

    const doctors = await doctor.getDoctors();
    if (!_.isEmpty(doctors)) {

        state.doctors = doctors;

        UsersView.renderDoctors(doctors)
    } else {

        DoctorsView.renderFeedback("No doctors registered yet!")
    }


}