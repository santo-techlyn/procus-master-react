export default function Header2() {
    return (
        <>
            {/* header area starts  */}
            <header className="header-area">
                {/* menu area  */}
                <div className="menu-area menu-area-2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-2">
                                <div className="logo-area">
                                    <a href="index.html"> <img src="assets/images/logo.png" alt="logo" /></a>
                                </div>
                            </div>
                            <div className="col-lg-8 d-none d-lg-block">
                                <nav id="mobile-menu">
                                    <ul className="main-menu">
                                        <li className="has-submenu"><a href="#">home</a>
                                            <ul className="submenu">
                                                <li><a href="index.html">home 01</a></li>
                                                <li><a href="home-2.html">home 02</a></li>
                                                <li><a href="home-3.html">home 03</a></li>
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
                                                <li><a href="/case_single">case details</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu"><a href="#">blog</a>
                                            <ul className="submenu">
                                                <li><a href="/blog">blog 2 column</a></li>
                                                <li><a href="blog-2.html">blog 3 column</a></li>
                                                <li><a href="/blog_single">blog details</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu"><a href="#">pages</a>
                                            <ul className="submenu">
                                                <li><a href="/about">about</a></li>
                                                <li><a href="work-process.html">work process</a></li>
                                                <li><a href="/team">team</a></li>
                                                <li><a href="/team_single">team details</a></li>
                                                <li><a href="faq.html">FAQ</a></li>
                                                <li><a href="error.html">404</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/contact">contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-lg-2">
                                <div className="nav-right-content">
                                    <span className="nav-bar active"><i className="fa-solid fa-bars"></i></span>
                                    <span className="nav-bar cross-bar"><i className="fa-solid fa-xmark"></i></span>
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