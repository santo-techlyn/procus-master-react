import CommonHero from "../Component/Common/CommonHero";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, Autoplay, Mousewheel, Keyboard, Direction, EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import FidbackSection from "../Component/Common/FidbackSection";

export default function Services_Single() {
    return (
        <>
            <CommonHero title={'service details'} link1={'Home'} link2={'Services Details'}></CommonHero>

            {/* service details content starts  */}
            <section className="service-details-content py-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="service-details-image wow fadeInUp" data-wow-delay=".2s">
                                <img src="assets/images/service-details.png" className="mb-50" alt="service-details" />
                            </div>
                            <div className="wow fadeInUp" data-wow-delay=".2s">
                                <h2>UI/UX Design</h2>
                                <p className="mt-20">We specialize in creating stunning user interfaces (UI) and seamless user experiences (UX) that captivate users and drive engagement. Our team of talented designers combines creativity with functionality to deliver designs that not only look great but also provide an intuitive and delightful user experience.</p>
                                <p className="mt-20">Our team of talented designers combines creativity with functionality to deliver designs that not only look great but also provide an intuitive and delightful user experience.</p>
                                <h3 className="mt-50">Our Approach</h3>
                                <p className="mt-20">We believe that effective UI/UX design is a combination of art and science. Our approach is centered around understanding your users, your business goals, and your brand identity to create designs that resonate with your target audience and achieve your objectives.</p>
                                <h3 className="mt-50">What We Offer in UI/UX Design</h3>
                                <p className="mt-20">We believe that effective UI/UX design is a combination of art and science. Our approach is centered around understanding your users, your business goals, and your brand identity to create designs that resonate with your target audience and achieve your objectives.</p>
                                <ul className="service-tags">
                                    <li><a href="#">UI Design</a></li>
                                    <li><a href="#">UX Design</a></li>
                                    <li><a href="#">Interaction Design</a></li>
                                    <li><a href="#">User Research</a></li>
                                </ul>
                            </div>
                            <div className="row mt-60 wow fadeInUp" data-wow-delay=".2s">
                                <div className="col-lg-6">
                                    <div className="service-details-image-2">
                                        <img src="assets/images/service-dtails-2.png" alt="service-details" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <p>User experience is at the core of everything we do. Our UX design services aim to create seamless and intuitive interactions that guide users through your digital products effortlessly.</p>
                                    <p className="mt-20">We conduct thorough user research, wireframing, and prototyping to optimize usability and enhance user satisfaction.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 offset-xl-1 col-lg-4 wow fadeInUp" data-wow-delay=".2s">
                            <div className="service-sidebar">
                                <div className="procus-widget mb-40">
                                    <h3 className="widget-title">All Services</h3>
                                    <ul className="service-items">
                                        <li><a href="#">Branding</a><span><i className="fas fa-arrow-right"></i></span></li>
                                        <li><a href="#">Website Design</a><span><i className="fas fa-arrow-right"></i></span></li>
                                        <li><a href="#">UI/UX Design</a><span><i className="fas fa-arrow-right"></i></span></li>
                                        <li><a href="#">App Design</a><span><i className="fas fa-arrow-right"></i></span></li>
                                        <li><a href="#">App Design</a><span><i className="fas fa-arrow-right"></i></span></li>
                                        <li><a href="#">Digital Marketing</a><span><i className="fas fa-arrow-right"></i></span></li>
                                    </ul>
                                </div>
                                <div className="procus-widget text-center">
                                    <h3 className="widget-title">Book a Free Consultation</h3>
                                    <div className="widget-btn">
                                        <a href="/contact" className="primary-btn">Let’s Talk <span><i className="fas fa-arrow-right"></i></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* process slider area starts  */}
            <section className="process-slider-area">
                <div className="process-title-top pt-110 pb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h2>Our Process for UI/UX Design</h2>
                                <p className="mt-20">We believe that effective UI/UX design is a combination of art and science. Our approach is centered around understanding your users, your business goals, and your brand identity to create designs that resonate with your target audience and achieve your objectives.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="process-slider-part pb-120">
                    <div className="container">


                        <Swiper
                            className="process-slider-2"
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow, Pagination]}
                            spaceBetween={50}
                            slidesPerView={2}
                            navigation
                            autoplay={{ delay: 2000 }}
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            breakpoints={{
                                576: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="single-slide active">
                                    <img src="assets/images/process-slider-shape.png" className="shape-image" alt="shape-image" />
                                    <span className="slide-number">1</span>
                                    <h4>Research</h4>
                                    <p className="mt-10">We conduct thorough user research to gain insights into user behaviors, needs, and pain points.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slide">
                                    <img src="assets/images/process-slider-shape.png" className="shape-image" alt="shape-image" />
                                    <span className="slide-number">2</span>
                                    <h4>Wireframing</h4>
                                    <p className="mt-10">We conduct thorough user research to gain insights into user behaviors, needs, and pain points.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slide active">
                                    <img src="assets/images/process-slider-shape.png" className="shape-image" alt="shape-image" />
                                    <span className="slide-number">3</span>
                                    <h4>scratch</h4>
                                    <p className="mt-10">We conduct thorough user research to gain insights into user behaviors, needs, and pain points.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slide">
                                    <img src="assets/images/process-slider-shape.png" className="shape-image" alt="shape-image" />
                                    <span className="slide-number">4</span>
                                    <h4>Design</h4>
                                    <p className="mt-10">We conduct thorough user research to gain insights into user behaviors, needs, and pain points.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slide">
                                    <img src="assets/images/process-slider-shape.png" className="shape-image" alt="shape-image" />
                                    <span className="slide-number">5</span>
                                    <h4>Prototype</h4>
                                    <p className="mt-10">We conduct thorough user research to gain insights into user behaviors, needs, and pain points.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slide">
                                    <img src="assets/images/process-slider-shape.png" className="shape-image" alt="shape-image" />
                                    <span className="slide-number">6</span>
                                    <h4>Research</h4>
                                    <p className="mt-10">We conduct thorough user research to gain insights into user behaviors, needs, and pain points.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slide">
                                    <img src="assets/images/process-slider-shape.png" className="shape-image" alt="shape-image" />
                                    <span className="slide-number">7</span>
                                    <h4>Wireframing</h4>
                                    <p className="mt-10">We conduct thorough user research to gain insights into user behaviors, needs, and pain points.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slide">
                                    <img src="assets/images/process-slider-shape.png" className="shape-image" alt="shape-image" />
                                    <span className="slide-number">8</span>
                                    <h4>scratch</h4>
                                    <p className="mt-10">We conduct thorough user research to gain insights into user behaviors, needs, and pain points.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slide">
                                    <img src="assets/images/process-slider-shape.png" className="shape-image" alt="shape-image" />
                                    <span className="slide-number">9</span>
                                    <h4>Design</h4>
                                    <p className="mt-10">We conduct thorough user research to gain insights into user behaviors, needs, and pain points.</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

            </section>

            {/* testimonial area starts  */}
            {/* <section className="testimonial-area pt-120 pb-120">
                <img src="assets/images/testimonial-3d.png" alt="testimonial-3d" className="testimonial-3d" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 wow fadeInUp" data-wow-delay=".2s">
                            <div className="section-top text-center">
                                <h2>What <span>client say</span> about us</h2>
                                <p className="mt-20">Get to know the talented individuals who make our company thrive. Our diverse team brings together a wealth of expertise.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-60">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="testimonial-slider">
                                <Swiper
                                    className='fidback-swiper'
                                    navigation={true}
                                    pagination={{ clickable: true }}
                                    mousewheel={true}
                                    keyboard={true}
                                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                                >
                                    <SwiperSlide>
                                        <div className="testimonial-slide">
                                            <div className="testimonial-quote text-center">
                                                <span className="testimonial-quote-icon"><i className="fa-solid fa-quote-left"></i></span>
                                                <span className="quote-text">Efficient and professional. I will definitely use their services again. The professionalism of this team made the entire process effortless and stress-free.</span>
                                            </div>
                                            <div className="testimonial-content">
                                                <div className="content-left">
                                                    <div className="author-img">
                                                        <img src="assets/images/testimonial-01.png" alt="author-image" />
                                                    </div>
                                                    <div className="author-text">
                                                        <h4>Courtney Henry</h4>
                                                        <p>digital marketer</p>
                                                    </div>
                                                </div>
                                                <div className="content-right">
                                                    <div className="author-text">
                                                        <h4>Teriso Station</h4>
                                                        <p>creative agency</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-slide">
                                            <div className="testimonial-quote text-center">
                                                <span className="testimonial-quote-icon"><i className="fa-solid fa-quote-left"></i></span>
                                                <span className="quote-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, explicabo velit quod reprehenderit tempore quibusdam inventore quo excepturi.</span>
                                            </div>
                                            <div className="testimonial-content">
                                                <div className="content-left">
                                                    <div className="author-img">
                                                        <img src="assets/images/testimonial-02.jpg" alt="author-image" />
                                                    </div>
                                                    <div className="author-text">
                                                        <h4>Sylvia H Green</h4>
                                                        <p>Web developer</p>
                                                    </div>
                                                </div>
                                                <div className="content-right">
                                                    <div className="author-text">
                                                        <h4>Reid E But</h4>
                                                        <p>customer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-slide">
                                            <div className="testimonial-quote text-center">
                                                <span className="testimonial-quote-icon"><i className="fa-solid fa-quote-left"></i></span>
                                                <span className="quote-text">Explicabo hic quibusdam expedita eaque tempore laboriosam. Animi aliquam dolore laborum numquam earum minima eius ducimus.</span>
                                            </div>
                                            <div className="testimonial-content">
                                                <div className="content-left">
                                                    <div className="author-img">
                                                        <img src="assets/images/testimonial-03.jpg" alt="author-image" />
                                                    </div>
                                                    <div className="author-text">
                                                        <h4>Reid E But</h4>
                                                        <p>digital marketer</p>
                                                    </div>
                                                </div>
                                                <div className="content-right">
                                                    <div className="author-text">
                                                        <h4>Sylvia H Green</h4>
                                                        <p>creative agency</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <FidbackSection></FidbackSection>

            {/* get in touch area starts  */}
            <div className="get-in-touch-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 wow fadeIn" data-wow-delay=".2s">
                            <a href="/contact" className="big-title">Get in touch <span><i className="fas fa-arrow-right"></i></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}