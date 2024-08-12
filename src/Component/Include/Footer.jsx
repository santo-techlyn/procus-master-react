export default function Footer() {
    return (

        <>
            {/* footer area starts */}
            <footer className="footer-area">
                {/* footer widget  */}
                <div className="footer-widget">
                    <div className="container">
                        <div className="row footer-widget-wrapper pt-100 pb-70">
                            <div className="col-md-6 col-lg-3">
                                <div className="footer-widget-box about-us">
                                    <a href="index.html" className="footer-logo">
                                        <img src="assets/images/logo.png" alt="logo" />
                                    </a>
                                    <a href="index.html" className="footer-logo logo-black">
                                        <img src="assets/images/logo-black.png" alt="logo" />
                                    </a>
                                    <p>We're a dynamic creative agency dedicated to crafting compelling narratives and innovative solutions that resonate with precision.</p>
                                    <ul className="footer-social">
                                        <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-2 offset-lg-2">
                                <div className="footer-widget-box list">
                                    <h4 className="footer-widget-title">Quick Links</h4>
                                    <ul className="footer-list">
                                        <li><a href="about.html">About us</a></li>
                                        <li><a href="team.html">meet our team</a></li>
                                        <li><a href="case.html">case studies</a></li>
                                        <li><a href="blog.html">latest blog</a></li>
                                        <li><a href="#">careers</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-2">
                                <div className="footer-widget-box list">
                                    <h4 className="footer-widget-title">our services</h4>
                                    <ul className="footer-list">
                                        <li><a href="service-single.html">branding</a></li>
                                        <li><a href="service-single.html">web design</a></li>
                                        <li><a href="service-single.html">app design</a></li>
                                        <li><a href="service-single.html">saas development</a></li>
                                        <li><a href="service-single.html">digital marketing</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-2 offset-lg-1">
                                <div className="footer-widget-box">
                                    <h4 className="footer-widget-title">Contact Us</h4>
                                    <ul className="footer-contact">
                                        <li><a href="#"><span className="contact-icon"><i className="fa-solid fa-phone"></i></span> (123) 456789000</a></li>
                                        <li><a href="#"><span className="contact-icon"><i className="fa-regular fa-envelope"></i></span><span> info@procus.com</span></a></li>
                                        <li><a href="#"><span className="contact-icon"><i className="fa-solid fa-location-dot"></i></span> 1498w Fluton ste, STE 2D Chicgo, IL 63867.</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* copyright  */}
                <div className="copyright">
                    <div className="container">
                        <div className="copyright-content">
                            <div className="row">
                                <div className="col-lg-6 align-self-center">
                                    <p className="copyright-text">
                                        Copyright &copy; <span id="date"></span> <a href="index.html"> Procus</a> Designed by Pointer Flow.
                                    </p>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                    <ul className="footer-menu">
                                        <li><a href="terms.html">Terms Of Services</a></li>
                                        <li><a href="privacy.html">Privacy Policy</a></li>
                                        <li><a href="contact.html">Support</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* back to top  */}
            <div className="back-to-top">
                <span><i className="fa fa-angle-up"></i></span>
            </div>
        </>



    )
}