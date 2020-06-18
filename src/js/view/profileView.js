import User from "../model/user";
import { getElement } from "../lib/helper";
import _ from "lodash";


const profileWrapper = getElement("#profile .wrapper");
const user = new User();



function renderCta(data) {

    console.log(data)
    return `<a class="cta cta-block" href="edit_profile.html?id=">Edit Profile</a>`;
}


function renderPatientProfile(data) {


    const { firstname, lastname, email, contact, gender, package_name, number_of_visits = 0 } = data;

    let markup = `
     
            <!-- cover -->
                <div class="cover" style="background-image: url(./images/patients/patient-${gender}.png)"></div>
                <!-- end cover -->

                <!-- content -->
                <div class="content">
                    <p class="name" style="text-transform: capitalize">Name: ${firstname} ${lastname}</p>
                    <p class="email">Email: ${email}</p>
                    <p class="contact"> Contact: ${contact}</p>
                    <p class="package"> Packgae: ${package_name}</p>
                    <p class="package"> Number of Visit Left: ${number_of_visits}</p>
                </div>
                <!-- end content -->

                <!-- cta-wrapper -->
                <div class="cta-wrapper">
                    ${renderCta(data)}
                </div>
                <!-- end cta-wrapper -->
     `;


    profileWrapper.innerHTML = markup;
}


function renderDoctorProfile(data) {


    const { firstname, lastname, email, contact, gender, verified, specialty } = data;


    let markup = `
     
            <!-- cover -->
                <div class="cover" style="background-image: url(./images/doctors/doctor-${gender}.jpg)"></div>
                <!-- end cover -->

                <!-- content -->
                <div class="content">
                    <p class="name" style="text-transform: capitalize">Name: ${firstname} ${lastname}</p>
                    <p class="email">Email: ${email}</p>
                    <p class="contact">Contact: ${contact}</p>
                    <p class="specialty">Specialty:${specialty} </p>
                    <h2> Work Experience </h2>
                    <p class="description">
                         m Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, a
                    
                    </p>
                </div>
                <!-- end content -->

                <!-- cta-wrapper -->
                <div class="cta-wrapper">
                    <a class="cta cta-block" href="edit_profile.html?id=">Edit Profile</a>
                </div>
                <!-- end cta-wrapper -->
     `;


    profileWrapper.innerHTML = markup;
}


function renderAdminProfile(data) {

    const { firstname, lastname, email, contact, gender } = data;

    console.log(data)
    let markup = `
            <!-- cover -->
                <div class="cover" style="background-image: url(./images/doctors/doctor-${gender}.jpg)"></div>
                <!-- end cover -->

                <!-- content -->
                <div class="content">
                    <p class="name" style="text-transform: capitalize">Name: ${firstname} ${lastname}</p>
                    <p class="email">Email: ${email}</p>
                    <p class="contact">Contact: ${contact}</p>
                </div>
                <!-- end content -->

                <!-- cta-wrapper -->
                <div class="cta-wrapper">
                    <a class="cta cta-block" href="edit_profile.html?id=">Edit Profile</a>
                </div>
                <!-- end cta-wrapper -->
     `;


    profileWrapper.innerHTML = markup;
}

export function renderProfile(data) {


    // check if dat is not empty    
    if (!_.isEmpty(data)) {

        // get role
        const role = data.role;

        if (role === "patient") {

            renderPatientProfile(data);

        } else if (role === "doctor") {

            renderDoctorProfile(data)
        } else if (role === "admin") {

            renderAdminProfile(data)
        }

    }



}