import Preloader from "../Preloader/Preloader";

export default function Header3() {
    return (
        <>
            <Preloader></Preloader>
            {/* header area starts */}
            <header className="header-area">
                {/* menu area  */}
                <div className="menu-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-2">
                                <div className="logo-area">
                                    <a className="dark-version" href="/"> <img src="assets/images/logo.png" alt="logo" /></a>
                                    <a className="light-version" href="/"> <img src="assets/images/logo-black.png" alt="logo" /></a>
                                </div>
                            </div>
                            <div className="col-lg-8 d-none d-lg-block">
                                <nav id="mobile-menu">
                                    <ul className="main-menu">
                                        <li className="has-submenu"><a href="/">home</a>
                                            <ul className="submenu">
                                                <li><a href="/">home 01</a></li>
                                                <li><a href='/home_2'>home 02</a></li>
                                                <li><a href="/home_3">home 03</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu"><a href="#">services</a>
                                            <ul className="submenu">
                                                <li><a href="/services">services</a></li>
                                                <li><a href="/service-single">service details</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu"><a href="#">case</a>
                                            <ul className="submenu">
                                                <li><a href="/case">case</a></li>
                                                <li><a href="/case-single">case details</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu"><a href="#">blog</a>
                                            <ul className="submenu">
                                                <li><a href="/blog">blog 2 column</a></li>
                                                <li><a href="/blog-2">blog 3 column</a></li>
                                                <li><a href="/blog-single">blog details</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu"><a href="#">pages</a>
                                            <ul className="submenu">
                                                <li><a href="/about">about</a></li>
                                                <li><a href="/work-process">work process</a></li>
                                                <li><a href="/team">team</a></li>
                                                <li><a href="/team-single">team details</a></li>
                                                <li><a href="/faq">FAQ</a></li>
                                                <li><a href="/error">404</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/contact">contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-lg-2">
                                <div className="nav-right-content">
                                    <a href="/contact" className="primary-btn">Let’s Talk <span><i className="fas fa-arrow-right"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mobile-menu"></div>
                </div>
            </header>
        </>
    )
}