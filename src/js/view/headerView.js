import { getElement } from "../lib/helper";

// render custom  url if situations if role patient or doctor or admin
function renderUrl(role) {

    if (role === "doctor") {

        return `<a href='users.html?query=patient'>Patients</a>`

        // admin
    } else if (role === "admin") {

        return `
                <a href='patients.html'>Patients</a>    
                <a href='doctors.html'>Doctors</a>
        `;

    }
    return `<a href='doctors.html'>Doctors</a>`;
}


// render header
export function renderHeader(data) {

    const header = getElement(".main-header nav");

    if (header) {

        let markup = "";
        if (data) {
            const { firstname, role, id } = data;

            markup = `
                <nav>  
                    <a href='profile.html?id=${id}'>${firstname}</a>
                    <a href="dashboard.html">Dashboard</a>

                    ${
                // render custom links based on roles
                renderUrl(role)
                }

                    <a href="logout.html">Logout</a>
                </nav>
        `;

            header.innerHTML = markup;
        }
    }


}