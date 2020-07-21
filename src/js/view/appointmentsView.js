import { test, getElement } from "../lib/helper";
import _ from "lodash";


function renderTable(data) {

    test("render table");
}
// rnder appointments
export function renderAppointments(data) {

    if (!_.isEmpty(data)) {

        renderTable(data);
    }

}
