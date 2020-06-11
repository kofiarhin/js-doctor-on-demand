import { getElement } from "../lib/helper";

export function renderHeader(data) {


    const header = getElement(".main-header nav");

    if (header) {

        let markup = "";
        if (data) {

            markup = `
                <nav>  
                        <a href="dashboard.html">Dashboard</a>
                        <a href='profile.html'>Profile</a>
                        <a href="logout.html">Logout</a>
                
                </nav>
        `;

            header.innerHTML = markup;
        }
    }


}