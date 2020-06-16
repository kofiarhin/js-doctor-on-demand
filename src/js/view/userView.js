import User from "../model/user";
import { getElement } from "../lib/helper";

const user = new User();
const { userData } = user;
let role = "";
if (!_.isEmpty(userData)) {
    role = userData.role;

}

function renderPatient(data) {

    console.log("render patient", data)
}



// render custom cta's based on current logged in user
function renderCta(data) {


    // get id and verified info of user
    const { id, verified } = data;

    // get login detail of person logged in
    let markup = "";
    // if rele is admin
    if (role === "admin") {

        markup = `
        <a href="edit_profile.html?id=${id}" class="cta">Edit Profile</a>
        <a href="book_appointment.html?id=${id}" class="cta cta-danger">Delete Account</a>
        `;

        return markup;

    }

    else if (role === "patient") {

        if (!verified) {

            markup = `<a href="#" class='cta cta-block cta-grey'> Doctor Not Verified Yet </a>`;
            return markup;
        }
    }

    return `<a href="book_appointment.html?id=${id}" class="cta cta-success">Book Appointment</a>`

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

    const { id, firstname, lastname, email, contact, gender, specialty, cases = 0, verified, role } = data;


    const element = getElement("#user-profile .user-wrapper");

    let markup = `
            
                <!-- profile -->
                <div class="profile" style="background-image: url(./images/doctors/doctor-${gender}.jpg)">
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

export function renderUser(data) {

    if (data) {

        const role = data.role;

        if (role === "patient") {

            renderPatient(data);
        }

        else if (role === "doctor") {

            renderDoctor(data)
        }
    }

}