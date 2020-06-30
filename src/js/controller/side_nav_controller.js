import { getElement, test } from "../lib/helper";

export default function () {

    const close = getElement(".close");
    const sidenav = getElement(".sidenav");

    close.addEventListener("click", () => {

        sidenav.classList.remove("active");

    });

}