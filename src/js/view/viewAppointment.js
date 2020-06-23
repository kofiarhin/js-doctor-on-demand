import { test, getElement } from "../lib/helper";


const element = getElement("#view-appointment .wrapper")

function renderPatientAppointment(data) {

    let { patientData: { firstname, lastname, email, contact, gender, profile }, reason } = data;

    if (!profile) {
        profile = `./images/patients/patient-${gender}.jpg`
    }

    let markup = `
           <!-- cover -->
                <div class="cover" style="background-image: url(${profile})"></div>
                <!-- end cover -->

                <!-- content -->
                <div class="content">
                    <p class="name">Name: ${firstname} ${lastname}</p>
                    <p class="email">Email: ${email}</p>
                    <p class="contact">Contact: ${contact}</p>
                    <p class="detail">${reason}</p>
                </div>

                <!-- end content -->

                <!-- cta-wrapper -->
                <div class="cta-wrapper">
                  <a href="#" class="cta cta-block cta-success">Complete</a>
             <a href="#" class="cta cta-block cta-danger">Delete Appointment</a>
                </div>
                <!-- end cta-wrapper -->
    
    `;

    element.innerHTML = markup;


}


// doctor Appointment profile
function renderDoctorAppointment(data) {

    test(data)

    const { doctorData: { firstname, lastname, email, gender, contact }, reason } = data;


    let markup = `
           <!-- cover -->
                <div class="cover" style="background-image: url(./images/doctors/doctor-${gender}.jpg)"></div>
                <!-- end cover -->

                <!-- content -->
                <div class="content">
                <h2>Personal Detail</h2>
                    <p class="name">Name: ${firstname} ${lastname}</p>
                    <p class="email">Email: ${email}</p>
                    <p class="contact">Contact: ${contact}</p>
                    <h2> Complaint Details </h2>
                    <p class="detail">${reason}</p>
                </div>

                <!-- end content -->

                <!-- cta-wrapper -->
                <div class="cta-wrapper">
                  <a href="#" class="cta cta-block cta-success">Complete</a>
             <a href="#" class="cta cta-block cta-danger">Delete Appointment</a>
                </div>
                <!-- end cta-wrapper -->
    
    `;

    element.innerHTML = markup;
}


function renderAdminAppointment(data) {

    const { patientData: { firstname, lastname, email, contact, gender }, reason, doctorData } = data;
    let markup = `

        <h2 class="sub-title center">Patient Detail</h2>
           <!-- cover -->
                <div class="cover" style="background-image: url(./images/patients/patient-${gender}.jpg)"></div>
                <!-- end cover -->

                <!-- content -->
                <div class="content">
                    <p class="name">Name: ${firstname} ${lastname}</p>
                    <p class="email">Email: ${email}</p>
                    <p class="contact">Contact: ${contact}</p>
                    <h2> Assinged Doctor: <a href="user.html?id=${doctorData.userId}">${doctorData.firstname} ${doctorData.lastname} </a> </h2>
                    <h2> Complaint Details </h2>
                    <p class="detail">${reason}</p>

                    
                </div>

                <!-- end content -->

                <!-- cta-wrapper -->
                <div class="cta-wrapper">
                  <a href="#" class="cta cta-block cta-success">Complete</a>
                  <a href="#" class="cta cta-block cta-danger">Delete Appointment</a>
                </div>
                <!-- end cta-wrapper -->
    
    `;

    element.innerHTML = markup;
}


export function renderAppointment(role, data) {

    // if role is doctor render patient details
    if (role === "doctor") {

        renderPatientAppointment(data);
    }

    // if role is patient render doctor profile
    else if (role === "patient") {


        renderDoctorAppointment(data)
    }

    else if (role === "admin") {

        renderAdminAppointment(data)
    }


}