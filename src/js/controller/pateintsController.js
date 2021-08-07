import Patient from "../model/patient";
import _ from "lodash";
import * as UsersView from "../view/usersView";

export default async function () {
  const patient = new Patient();

  if (patient.checkLogin()) {
    //  get list of patients
    const data = await patient.getPatients();
    if (!_.isEmpty(data)) {
      UsersView.renderPatients(data);
    }
  }
}
