import { getElement, formatDate } from "../lib/helper";



function renderPatientAppointment(data) {

    const element = getElement("#appointments .table tbody");
    let output = "";
    data.forEach(item => {
        console.log(item);
        const { doctorData, createdOn, status } = item;
        const { firstname, lastname, email, contact } = doctorData;

        let markup = `
    <tr role="row">
          <td role="cell" data-title="Date"> ${formatDate(createdOn)}</td>
          <td role="cell" data-title="First name">${firstname}</td>
          <td role="cell" data-title="Last Name">${lastname}</td>
          <td role="cell" data-title="Email">${email}</td>
          <td role="cell" data-title="Contact">${contact}</td>
          <td role="cell" data-title="status">${status}</td>
          <td role="cell" data-title="Action"> <a href="#" id="#"> View</a></a></td>
        </tr>
    `;
        output += markup;
    });

    element.innerHTML = output;
}


function renderDoctorAppointment(data) {

    const element = getElement("#appointments .table tbody");
    let output = "";


    data.forEach(item => {

        const { userData, status, createdOn, id } = item;
        const { firstname, lastname, email, contact } = userData;

        let markup = `
    <tr role="row">
          <td role="cell" data-title="Date"> ${formatDate(createdOn)}</td>
          <td role="cell" data-title="First name">${firstname}</td>
          <td role="cell" data-title="Last Name">${lastname}</td>
          <td role="cell" data-title="Email">${email}</td>
          <td role="cell" data-title="Contact">${contact}</td>
          <td role="cell" data-title="status">${status}</td>
          <td role="cell" data-title="Action"> <a href="view_appointment.html?id=${id}" id="#"> View</a></a></td>
        </tr>
    `;

        output += markup;

    });

    element.innerHTML = output;
}


function renderAdminHeader() {

    const header = getElement("#appointments table  thead tr");

    let headerMarkup = `
        <th role="columnheader">Date</th>
            <th role="columnheader"> Patient</th>
            <th role="columnheader">Doctor</th>
            <th role="columnheader">Patient Email</th>
            <th role="columnheader">Doctor Email</th>
            <th role="columnheader">Status</th>
            <th role="columnheader">Action</th>
 `;

    header.innerHTML = headerMarkup;
}


function renderAdminBody(data) {

    // get body of table
    let body = getElement("#appointments table tbody");

    let output = "";
    // iterate through data
    data.forEach(item => {

        const { userData, doctorData, createdOn, id } = item;

        console.log(item)

        let markup = `
                 <tr role="row">
          <td role="cell" data-title="Date">${formatDate(createdOn)}</td>
          <td role="cell" data-title="First name"> ${userData.firstname} ${userData.lastname}</td>
          <td role="cell" data-title="Last Name">${doctorData.firstname} ${doctorData.lastname}</td>
          <td role="cell" data-title="Email">${userData.email}</td>
          <td role="cell" data-title="Contact">${doctorData.email} </td>
          <td role="cell" data-title="Action"> <a href="#" id="#"> ${item.status}</a></a></td>
          <td role="cell" data-title="Action"> <a href="view_appointment.html?id=${id}" id="#"> View</a></a></td>
        </tr>
          `;

        body.insertAdjacentHTML("beforeend", markup)
    });



};


function renderAdminAppointment(data) {

    // render different header
    // get header
    renderAdminHeader();

    // render body of appointment

    renderAdminBody(data);

}

export function renderAppointments(role, data) {

    if (role === "patient") {

        // render patient appointment
        renderPatientAppointment(data);

    } else if (role === "doctor") {

        // render doctor appointment
        renderDoctorAppointment(data);

    } else if (role === "admin") {

        renderAdminAppointment(data)
    }


}