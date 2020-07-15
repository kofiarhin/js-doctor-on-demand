import { getElement, test } from "../lib/helper";

export default function () {

    const footer = getElement(".footer");

    if (footer) {

        let markup = `
        <div class="container">
            <div class="footer-wrapper">

                <!-- footer-unit -->
                <ul class="footer-unit">
                    <li class="title">Site Map</li>
                    <li>Home</li>
                    <li>ABout Us</li>
                    <li>Contact</li>
                    <li>Login</li>
                    <li>Register</li>
                </ul>
                <!-- end footer-unit -->


                <!-- footer-unit -->
                <ul class="footer-unit">
                    <li class="title">Address</li>
                    <li>Email: info@brucecare.com</li>
                    <li>Contact: +233 508025370</li>
                    <li>Ghana
House N0. 5 Cashew Street, Daffodil Avenue, Christian Centre, East Legon, Accra, Ghana</li>
                </ul>
                <!-- end footer-unit -->


                <!-- footer-unit -->
                <ul class="footer-unit">
                    <li class="title">Social Media</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                </ul>
                <!-- end footer-unit -->

                <!-- footer-unit -->
                <ul class="footer-unit">
                    <li class="title">FAQ</li>
                    <li>How to register</li>
                    <li>Meet Our Doctors</li>
                    <li>Blog</li>
                    <li>Legal</li>
                </ul>
                <!-- end footer-unit -->


            </div>
        </div>
    `;


        footer.innerHTML = markup;

    }



}