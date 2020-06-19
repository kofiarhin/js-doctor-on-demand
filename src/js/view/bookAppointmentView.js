import { getElement } from "../lib/helper"

export function renderTitle({ firstname, lastname }) {


    const title = getElement(".main-title");

    title.textContent = `Book Appoiintment with Dr ${firstname} ${lastname}`;
}