import { getElement, test } from "../lib/helper";


function showSideNav() {

    const sidenav = getElement('.sidenav');

    sidenav.classList.add("active")

    test('pass ')
}


const header = getElement(".main-header");
const menu = getElement(".menu");

if (menu) {

    menu.addEventListener("click", showSideNav);

}


// render custom  url if situations if role patient or doctor or admin
function renderUrl(role) {

    if (role === "doctor") {

        return `<a href='patients.html'>Patients</a>`

        // admin
    } else if (role === "admin") {

        return `
                <a href='patients.html'>Patients</a>    
                <a href='doctors.html'>Doctors</a>
        `;

    } else if (role === "patient") {

        return `
                    <a href='doctors.html'>Doctors</a>
                    <a href="about.html">About Us</a>
                    <a href="contact.html">Contact</a>
                    <a href="pricing.html">Pricing</a>
                    `
            ;

    }
}


function renderSideNav(markup) {

    markup += `<i class="fa fa-window-close close"> </i>`;

    if (markup) {

        const sidenav = getElement(".sidenav");
        if (sidenav) {
            sidenav.classList.remove("active")
            sidenav.innerHTML = markup;
        }

    }

}


// render when user is logged in
export function renderHeader(data) {


    let markup = "";

    if (header) {

        if (data) {
            const { firstname, role, id } = data;

            markup = `

                <a href="index.html">
                    <h1 class="logo">BruceCare</h1>
                </a>

                <nav>  
                    <a href='profile.html?id=${id}'>${firstname}</a>
                    <a href="dashboard.html">Dashboard</a>
                    ${
                // render custom links based on roles
                renderUrl(role)
                }
                    <a href="#logout" class="logout">Logout</a>
                </nav>
        `;

            header.innerHTML = markup;

        }

        renderSideNav(markup)

    }


}




export function renderDefault() {

    const header = getElement(".main-header ");

    let markup = `
     
    <a href="index.html">
                    <h1 class="logo">BruceCare</h1>
                </a>
        <nav>
            <a href="index.html">Home</a>
                    <a href="about.html">About Us</a>
                    <a href="contact.html">Contact</a>
                    <a href="pricing.html">Pricing</a>
                    <a href="login.html">Login</a>
                    <a href="register.html" class="cta">Let's Get Started</a>
        </nav>
     `;

    header.innerHTML = markup;
    renderSideNav(markup)

}