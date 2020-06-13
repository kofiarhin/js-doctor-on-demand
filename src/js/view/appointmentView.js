import { getElement } from "../lib/helper";



export function renderAppointments(role, data) {

    const element = getElement("#appointments .container .wrapper")

    let output = "";
    let markup = "";

    // render data
    data.forEach(item => {


        // markup for patient
        if (role === "patient") {
            markup = `
                        <p> Patient markup </p>
             `;
        }

        // markup for doctor
        else if (role === "doctor") {
            markup = `
                        <p> Doctor Markup </p>
            `;
        }


        output += markup;
    });


    element.innerHTML = output;

}