import { getElement } from "../lib/helper";
import _ from "lodash";

export function renderDoctors(data) {


    const element = getElement("#doctors .container .users-wrapper");
    const title = getElement(".main-title");


    let output = "";

    data.forEach(dataItem => {
        const { id, gender, email, firstname, lastname, specialty } = dataItem;


        let markup = `

                     <a href="user.html?id=${id}" class="user-unit">
                    <div class="cover" style="background-image:url(./images/doctors/doctor-${gender}.jpg)"></div>
                    <div class="content">
                        <p class="name">${firstname} ${lastname}</p>
                        <p class="email">${email}</p>
                        <p class="specialty">${specialty}</p>
                    </div>
                </a>
                `;

        output += markup;
    });

    element.innerHTML = output;
    title.textContent = "Our Doctors"
}

export function renderPatients(data) {


    const element = getElement(".users-wrapper");
    const title = getElement(".main-title");


    let output = "";

    if (!_.isEmpty(data)) {

        data.forEach(dataItem => {

            const { id, gender, email, firstname, lastname, package_name } = dataItem;

            let markup = `

                     <a href="user.html?id=${id}" class="user-unit">
                    <div class="cover" style="background-image:url(./images/patients/patient-${gender}.jpg)"></div>
                    <div class="content">
                        <p class="name">${firstname} ${lastname}</p>
                        <p class="email">${email}</p>
                        <p class="package-name">${package_name}</p>
                    </div>
                </a>
                `;

            output += markup;
        });

        element.innerHTML = output;

    }
}








