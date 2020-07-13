import { test, renderLoader } from "../lib/helper";
import * as IndexView from "../view/indexView";

function init() {

    IndexView.renderBanner();
    IndexView.renderHowItWorks();
    IndexView.renderDoctors();
    IndexView.renderTestimonial();
}

export default function () {

    renderLoader();
    init();
}