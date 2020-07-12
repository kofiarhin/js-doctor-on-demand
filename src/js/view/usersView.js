import { getElement, test } from "../lib/helper";
import _ from "lodash";

export function renderDoctors(data) {


    const element = getElement("#doctors .container .users-wrapper");
    const title = getElement(".main-title");


    let output = "";

    data.forEach(dataItem => {

        let { id, gender, email, firstname, lastname, specialty, profile } = dataItem;

        if (!profile) {

            profile = `./images/doctors/doctor-${gender}.jpg`;
        }

        let markup = `

                     <a href="user.html?id=${id}" class="user-unit" data-aos="fade-left">
                    <div class="cover" style="background-image:url(${profile})"></div>
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

            let { id, gender, email, firstname, lastname, package_name = "none", profile } = dataItem;

            if (!profile) {

                profile = `./images/patients/patient-${gender}.jpg`;
            }

            let markup = `

                     <a href="user.html?id=${id}" class="user-unit">
                    <div class="cover" style="background-image:url(${profile})"></div>
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








