import User from "../model/user";
import { getElement } from "../lib/helper";


// get person loggged in details
const user = new User();
const { userData } = user;

// get tole of user and render custom cta base on role
let role = "";
if (!_.isEmpty(userData)) {
    role = userData.role;
}


// render custom cta's based on current logged in user
function renderCta(data) {

    let ctaMarkup = "";

    // if user is a patiend and admin is logged in
    if (data.role === "patient" && role === "admin") {

        ctaMarkup = `
           <a href="edit_profile.html?id=${data.id}" class="cta">Edit Profile</a>
           <a href="edit_profile.html?id=" class="cta cta-danger">Delete Patient</a>      
           <a href="edit_profile.html?id=" class="cta">Update Package</a>      
        `;
    }


    // if role is admin and a doctor
    else if (role === "admin" && data.role === "doctor") {

        const { verified } = data;
        ctaMarkup = `
           <a href="edit_profile.html?id=${data.id}" class="cta">Edit Profile</a>
        `;

        if (!verified) {

            ctaMarkup += ` <a href="verify_account.html?id=${data.doctorId}" class="cta cta-success">Activate Account</a>`
        } else {
            ctaMarkup += ` <a href="edit_profile.html?id=" class="cta cta-danger">Deactivate Account</a>`
        }


    }

    // patient custom cta
    else if (role === "patient" && data.role == "doctor") {

        const { doctorId } = data;
        // doctor data 
        ctaMarkup = ` <a href="book_appointment.html?id=${doctorId}" class="cta cta-success">Book Apppointment</a>`
    }

    return ctaMarkup;

}

function renderVerified(verified) {

    const { role } = userData;

    console.log(role)
    if (role !== "admin") {
        return verified
    }

    return `<a href="verfiy_user.html?"> Verify User</a>`;
}

function renderDoctor(data) {

    let { id, firstname, lastname, email, contact, gender, specialty, cases = 0, verified, role, profile } = data;

    if (!profile) {

        profile = `./images/doctors/doctor-${gender}.jpg`;

    }

    const element = getElement("#user-profile .user-wrapper");

    let markup = `
            
                <!-- profile -->
                <div class="profile" style="background-image: url(${profile})">
                </div>
                <!-- end profile -->

                <!-- content -->
                <div class="content">

                    <!-- text-wrapper -->
                    <div class="text-wrapper">
                        <p class="name">Name: ${firstname} ${lastname}</p>
                        <p class="email">Email: ${email}</p>
                        <p class="contact">Contact: ${contact}</p>
                        <p>Specialty: ${specialty}  </p> 
                        <p>Verified: ${verified}  </p> 
                        <p>Cases: ${cases} </p> 
                    </div>
                    <!-- end text-wrapper -->

                    <!-- cta-wrappper -->
                    <div class="cta-wrapper">
                        ${renderCta(data)}
                    </div>

                    <!-- end cta-wrapper -->
                </div>
                <!-- end content -->
     `;

    element.innerHTML = markup;
};


// render patient
function renderPatient(data) {

    if (!_.isEmpty(data)) {

        let { id, firstname, lastname, email, contact, gender, role, package_name, profile } = data;

        if (!profile) {

            profile = `./images/patients/patient-${gender}.jpg`;
        }
        const element = getElement("#user-profile .user-wrapper");

        let markup = `
            
                <!-- profile -->
                <div class="profile" style="background-image: url(${profile})">
                </div>
                <!-- end profile -->

                <!-- content -->
                <div class="content">

                    <!-- text-wrapper -->
                    <div class="text-wrapper">
                        <p class="name">Name: ${firstname} ${lastname}</p>
                        <p class="email">Email: ${email}</p>
                        <p class="contact">Contact: ${contact}</p>
                    </div>
                    <!-- end text-wrapper -->

                    <!-- cta-wrappper -->
                    <div class="cta-wrapper">
                        ${renderCta(data)}
                    </div>

                    <!-- end cta-wrapper -->
                </div>
                <!-- end content -->
     `;

        element.innerHTML = markup;

    }
}



export function renderUser(data) {

    // render title
    const { role } = data;

    // render title
    renderTitle(role)

    if (data) {

        // get role of user and render title
        const role = data.role;

        if (role === "patient") {

            renderPatient(data);
        }

        else if (role === "doctor") {

            renderDoctor(data)
        }
    }

}


function renderTitle(role) {

    const title = getElement(".main-title");

    title.textContent = `${role} Profile`
}