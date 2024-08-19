export default function Footer3() {
    return (
        <>
            {/* footer area starts  */}
            <footer className="footer-home-3">
                {/* footer widget  */}
                <div className="footer-widget">
                    <div className="container">
                        <div className="row footer-widget-wrapper pt-105 pb-70">
                            <div className="col-xl-5 col-lg-5">
                                <div className="footer-widget-box-3 about-us">
                                    <h1>Let`s work together</h1>
                                    <ul className="footer-social-3">
                                        <li><a href="#"><i className="fa-brands fa-facebook"></i> facebook</a></li>
                                        <li><a href="#"><i className="fa-brands fa-x-twitter"></i> twitter</a></li>
                                        <li><a href="#"><i className="fa-brands fa-linkedin"></i> linkedin</a></li>
                                        <li><a href="#"><i className="fa-brands fa-instagram"></i> instagram</a></li>
                                        <li><a href="#"><i className="fa-brands fa-youtube"></i> youtube</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 offset-xl-1 col-lg-2">
                                <div className="footer-widget-box list">
                                    <h4 className="footer-widget-title">Quick Links</h4>
                                    <ul className="footer-list">
                                        <li><a href="/about">About us</a></li>
                                        <li><a href="/team">meet our team</a></li>
                                        <li><a href="/case">case studies</a></li>
                                        <li><a href="/blog">latest blog</a></li>
                                        <li><a href="/contact">contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2">
                                <div className="footer-widget-box list">
                                    <h4 className="footer-widget-title">our services</h4>
                                    <ul className="footer-list">
                                        <li><a href="/service-single">branding</a></li>
                                        <li><a href="/service-single">web design</a></li>
                                        <li><a href="/service-single">app design</a></li>
                                        <li><a href="/service-single">saas development</a></li>
                                        <li><a href="/service-single">digital marketing</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3">
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

                {/* footer info  */}
                <div className="footer-info-area">
                    <div className="container">
                        <div className="info-content">
                            <div className="row align-items-center">
                                <div className="col-xl-3">
                                    <a className="dark-version" href="index.html"><img src="assets/images/logo.png" alt="footer-logo" /></a>
                                    <a className="light-version" href="index.html"><img src="assets/images/logo-black.png" alt="footer-logo" /></a>
                                </div>
                                <div className="col-xl-3">
                                    <a href="#" className="phone-number">(123) 456789000</a>
                                </div>
                                <div className="col-xl-3">
                                    <a href="#" className="email-address">info@procus.com </a>
                                </div>
                                <div className="col-xl-3">
                                    <a href="#" className="location">1498w Fluton ste, STE 2D Chicgo, IL 63867.</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* copyright  */}
                <div className="copyright copyright-3">
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
                                        <li><a href="/terms">Terms Of Services</a></li>
                                        <li><a href="/privacy">Privacy Policy</a></li>
                                        <li><a href="/contact">Support</a></li>
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