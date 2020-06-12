import { getElement } from "../lib/helper";

function renderPatient(data) {

    console.log("render patient", data)
}


function renderDoctor(data) {

    console.log(data)
    const { id, firstname, lastname, email, contact, gender } = data;


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
                    </div>
                    <!-- end text-wrapper -->

                    <!-- cta-wrappper -->
                    <div class="cta-wrapper">
                        <a href="book_appointment.html?id=${id}" class="cta">Book Appointment</a>
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