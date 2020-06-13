import { getElement } from "../lib/helper";

export function renderHeader(data) {




    const header = getElement(".main-header nav");

    if (header) {

        let markup = "";
        if (data) {
            const firstname = data.firstname;

            markup = `
                <nav>  
                        <a href="dashboard.html">Dashboard</a>
                        <a href='profile.html'>${firstname}</a>
                        <a href="logout.html">Logout</a>
                
                </nav>
        `;

            header.innerHTML = markup;
        }
    }


}