import { test, renderLoader, getElement, renderPageTitle } from "../lib/helper";
import * as IndexView from "../view/indexView";

function init() {

    IndexView.renderBanner();
    IndexView.renderHowItWorks();
    IndexView.renderDoctors();
    // IndexView.renderTestimonial();
}


// change testimonial

function testimonialController() {

    const wrapper = getElement(".thumb-wrapper");

    wrapper.addEventListener("click", function (e) {

        if (e.target.className === "thumb-unit" || e.target.className === "thumb-unit active") {

            const index = e.target.dataset.index;


            const texts = document.querySelectorAll(".text-unit");
            const thumbUnits = document.querySelectorAll(".thumb-unit");

            texts.forEach(text => {

                text.classList.remove("active");

            });

            thumbUnits.forEach(item => {

                item.classList.remove("active");

            });

            texts[index].classList.add('active');
            e.target.classList.add("active");


        }

    });


    // container.addEventListener("click", function () {

    //     test("passsss")
    // });


}


// index controller
export default function () {

    // renderLoader();

    renderPageTitle("Home")

    testimonialController();
    init();
}


// hangout with cripples you learn how to limp