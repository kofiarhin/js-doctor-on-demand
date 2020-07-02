import { getElement, test } from "../lib/helper";

export default function () {

    const footer = getElement(".footer");

    if (footer) {

        let markup = `
        <div class="container">
            <div class="footer-wrapper">

                <!-- footer-unit -->
                <ul class="footer-unit">
                    <li class="title">About Us</li>
                    <li>Home</li>
                    <li>Our Mission and Team</li>
                    <li>Our Technology Platform</li>
                    <li>Our Passion</li>
                    <li>Our Blog</li>
                </ul>
                <!-- end footer-unit -->


                <!-- footer-unit -->
                <ul class="footer-unit">
                    <li class="title">About Us</li>
                    <li>Home</li>
                    <li>Our Mission and Team</li>
                    <li>Our Technology Platform</li>
                    <li>Our Passion</li>
                    <li>Our Blog</li>
                </ul>
                <!-- end footer-unit -->


                <!-- footer-unit -->
                <ul class="footer-unit">
                    <li class="title">About Us</li>
                    <li>Home</li>
                    <li>Our Mission and Team</li>
                    <li>Our Technology Platform</li>
                    <li>Our Passion</li>
                    <li>Our Blog</li>
                </ul>
                <!-- end footer-unit -->


                <!-- footer-unit -->
                <ul class="footer-unit">
                    <li class="title">About Us</li>
                    <li>Home</li>
                    <li>Our Mission and Team</li>
                    <li>Our Technology Platform</li>
                    <li>Our Passion</li>
                    <li>Our Blog</li>
                </ul>
                <!-- end footer-unit -->


            </div>
        </div>
    `;


        footer.innerHTML = markup;

    }



}