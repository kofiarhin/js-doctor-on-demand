import User from "../model/user";
import { getElement } from "../lib/helper";
export default function () {

    const user = new User();
    const btn = getElement("#register-btn");

    console.log(btn)

    if (user.checkLogin()) {

        const { userData } = user;

        const { role } = userData;

        if (role === "admin") {

            const dataToSubmit = {
                firstname: "Tina",
                lastname: "Thompson",
                password: "password",
                email: "tina@gmail.com",
                contact: "23232232232",
                gender: "female",
                specialty: "general practice",
                role: "doctor"
            };

            btn.addEventListener("click", async function () {

                await user.createDoctor(dataToSubmit);
                window.location.href = "dashboard.html"
            })

        } else {

            window.location.href = "login.html"
        }
    }





}