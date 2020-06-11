import { getElement } from "../lib/helper";

// render dashboard title
export function renderTitle({ firstname, lastname, email }) {

    const element = getElement("#dashboard .main-title span")

    element.textContent = firstname;
}

// render dashboard title
export function renderDashboard(role) {

    console.log(role)
    let markup = ``;
    const element = getElement("#dashboard .container");

    // admin
    if (role === "admin") {

        markup = `
        
          <!-- dashbaord-wrapper -->
            <div class="dashboard-wrapper">

                <!-- dash-item-unit -->
                <a href="users.html?query=doctor" class="dash-item-unit">
                    <i class="icon fa fa-user-md"></i>
                    <p>Doctors</p>
                </a>
                <!-- end dash-item-unit -->


                <!-- dash-item-unit -->
                <a href="users.html?query=patient" class="dash-item-unit">
                    <i class="icon fas fa-user-injured"></i>
                    <p>Patients</p>
                </a>
                <!-- end dash-item-unit -->


                <!-- dash-item-unit -->
                <a href="#appointments" class="dash-item-unit">
                    <i class="icon fas fa-calendar-check"></i>
                    <p>Appointments</p>
                </a>
                <!-- end dash-item-unit -->


                <!-- dash-item-unit -->
                <a href="#appointments" class="dash-item-unit">
                    <i class="icon fas fa-cogs"></i>
                    <p>Settings</p>
                </a>
                <!-- end dash-item-unit -->

            </div>
            <!-- end dashboard-wrapper -->
        `;


    }

    // doctor 
    else if (role === "doctor") {
        markup = `
        
          <!-- dashbaord-wrapper -->
            <div class="dashboard-wrapper">

                <!-- dash-item-unit -->
                <a href="profile.html" class="dash-item-unit">
                    <i class="icon fa fa-user"></i>
                    <p>Profile</p>
                </a>
                <!-- end dash-item-unit -->


                <!-- dash-item-unit -->
                <a href="#appointments" class="dash-item-unit">
                    <i class="icon fas fa-calendar-check"></i>
                    <p>Appointments</p>
                </a>
                <!-- end dash-item-unit -->


                <!-- dash-item-unit -->
                <a href="#appointments" class="dash-item-unit">
                    <i class="icon fas fa-cogs"></i>
                    <p>Settings</p>
                </a>
                <!-- end dash-item-unit -->

            </div>
            <!-- end dashboard-wrapper -->
        `;

    }

    else if (role === "patient") {

        markup = `
        
          <!-- dashbaord-wrapper -->
            <div class="dashboard-wrapper">

                <!-- dash-item-unit -->
                <a href="profile.html" class="dash-item-unit">
                    <i class="icon fa fa-user"></i>
                    <p>Profile</p>
                </a>
                <!-- end dash-item-unit -->


                <!-- dash-item-unit -->
                <a href="#appointments" class="dash-item-unit">
                    <i class="icon fas fa-calendar-check"></i>
                    <p>Appointments</p>
                </a>
                <!-- end dash-item-unit -->


                <!-- dash-item-unit -->
                <a href="#appointments" class="dash-item-unit">
                    <i class="icon fas fa-cogs"></i>
                    <p>Settings</p>
                </a>
                <!-- end dash-item-unit -->

            </div>
            <!-- end dashboard-wrapper -->
        `;


    }

    element.innerHTML = markup;
}