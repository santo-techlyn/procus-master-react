export default function Header2() {
    return (
        <>
            <header className="header-area">
                <div className="menu-area">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                                <div className="col-lg-2">
                                    <div className="logo-area navbar-brand">
                                        <a className="dark-version" href="/"> <img src="assets/images/logo.png" alt="logo" /></a>
                                        <a className="light-version" href="/"> <img src="assets/images/logo-black.png" alt="logo" /></a>
                                    </div>
                                </div>

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"><i className="fa-solid fa-bars"></i></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <div className="col-lg-10 offset-xl-1 col-xl-9">
                                        <ul className="main-menu navbar-nav me-auto mb-2 mb-lg-0">

                                            <li className="has-submenu nav-item dropdown"><a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="/">home</a>
                                                <ul className="submenu dropdown-menu">
                                                    <li><a className="dropdown-item" href="/">home 01</a></li>
                                                    <li><a className="dropdown-item" href='/home_2'>home 02</a></li>
                                                    <li><a className="dropdown-item" href="/home_3">home 03</a></li>
                                                </ul>
                                            </li>

                                            <li className="has-submenu nav-item dropdown"><a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="/services">services</a>
                                                <ul className="submenu dropdown-menu">
                                                    <li><a className="dropdown-item" href="/services">services</a></li>
                                                    <li><a className="dropdown-item" href='/service-single'>service details</a></li>
                                                </ul>
                                            </li>

                                            <li className="has-submenu nav-item dropdown"><a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="/services">case</a>
                                                <ul className="submenu dropdown-menu">
                                                    <li><a className="dropdown-item" href="/case">case</a></li>
                                                    <li><a className="dropdown-item" href='/case_single'>case details</a></li>
                                                </ul>
                                            </li>

                                            <li className="has-submenu nav-item dropdown"><a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="/services">blog</a>
                                                <ul className="submenu dropdown-menu">
                                                    <li><a className="dropdown-item" href="/blog">blog 2 column</a></li>
                                                    <li><a className="dropdown-item" href='/blog_2'>blog 3 column</a></li>
                                                    <li><a className="dropdown-item" href='/blog_single'>blog details</a></li>
                                                </ul>
                                            </li>

                                            <li className="has-submenu nav-item dropdown"><a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="/services">pages</a>
                                                <ul className="submenu dropdown-menu">
                                                    <li><a className="dropdown-item" href="/about">about</a></li>
                                                    <li><a className="dropdown-item" href='/work_process'>work process</a></li>
                                                    <li><a className="dropdown-item" href='/team'>team</a></li>
                                                    <li><a className="dropdown-item" href='/team_single'>team details</a></li>
                                                    <li><a className="dropdown-item" href='/faq'>FAQ</a></li>
                                                    <li><a className="dropdown-item" href='/error'>404</a></li>
                                                </ul>
                                            </li>

                                            <li className=" nav-item dropdown"><a className="nav-link dropdown-toggle" role="button" href="/contact">contact</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-2">
                                        <div className="nav-right-content">
                                            <a href="/contact" className="primary-btn">Let’s Talk <span><i className="ri-arrow-right-up-line"></i></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}