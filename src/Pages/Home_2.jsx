import CountUp from 'react-countup';
import Footer2 from "../Component/Include/Footer2";
import Header2 from "../Component/Include/Header2";
import { useState } from 'react';
import Isotope from '../Component/Common/Isotope';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel, Keyboard, Direction } from 'swiper/modules';
import ThemColorChange from '../Component/Preloader/ThemColorChange';
import Header from '../Component/Include/Header';

const services = [
    { title: "BRANDING", image: "assets/images/service-image-home-2.png" },
    { title: "UI/UX DESIGN", image: "assets/images/service-image2-home-2.png" },
    { title: "GRAPHIC DESIGN", image: "assets/images/service-image3-home-2.png" },
    { title: "MARKETING", image: "assets/images/service-image4-home-2.png" },
    { title: "DEVELOPMENT", image: "assets/images/service-image5-home-2.png" },
    { title: "CONTENT", image: "assets/images/service-image6-home-2.png" },
];

export default function Home_2() {

    const [isactive, setisactive] = useState(null)

    const handleMouseEnter = (index) => {
        setisactive(index);
    };

    const handleMouseLeave = () => {
        setisactive(null);
    };

    return (
        <>
            <ThemColorChange></ThemColorChange>
            {/* <Header2></Header2> */}
            <Header></Header>

            {/* hero area starts  */}
            <section className="hero-area hero-home-2">
                <img src="assets/images/hero-3d-home-2.png" alt="hero-3d" className="hero-3d-home-2" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="hero-content-box-2">
                                <div className="title-tag wow fadeInDown" data-wow-delay=".2s">
                                    <h4>Procus Digital Agency</h4>
                                </div>
                                <h1 className="wow fadeInDown" data-wow-delay=".2s">We are Shaping Concepts into <span>Digital</span> Innovations</h1>
                                <p className=" wow fadeInUp" data-wow-delay=".2s">We are a passionate collective of creatives, designers, and strategists dedicated to shaping remarkable brand experiences.</p>
                                <div className="hero-btn-group-2 wow fadeInUp" data-wow-delay=".2s">
                                    <a href="about.html" className="secondary-btn">learn more</a>
                                    <div className="hero-video-wrapper">
                                        <a className="hero-play-btn popup-youtube" href="https://www.youtube.com/watch?v=ZG6tNrxXh1k"><span className="video-btn item-pulse"><i className="fas fa-play"></i></span> play video</a>
                                    </div>
                                </div>
                                <div className="wow fadeIn" data-wow-delay=".8s">
                                    <ul className="hero-social-2">
                                        <li><a href="#">facebook</a></li>
                                        <li><a href="#">twitter</a></li>
                                        <li><a href="#">linkedin</a></li>
                                        <li><a href="#">instagram</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* marquee area starts  */}
            <div className="custom-marquee marquee-style-2">
                <div className="marquee-container">
                    <div className="marquee">
                        <div className="marquee-content marquee-row-1">
                            <span>Branding</span><span>website design</span><span>app design</span><span>development</span><span>UI/UX design</span><span>Graphic design</span><span>motion graphic</span><span>digital marketing</span><span>seo</span>
                            <span>Branding</span><span>website design</span><span>app design</span><span>development</span><span>UI/UX design</span><span>Graphic design</span><span>motion graphic</span><span>digital marketing</span><span>seo</span>
                            <span>Branding</span><span>website design</span><span>app design</span><span>development</span><span>UI/UX design</span><span>Graphic design</span><span>motion graphic</span><span>digital marketing</span><span>seo</span>
                        </div>
                        <div className="marquee-content marquee-row-2">
                            <span>Branding</span><span>website design</span><span>app design</span><span>development</span><span>UI/UX design</span><span>Graphic design</span><span>motion graphic</span><span>digital marketing</span><span>seo</span>
                            <span>Branding</span><span>website design</span><span>app design</span><span>development</span><span>UI/UX design</span><span>Graphic design</span><span>motion graphic</span><span>digital marketing</span><span>seo</span>
                            <span>Branding</span><span>website design</span><span>app design</span><span>development</span><span>UI/UX design</span><span>Graphic design</span><span>motion graphic</span><span>digital marketing</span><span>seo</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* about area starts  */}
            <section className="about-home-2 pt-110">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 offset-lg-1 wow fadeInLeft" data-wow-delay=".2s">
                            <img src="assets/images/about.png" alt="about-image" />
                        </div>
                        <div className="col-lg-5 offset-lg-1 wow fadeInRight" data-wow-delay=".2s">
                            <div className="about-content">
                                <div className="section-top-2">
                                    <span className="title-tag">Who We Are</span>
                                    <h2>We are <span>Creative Digital Agency</span></h2>
                                </div>
                                <p className="mt-20">We are a passionate collective of creatives, designers, and strategists dedicated to shaping remarkable brand experiences.</p>
                                <ul className="about-list">
                                    <li>Unleashing digital creativity.</li>
                                    <li>Crafting your brand's digital story.</li>
                                    <li>Innovation meets creativity.</li>
                                </ul>
                                <a href="about.html" className="primary-btn mt-40">Read more <span><i className="fas fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* counter area starts  */}
            <section className="counter-home-2 pt-70 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="row">
                                <div className="col-lg-3 col-6">
                                    <div className="counter-single-2">
                                        <div className="counter-number">
                                            <CountUp start={0} end={25} delay={1}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <h4><span ref={countUpRef} className="counter">25</span></h4>
                                                    </div>
                                                )}
                                            </CountUp>
                                        </div>
                                        <h6 className="counter-text">Years of Experience</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="counter-single-2">
                                        <div className="counter-number">
                                            <CountUp start={0} end={250} delay={1}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <h4><span ref={countUpRef} className="counter">250</span><span className="plus-sign">+</span></h4>
                                                    </div>
                                                )}
                                            </CountUp>
                                        </div>
                                        <h6 className="counter-text">project complete</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="counter-single-2">
                                        <div className="counter-number">
                                            <CountUp start={0} end={100} delay={1}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <h4><span ref={countUpRef} className="counter">100</span></h4>
                                                    </div>
                                                )}
                                            </CountUp>
                                        </div>
                                        <h6 className="counter-text">happy client</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="counter-single-2">
                                        <div className="counter-number">
                                            <CountUp start={0} end={35} delay={1}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <h4><span ref={countUpRef} className="counter">35</span></h4>
                                                    </div>
                                                )}
                                            </CountUp>
                                        </div>
                                        <h6 className="counter-text">Wining Awards</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* service area starts  */}
            <section className="service-home-2 py-120">
                <span className="big-title">services</span>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="section-top-2">
                                <span className="title-tag">What we offer</span>
                                <h2>We provide <span>top-Notch Services for you</span></h2>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <div className="section-top-btn">
                                <a href="services.html" className="primary-btn">View all <span><i className="fas fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid px-0">
                    <div className="service-items mt-60">
                        {
                            services.map((service, index) => (
                                <div
                                    key={index}
                                    className={isactive === index ? "active single-service-2 wow fadeInUp" : "single-service-2 wow fadeInUp"}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                    data-wow-delay=".3s"
                                >
                                    <div className="row align-items-center">
                                        <div className="col-lg-4">
                                            <div className="service-title">
                                                <h2><a href="services.html">{service.title}</a></h2>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="service-image">
                                                <img src={service.image} alt="service-image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="service-content">
                                                <p>Compelling and captivating content crafted to resonate with your audience and elevate your brand presence.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* choose area starts  */}
            <section className="choose-home-2 py-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 offset-lg-1 wow fadeInLeft" data-wow-delay=".2s">
                            <img src="assets/images/choose.png" alt="choose-image" />
                        </div>
                        <div className="col-lg-5 offset-lg-1 wow fadeInRight" data-wow-delay=".2s">
                            <div className="choose-content">
                                <div className="section-top-2">
                                    <span className="title-tag">Why Choose Us</span>
                                    <h2>Award Wining <span>Digital Agency</span></h2>
                                </div>
                                <p className="mt-20">Discover why Procus is the right choice for your digital needs. From innovative solutions and collaborative partnerships to a proven track record and dedicated support.</p>
                                <ul className="about-list">
                                    <li>Unleashing digital creativity.</li>
                                    <li>Crafting your brand's digital story.</li>
                                    <li>Innovation meets creativity.</li>
                                </ul>
                                <a href="about.html" className="primary-btn mt-40">see more <span><i className="fas fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* brand area starts  */}
            <section className="brand-home-2 pt-120">
                <span className="big-title">ourclients</span>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-top-2 wow fadeInUp" data-wow-delay=".2s">
                                <span className="title-tag">Brand Collaboration</span>
                                <h2>We worked with <span>100+ Companies</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-60">
                        <div className="brand-items">
                            <div className="brand-single-2 wow fadeIn" data-wow-delay=".2s">
                                <div className="brand-logo">
                                    <img src="assets/images/spotify-dark.png" alt="brand-logo" />
                                </div>
                            </div>
                            <div className="brand-single-2 wow fadeIn" data-wow-delay=".3s">
                                <div className="brand-logo">
                                    <img src="assets/images/zoom-dark.png" alt="brand-logo" />
                                </div>
                            </div>
                            <div className="brand-single-2 wow fadeIn" data-wow-delay=".4s">
                                <div className="brand-logo">
                                    <img src="assets/images/spotify-dark.png" alt="brand-logo" />
                                </div>
                            </div>
                            <div className="brand-single-2 wow fadeIn" data-wow-delay=".5s">
                                <div className="brand-logo">
                                    <img src="assets/images/square-dark.png" alt="brand-logo" />
                                </div>
                            </div>
                            <div className="brand-single-2 wow fadeIn" data-wow-delay=".6s">
                                <div className="brand-logo">
                                    <img src="assets/images/upwork-dark.png" alt="brand-logo" />
                                </div>
                            </div>
                            <div className="brand-single-2 wow fadeIn" data-wow-delay=".7s">
                                <div className="brand-logo">
                                    <img src="assets/images/loom-dark.png" alt="brand-logo" />
                                </div>
                            </div>
                            <div className="brand-single-2 wow fadeIn" data-wow-delay=".8s">
                                <div className="brand-logo">
                                    <img src="assets/images/tinder-dark.png" alt="brand-logo" />
                                </div>
                            </div>
                            <div className="brand-single-2 wow fadeIn" data-wow-delay=".9s">
                                <div className="brand-logo">
                                    <img src="assets/images/spotify-dark.png" alt="brand-logo" />
                                </div>
                            </div>
                            <div className="brand-single-2 wow fadeIn" data-wow-delay="1s">
                                <div className="brand-logo">
                                    <img src="assets/images/loom-dark.png" alt="brand-logo" />
                                </div>
                            </div>
                            <div className="brand-single-2 wow fadeIn" data-wow-delay="1.1s">
                                <div className="brand-logo">
                                    <img src="assets/images/zoom-dark.png" alt="brand-logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* case study area starts  */}
            <Isotope></Isotope>

            {/* team area starts  */}
            <section className="team-home-2 pt-120 pb-90">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="section-top-2 wow fadeInLeft" data-wow-delay=".2s">
                                <span className="title-tag">team</span>
                                <h2>Meet with Our <span>Expert Team</span></h2>
                            </div>
                        </div>
                        <div className="col-lg-8 wow fadeInRight" data-wow-delay=".2s">
                            <div className="section-top-btn">
                                <a href="team.html" className="primary-btn">see all <span><i className="fas fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-60">
                        <div className="col-lg-4 col-sm-6 wow fadeIn" data-wow-delay=".3s">
                            <div className="team-member-2">
                                <div className="team-image">
                                    <a href="team-single.html"><img src="assets/images/team-1-home-2.png" alt="team-member" /></a>
                                </div>
                                <div className="team-content">
                                    <div className="team-bio">
                                        <h4><a href="team-single.html">Kathryn Murphy</a></h4>
                                        <span>founder & CEO</span>
                                    </div>
                                    <ul className="team-social">
                                        <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa-solid fa-globe"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 wow fadeIn" data-wow-delay=".4s">
                            <div className="team-member-2">
                                <div className="team-image">
                                    <a href="team-single.html"><img src="assets/images/team-2-home-2.png" alt="team-member" /></a>
                                </div>
                                <div className="team-content">
                                    <div className="team-bio">
                                        <h4><a href="team-single.html">Savannah Nguyen</a></h4>
                                        <span>UI UX Designer</span>
                                    </div>
                                    <ul className="team-social">
                                        <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa-solid fa-globe"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 wow fadeIn" data-wow-delay=".5s">
                            <div className="team-member-2">
                                <div className="team-image">
                                    <a href="team-single.html"><img src="assets/images/team-3-home-2.png" alt="team-member" /></a>
                                </div>
                                <div className="team-content">
                                    <div className="team-bio">
                                        <h4><a href="team-single.html">Devon Lane</a></h4>
                                        <span>Web Developer</span>
                                    </div>
                                    <ul className="team-social">
                                        <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa-solid fa-globe"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* testimonial area starts  */}
            <section className="testimonial-home-2 py-120">
                <span className="big-title">testimonial</span>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay=".2s">
                            <div className="section-top-2">
                                <span className="title-tag">testimonial</span>
                                <h2>What <span>Client Say</span> About Us!</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-60">
                        <Swiper
                            className='testimonial-slider-2'
                            navigation={true}
                            mousewheel={true}
                            slidesPerView={2}
                            keyboard={true}
                            loop={true}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        >
                            <SwiperSlide>
                                <div className="testimonial-slide-2">
                                    <div className="testimonial-quote">
                                        <span className="testimonial-quote-icon"><i className="fa-solid fa-quote-left"></i></span>
                                        <span className="quote-text">Efficient and professional. I will definitely use their services again. The professionalism of this team made the entire process effortless and stress-free.</span>
                                    </div>
                                    <div className="testimonial-content">
                                        <div className="content-left">
                                            <div className="author-img">
                                                <img src="assets/images/testimonial-01.png" alt="author-image" />
                                            </div>
                                            <div className="author-text">
                                                <h5>Courtney Henry</h5>
                                                <p>digital marketer</p>
                                            </div>
                                        </div>
                                        <div className="content-right">
                                            <div className="author-text">
                                                <h5>Teriso Station</h5>
                                                <p>creative agency</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-slide-2">
                                    <div className="testimonial-quote">
                                        <span className="testimonial-quote-icon"><i className="fa-solid fa-quote-left"></i></span>
                                        <span className="quote-text">Efficient and professional. I will definitely use their services again. The professionalism of this team made the entire process effortless and stress-free.</span>
                                    </div>
                                    <div className="testimonial-content">
                                        <div className="content-left">
                                            <div className="author-img">
                                                <img src="assets/images/testimonial-01.png" alt="author-image" />
                                            </div>
                                            <div className="author-text">
                                                <h5>Courtney Henry</h5>
                                                <p>digital marketer</p>
                                            </div>
                                        </div>
                                        <div className="content-right">
                                            <div className="author-text">
                                                <h5>Teriso Station</h5>
                                                <p>creative agency</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-slide-2">
                                    <div className="testimonial-quote">
                                        <span className="testimonial-quote-icon"><i className="fa-solid fa-quote-left"></i></span>
                                        <span className="quote-text">Efficient and professional. I will definitely use their services again. The professionalism of this team made the entire process effortless and stress-free.</span>
                                    </div>
                                    <div className="testimonial-content">
                                        <div className="content-left">
                                            <div className="author-img">
                                                <img src="assets/images/testimonial-01.png" alt="author-image" />
                                            </div>
                                            <div className="author-text">
                                                <h5>Courtney Henry</h5>
                                                <p>digital marketer</p>
                                            </div>
                                        </div>
                                        <div className="content-right">
                                            <div className="author-text">
                                                <h5>Teriso Station</h5>
                                                <p>creative agency</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

            {/* blog area starts  */}
            <section className="blog-home-2 pt-120 pb-90">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="section-top-2">
                                <span className="title-tag">Blogs & News</span>
                                <h2>Our Latest <span>Blogs</span> & Weekly <span>News</span></h2>
                            </div>
                        </div>
                        <div className="col-lg-8 wow fadeInRight" data-wow-delay=".2s">
                            <div className="section-top-btn">
                                <a href="blog.html" className="primary-btn">see all <span><i className="fas fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-60">

                        <Swiper
                            className='blog-slider-2'
                            navigation={true}
                            mousewheel={true}
                            slidesPerView={3}
                            keyboard={true}
                            loop={true}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        >
                            <SwiperSlide>
                                <div className="blog-single-slide-2">
                                    <div className="blog-image">
                                        <a href="blog-single.html" className="blog-thumb"><img src="assets/images/blog-1-home-2.png" alt="blog-thumb" /></a>
                                    </div>
                                    <h4>
                                        <a href="blog-single.html">Marketing Agency Website Design</a>
                                    </h4>
                                    <p className="mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    <a className="blog-btn mt-20" href="blog-single.html">Read More <span><i className="fas fa-arrow-right"></i></span></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="blog-single-slide-2">
                                    <div className="blog-image">
                                        <a href="blog-single.html" className="blog-thumb"><img src="assets/images/blog-2-home-2.png" alt="blog-thumb" /></a>
                                    </div>
                                    <h4>
                                        <a href="blog-single.html">Marketing Agency Website Design</a>
                                    </h4>
                                    <p className="mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    <a className="blog-btn mt-20" href="blog-single.html">Read More <span><i className="fas fa-arrow-right"></i></span></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="blog-single-slide-2">
                                    <div className="blog-image">
                                        <a href="blog-single.html" className="blog-thumb"><img src="assets/images/blog-3-home-2.png" alt="blog-thumb" /></a>
                                    </div>
                                    <h4>
                                        <a href="blog-single.html">Marketing Agency Website Design</a>
                                    </h4>
                                    <p className="mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    <a className="blog-btn mt-20" href="blog-single.html">Read More <span><i className="fas fa-arrow-right"></i></span></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="blog-single-slide-2">
                                    <div className="blog-image">
                                        <a href="blog-single.html" className="blog-thumb"><img src="assets/images/blog-2-home-2.png" alt="blog-thumb" /></a>
                                    </div>
                                    <h4>
                                        <a href="blog-single.html">Marketing Agency Website Design</a>
                                    </h4>
                                    <p className="mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    <a className="blog-btn mt-20" href="blog-single.html">Read More <span><i className="fas fa-arrow-right"></i></span></a>
                                </div>
                            </SwiperSlide>
                        </Swiper>






                    </div>
                </div>
            </section>

            {/* marquee area starts  */}
            <div className="custom-marquee marquee-style-2 pb-40">
                <div className="marquee-container">
                    <div className="marquee">
                        <div className="marquee-content marquee-row-1">
                            <span>Branding</span><span>website design</span><span>app design</span><span>development</span><span>UI/UX design</span><span>Graphic design</span><span>motion graphic</span><span>digital marketing</span><span>seo</span>
                            <span>Branding</span><span>website design</span><span>app design</span><span>development</span><span>UI/UX design</span><span>Graphic design</span><span>motion graphic</span><span>digital marketing</span><span>seo</span>
                            <span>Branding</span><span>website design</span><span>app design</span><span>development</span><span>UI/UX design</span><span>Graphic design</span><span>motion graphic</span><span>digital marketing</span><span>seo</span>
                        </div>
                        <div className="marquee-content marquee-row-2">
                            <span>Branding</span><span>website design</span><span>app design</span><span>development</span><span>UI/UX design</span><span>Graphic design</span><span>motion graphic</span><span>digital marketing</span><span>seo</span>
                            <span>Branding</span><span>website design</span><span>app design</span><span>development</span><span>UI/UX design</span><span>Graphic design</span><span>motion graphic</span><span>digital marketing</span><span>seo</span>
                            <span>Branding</span><span>website design</span><span>app design</span><span>development</span><span>UI/UX design</span><span>Graphic design</span><span>motion graphic</span><span>digital marketing</span><span>seo</span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer2></Footer2>
        </>
    )
}