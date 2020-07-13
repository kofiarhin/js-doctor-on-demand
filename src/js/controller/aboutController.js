import { getElement, test } from "../lib/helper";

// about Controller
export default function () {

    const element = getElement("#about");

    let markup = `
            <div class="container">

            <h1 class="main-title center">About Us</h1>
            <img src="./images/about_bg.jpg" alt="">

            <div class="text-wrapper">

                <!-- text-unit -->
                <div class="text-unit">

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque accusamus officia tempora vitae
                        omnis laboriosam, aperiam delectus molestiae rerum id cupiditate excepturi recusandae
                        perspiciatis repellendus reiciendis non eveniet cumque et doloremque distinctio quod? Numquam
                        enim accusantium ea maiores. Sunt praesentium dicta aliquid ducimus eaque et odit ipsam enim
                        magnam suscipit?</p>

                </div>
                <!-- end text-unit -->

                <!-- text-unit -->
                <div class="text-unit">

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque accusamus officia tempora vitae
                        omnis laboriosam, aperiam delectus molestiae rerum id cupiditate excepturi recusandae
                        perspiciatis repellendus reiciendis non eveniet cumque et doloremque distinctio quod? Numquam
                        enim accusantium ea maiores. Sunt praesentium dicta aliquid ducimus eaque et odit ipsam enim
                        magnam suscipit?</p>

                </div>
                <!-- end text-unit -->



                <!-- text-unit -->
                <div class="text-unit">

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque accusamus officia tempora vitae
                        omnis laboriosam, aperiam delectus molestiae rerum id cupiditate excepturi recusandae
                        perspiciatis repellendus reiciendis non eveniet cumque et doloremque distinctio quod? Numquam
                        enim accusantium ea maiores. Sunt praesentium dicta aliquid ducimus eaque et odit ipsam enim
                        magnam suscipit?</p>

                </div>
                <!-- end text-unit -->


                <!-- text-unit -->
                <div class="text-unit">

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque accusamus officia tempora vitae
                        omnis laboriosam, aperiam delectus molestiae rerum id cupiditate excepturi recusandae
                        perspiciatis repellendus reiciendis non eveniet cumque et doloremque distinctio quod? Numquam
                        enim accusantium ea maiores. Sunt praesentium dicta aliquid ducimus eaque et odit ipsam enim
                        magnam suscipit?</p>

                </div>
                <!-- end text-unit -->

                <!-- text-unit -->
                <div class="text-unit">

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque accusamus officia tempora vitae
                        omnis laboriosam, aperiam delectus molestiae rerum id cupiditate excepturi recusandae
                        perspiciatis repellendus reiciendis non eveniet cumque et doloremque distinctio quod? Numquam
                        enim accusantium ea maiores. Sunt praesentium dicta aliquid ducimus eaque et odit ipsam enim
                        magnam suscipit?</p>

                </div>
                <!-- end text-unit -->

                <!-- text-unit -->
                <div class="text-unit">

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque accusamus officia tempora vitae
                        omnis laboriosam, aperiam delectus molestiae rerum id cupiditate excepturi recusandae
                        perspiciatis repellendus reiciendis non eveniet cumque et doloremque distinctio quod? Numquam
                        enim accusantium ea maiores. Sunt praesentium dicta aliquid ducimus eaque et odit ipsam enim
                        magnam suscipit?</p>

                </div>
                <!-- end text-unit -->


            </div>
        </div>
    `;

    element.innerHTML = markup;
}