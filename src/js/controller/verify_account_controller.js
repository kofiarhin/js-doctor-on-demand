import { getElement } from "../lib/helper";
import User from "../model/user";
import Doctor from "../model/doctor";


const user = new User();


async function SubmitController(e) {
    e.preventDefault();

    const search = new URLSearchParams(window.location.search);

    const id = search.get("id");

    // check if there is an id and user is an admin
    if (id && id.length > 0 && user.checkLogin() & user.userData.role === "admin") {


        const doctor = new Doctor();

        try {
            await doctor.verify(id)
            window.location.href = `doctors.html`
        } catch (error) {

            console.log(error);
        }




        return;
        const { doctorId } = userData;

        try {
            await user.verifyDoctor(doctorId)

            window.location.href = "dashboard.html"
        } catch (error) {


        }
    }


}



export default function () {

    const form = getElement("#verify form");
    form.addEventListener("submit", SubmitController)

}