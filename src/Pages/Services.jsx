
import { Swiper, SwiperSlide } from 'swiper/react';
import Accordion from "../Component/Common/Accordion";
import CommonHero from "../Component/Common/CommonHero";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel, Keyboard, Direction } from 'swiper/modules';

import 'swiper/css';
import GetInTuch from '../Component/Common/GetInTuch';

export default function Services() {
    return (
        <>
            <CommonHero title={'our services'} link1={'Home'} link2={'Services'}></CommonHero>

            {/* service area starts  */}
            <section className="service-area pt-110 pb-90">
                <img src="assets/images/service-3d.png" alt="service-3d" className="service-3d" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 wow fadeInUp" data-wow-delay=".2s">
                            <div className="section-top text-center">
                                <h2>We Provide Top Notch <span>Services</span> For You</h2>
                                <p className="mt-20">Explore a world of creativity, strategy, and tech with our range of services, all aimed at boosting your brand. From eye-catching designs to smart strategies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-60">
                        <div className="col-lg-12">
                            <Accordion></Accordion>
                        </div>
                    </div>
                </div>
            </section >

            {/* portfolio area starts  */}
            <section className="portfolio-area pt-110">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="section-top">
                                <h2>Let’s Dive into Our <span>Creative</span> Showcase</h2>
                                <p className="mt-20">A showcase of our most inspiring projects. Each one is a journey of innovation, passion, and bold creativity.</p>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <div className="section-top-btn">
                                <a href="/case" className="secondary-btn">See More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row mt-60">
                        <div className="col-lg-10 offset-lg-2 p-0">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                spaceBetween={50}
                                slidesPerView={2}
                                navigation
                                autoplay={{ delay: 2000 }}
                                scrollbar={{ draggable: true }}
                            >
                                <SwiperSlide>
                                    <div className="portfolio-single">
                                        <div className="portfolio-image">
                                            <a href="/case"><img src="assets/images/portfolio-01.png" alt="portfolio-image" /></a>
                                            <a href="/case_single" className="portfolio-btn">view details <span><i className="fas fa-arrow-right"></i></span></a>
                                        </div>
                                        <div className="portfolio-content mt-20">
                                            <h3><a href="/case">Shopify Responsive Website Design</a></h3>
                                            <p className="mt-10">Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brand's presence.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="portfolio-single">
                                        <div className="portfolio-image">
                                            <a href="/case"><img src="assets/images/portfolio-02.png" alt="portfolio-image" /></a>
                                            <a href="/case_single" className="portfolio-btn">view details <span><i className="fas fa-arrow-right"></i></span></a>
                                        </div>
                                        <div className="portfolio-content mt-20">
                                            <h3><a href="/case">Digital Agency Website Design</a></h3>
                                            <p className="mt-10">Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brand's presence.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="portfolio-single">
                                        <div className="portfolio-image">
                                            <a href="/case"><img src="assets/images/portfolio-03.png" alt="portfolio-image" /></a>
                                            <a href="/case_single" className="portfolio-btn">view details <span><i className="fas fa-arrow-right"></i></span></a>
                                        </div>
                                        <div className="portfolio-content mt-20">
                                            <h3><a href="/case">web design for your business</a></h3>
                                            <p className="mt-10">Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brand's presence.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="portfolio-single">
                                        <div className="portfolio-image">
                                            <a href="/case"><img src="assets/images/portfolio-04.png" alt="portfolio-image" /></a>
                                            <a href="/case_single" className="portfolio-btn">view details <span><i className="fas fa-arrow-right"></i></span></a>
                                        </div>
                                        <div className="portfolio-content mt-20">
                                            <h3><a href="/case">build your product with laravel</a></h3>
                                            <p className="mt-10">Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brand's presence.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="portfolio-single">
                                        <div className="portfolio-image">
                                            <a href="/case"><img src="assets/images/portfolio-02.png" alt="portfolio-image" /></a>
                                            <a href="/case_single" className="portfolio-btn">view details <span><i className="fas fa-arrow-right"></i></span></a>
                                        </div>
                                        <div className="portfolio-content mt-20">
                                            <h3><a href="/case">Shopify Responsive Website Design</a></h3>
                                            <p className="mt-10">Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brand's presence.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

            {/* testimonial area starts  */}
            <section className="testimonial-area pb-120">
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
            </section>

            {/* marquee area starts  */}
            <div className="custom-marquee">
                <div className="marquee-container">
                    <div className="marquee">
                        <div className="primary-bg">
                            <div className="marquee-content marquee-row-1">
                                <span><i className="ri-gemini-fill"></i> Branding <span></span><i className="ri-gemini-fill"></i> Website Design <span></span><i className="ri-gemini-fill"></i> App Design <span></span><i className="ri-gemini-fill"></i> Development <span></span><i className="ri-gemini-fill"></i> UI/UX Design <span></span><i className="ri-gemini-fill"></i> Graphic Design <span></span><i className="ri-gemini-fill"></i> Motion Graphic <span></span><i className="ri-gemini-fill"></i> Digital Marketing <span></span><i className="ri-gemini-fill"></i> SEO</span>
                                <span><i className="ri-gemini-fill"></i> Branding <span></span><i className="ri-gemini-fill"></i> Website Design <span></span><i className="ri-gemini-fill"></i> App Design <span></span><i className="ri-gemini-fill"></i> Development <span></span><i className="ri-gemini-fill"></i> UI/UX Design <span></span><i className="ri-gemini-fill"></i> Graphic Design <span></span><i className="ri-gemini-fill"></i> Motion Graphic <span></span><i className="ri-gemini-fill"></i> Digital Marketing <span></span><i className="ri-gemini-fill"></i> SEO</span>
                                <span><i className="ri-gemini-fill"></i> Branding <span></span><i className="ri-gemini-fill"></i> Website Design <span></span><i className="ri-gemini-fill"></i> App Design <span></span><i className="ri-gemini-fill"></i> Development <span></span><i className="ri-gemini-fill"></i> UI/UX Design <span></span><i className="ri-gemini-fill"></i> Graphic Design <span></span><i className="ri-gemini-fill"></i> Motion Graphic <span></span><i className="ri-gemini-fill"></i> Digital Marketing <span></span><i className="ri-gemini-fill"></i> SEO</span>
                            </div>
                        </div>
                        <div className="black-bg">
                            <div className="marquee-content marquee-row-2">
                                <span><i className="ri-gemini-fill"></i> Branding <span></span><i className="ri-gemini-fill"></i> Website Design <span></span><i className="ri-gemini-fill"></i> App Design <span></span><i className="ri-gemini-fill"></i> Development <span></span><i className="ri-gemini-fill"></i> UI/UX Design <span></span><i className="ri-gemini-fill"></i> Graphic Design <span></span><i className="ri-gemini-fill"></i> Motion Graphic <span></span><i className="ri-gemini-fill"></i> Digital Marketing <span></span><i className="ri-gemini-fill"></i> SEO</span>
                                <span><i className="ri-gemini-fill"></i> Branding <span></span><i className="ri-gemini-fill"></i> Website Design <span></span><i className="ri-gemini-fill"></i> App Design <span></span><i className="ri-gemini-fill"></i> Development <span></span><i className="ri-gemini-fill"></i> UI/UX Design <span></span><i className="ri-gemini-fill"></i> Graphic Design <span></span><i className="ri-gemini-fill"></i> Motion Graphic <span></span><i className="ri-gemini-fill"></i> Digital Marketing <span></span><i className="ri-gemini-fill"></i> SEO</span>
                                <span><i className="ri-gemini-fill"></i> Branding <span></span><i className="ri-gemini-fill"></i> Website Design <span></span><i className="ri-gemini-fill"></i> App Design <span></span><i className="ri-gemini-fill"></i> Development <span></span><i className="ri-gemini-fill"></i> UI/UX Design <span></span><i className="ri-gemini-fill"></i> Graphic Design <span></span><i className="ri-gemini-fill"></i> Motion Graphic <span></span><i className="ri-gemini-fill"></i> Digital Marketing <span></span><i className="ri-gemini-fill"></i> SEO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <GetInTuch></GetInTuch>
        </>
    )
}