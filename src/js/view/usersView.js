import { getElement } from "../lib/helper";


function renderCustomData(query) {


}


function renderDoctors(data) {


    const element = getElement("#users .container .users-wrapper");

    let output = "";
    data.forEach(dataItem => {
        const { id, gender, email, firstname, lastname, specialty } = dataItem;
        let markup = `

                     <a href="user.html?id=${id}" class="user-unit">
                    <div class="cover" style="background-image:url(./images/doctors/doctor-${gender}.jpg)"></div>
                    <div class="content">
                        <p class="name">${firstname} ${lastname}</p>
                        <p class="email">${email}</p>
                        <p class="specialty">${specialty}</p>
                    </div>
                </a>
                `;

        output += markup;
    });

    element.innerHTML = output;
}


function renderPatients(data) {

    console.log(data)
    data.forEach(dataItem => {

        console.log(dataItem)
    })
}



// render list of users
export function renderUsers(query, users) {

    if (query === "doctor") {

        renderDoctors(users)
    }

    else if (query === "patient") {

        renderPatients(users)
    }

    // let output = "";
    // const element = getElement("#users .container .users-wrapper");

    // users.forEach(user => {

    //     console.log(user)
    // let markup = `

    //              <a href="user.html?id=${user.id}" class="user-unit">
    //             <div class="cover" style="background-image:url(./images/${query}s/${query}-${user.gender}.jpg)"></div>
    //             <div class="content">
    //                 <p class="name">${user.firstname} ${user.lastname}</p>
    //                 <p class="email">${user.email}</p>
    //                 ${renderCustomData(query, user)}
    //                 <p class="specialty">${user.specialty}</p>
    //             </div>
    //         </a>
    //         `;

    //     output += markup;
    // });


    // element.innerHTML = output;


}


export function renderTitle(query) {

    const title = getElement(".main-title");

    if (query === "patient") {

        title.textContent = "List Of Patients"
    } else if (query === "doctor") {

        title.textContent = "Book Appointment with a Doctor!"
    }
}

