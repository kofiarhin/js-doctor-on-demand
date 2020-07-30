import { getElement, test } from "../lib/helper";

// render footer
export function render() {


    const footer = getElement(".footer");

    if (footer) {

        let markup = `
        <div class="container">
            <div class="footer-wrapper">

                <!-- footer-unit -->
                <ul class="footer-unit">
                    <li class="title">Site Map</li>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="contact.html">Help</a></li>
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
                    <li><a href="www.facebook.com">Facebook </a></li>
                    <li><a href="www.instagram.com">Instagram</a></li>
                    <li><a href="www.linkedin.com">LinkedIn</a></li>
                    <li><a href="www.twitter.com">Twitter</a></li>
                </ul>
                <!-- end footer-unit -->

                <!-- footer-unit -->
                <ul class="footer-unit">
                    <li class="title">FAQ</li>
                    <li><a href="register.html">How to register</a></li>
                    <li><a href="doctors.html">Meet Our Doctors</a></li>
                    <li>Terms and conditions</li>
                    <li>Legal</li>
                </ul>
                <!-- end footer-unit -->


            </div>
        </div>
    `;


        footer.innerHTML = markup;

    }

}