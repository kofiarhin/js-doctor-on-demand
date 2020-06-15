import { getElement } from "../lib/helper";

// render custom  url if situations if role patient or doctor or admin
function renderUrl(role) {

    if (role === "doctor") {

        return `<a href='users.html?query=patients'>Patients</a>`

    } else if (role === "admin") {

        return `
                <a href='users.html?query=patients'>Patients</a>    
                <a href='users.html?query=doctor'>Doctors</a>
        `;

    }
    return `<a href='users.html?query=doctor'>Doctors</a>`;
}
// render header
export function renderHeader(data) {

    const header = getElement(".main-header nav");

    if (header) {

        let markup = "";
        if (data) {
            const { firstname, role } = data;

            markup = `
                <nav>  
                    <a href='profile.html'>${firstname}</a>
                    <a href="dashboard.html">Dashboard</a>
                    ${renderUrl(role)}
                    <a href="logout.html">Logout</a>
                </nav>
        `;

            header.innerHTML = markup;
        }
    }


}