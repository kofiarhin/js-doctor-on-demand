function renderPatient(data) {

    console.log("render patient", data)
}


function renderDoctor(data) {


    console.log("render doctor", data)
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