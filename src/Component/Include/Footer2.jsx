export default function Footer2() {
    return (
        <>
            {/* footer area starts  */}
            <footer className="footer-home-2">
                {/* footer widget  */}
                <div className="footer-widget">
                    <div className="container">
                        <div className="row footer-widget-wrapper pt-110 pb-70">
                            <div className="col-lg-6">
                                <div className="footer-widget-box-2">
                                    <h1>Let`s talk</h1>
                                    <h6>Don’t miss out on our updates!</h6>
                                    <h4>Subscribe to our newsletter</h4>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="email" placeholder="Enter your email address" />
                                            <button className="primary-btn" type="submit">Subscribe <span><i className="fas fa-arrow-right"></i></span></button>
                                        </form>
                                    </div>
                                    <ul className="hero-social-2">
                                        <li><a href="#">facebook</a></li>
                                        <li><a href="#">twitter</a></li>
                                        <li><a href="#">linkedin</a></li>
                                        <li><a href="#">instagram</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 offset-xl-2 col-lg-6">
                                <div className="footer-widget-box-2 contact-widget">
                                    <h2>Get in Touch</h2>
                                    <ul>
                                        <li><a href="#">info@procus.com</a></li>
                                        <li><a href="#">+99(0) 1453 123456</a></li>
                                        <li><a href="#">1901 Thornridge Cir. Shiloh, Hawaii 81063</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* copyright  */}
                <div className="copyright-2">
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