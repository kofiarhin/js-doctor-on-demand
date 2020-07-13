import { test, getElement } from "../lib/helper";

// render banner
export function renderBanner() {

    let element = getElement("#banner .content");

    let markup = `
        
                <!-- main title -->
                <h1>Your Personal Doctor Online</h1>

                <p>
                    Partnering you with a doctor who really gets to know you, listens to you, and has time for
                    you.
                    Aligned with your life.
                </p>

                <!-- cta -->
                <div class="cta-wrapper">

                    <a href="doctors.html" class="cta cta-main">Browse Doctors</a>
                </div>
                <!-- end cta-wrapper -->
    `;

    element.innerHTML = markup;

}

export function renderHowItWorks() {

    const element = getElement("#how-it-works");

    let markup = `
         <!-- container -->
        <div class="container">

            <!-- title -->
            <h1 class="main-title center">How it works</h1>

            <!-- icon-wrapper -->
            <div class="icons-wrapper">

                <!-- icon-unit -->
                <div class="icon-unit" data-aos="fade-up">
                    <!-- cover -->
                    <div class="cover">
                        <img src="./images/search.jpg" alt="">
                    </div>
                    <p>Search through our database of qualified doctors</p>
                </div>
                <!-- end icon-unit -->

                <!-- icon-unit -->
                <div class="icon-unit" data-aos="fade-left">
                    <!-- cover -->
                    <div class="cover">
                        <img src="./images/appointment.jpg" alt="">
                    </div>
                    <p>Book an appointment and receive confirmation</p>
                </div>
                <!-- end icon-unit -->

                <!-- icon-unit -->
                <div class="icon-unit" data-aos="fade-down">
                    <!-- cover -->
                    <div class="cover">
                        <img src="./images/confirmation.jpg" alt="">
                    </div>
                    <p>Avoid Waiting Room</p>
                </div>
                <!-- end icon-unit -->

            </div>
            <!-- end icon-wrapper -->

            <div class="cta-wrapper">
                <a href="login.html" class="cta">Try Now</a>
            </div>

        </div>
        <!-- how container -->
     `;

    element.innerHTML = markup;
}

// render doctors
export function renderDoctors() {

    let element = getElement("#doctors");

    let markup = `
                 <!-- container -->
        <div class="container">
            <!-- title -->
            <h1 class="main-title center">Our Doctors</h1>
            <!-- slug -->
            <p class="slug"> Your bruceCare doctor is perfectly aligned with your life, passion and goals </p>

            <div class="wrapper">
                <div class="unit" data-aos="fade-left"></div>
                <div class="unit" data-aos="fade-right"></div>
                <div class="unit" data-aos="fade-left"></div>
                <div class="unit" data-aos="fade-right"></div>
                <div class="unit" data-aos="fade-left"></div>

            </div>

            <div class="cta-wrapper">
                <a href="doctors.html">Our Doctors</a>
            </div>
        </div>
        <!-- end container -->
    `;
    element.innerHTML = markup;
}


export function renderTestimonial() {

    let element = getElement("#testimonial");


    let markup = `
                <div class="container">
            <h1 class="main-title center">Testimonial</h1>

            <!-- wrapper -->
            <div class="wrapper">

                <!-- text-wrapper -->
                <div class="text-wrapper">

                    <div class="text-unit active">
                        <!-- quote-mark -->
                        <div class="quote-mark">
                            <i class="fa fa-quote-left" aria-hidden="true"></i>
                        </div>
                        <!-- end quote-mark -->

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aspernatur illum animi quia
                        consequuntur id omnis rerum cupiditate nisi perspiciatis reprehenderit, porro nobis nam fuga
                        nemo dolorum pariatur. Illo,iusto molestiae
                        cumque?
                    </div>

                    <div class="text-unit">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nostrum cum culpa totam
                        minus optio corrupti maiores placeat odit beatae incidunt temporibus quo nemo veritatis,
                        perferendis voluptates ea eos quae, quasi reiciendis quod harum unde obcaecati. Corrupti
                        mollitia ratione cum tempora laboriosam esse, beatae rerum magnam, repellendus animi molestiae
                        id?
                    </div>

                </div>
                <!-- end text-wrapper -->

                <!-- thumb-wrapper -->
                <div class="thumb-wrapper">
                    <div class="thumb-unit active"></div>
                    <div class="thumb-unit"></div>
                    <div class="thumb-unit"></div>
                </div>
                <!-- end thumb-wrapper -->

            </div>
            <!-- end  wrapper -->
        </div>
        <!-- end container -->
         `;

    element.innerHTML = markup;
}