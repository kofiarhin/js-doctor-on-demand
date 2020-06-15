import { getElement } from "../lib/helper";



export function renderUsers(query, data) {

    let output = "";
    const element = getElement("#users .container .users-wrapper");

    data.forEach(user => {


        let markup = `
                
                     <a href="user.html?id=${user.id}" class="user-unit">
                    <div class="cover" style="background-image:url(./images/doctors/doctor-${user.gender}.jpg)"></div>
                    <div class="content">
                        <p class="name">${user.firstname} ${user.lastname}</p>
                        <p class="email">${user.email}</p>
                    </div>
                </a>
                `;

        output += markup;
    });


    element.innerHTML = output;


}


export function renderTitle(title) {

    console.log('users view render title render title')
}

