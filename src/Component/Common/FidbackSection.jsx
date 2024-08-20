import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel, Keyboard, Direction } from 'swiper/modules';
import { useEffect, useRef } from 'react';

export default function FidbackSection() {
    // const prevRef = useRef(null);
    // const nextRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    // useEffect(() => {
    //     const swiperInstance = swiperRef.current.swiper;

    //     // Ensure that the DOM elements are present before assigning them to Swiper
    //     if (prevRef.current && nextRef.current) {
    //         swiperInstance.params.navigation.prevEl = prevRef.current;
    //         swiperInstance.params.navigation.nextEl = nextRef.current;
    //         swiperInstance.navigation.init();
    //         swiperInstance.navigation.update();
    //     }
    // }, []);
    return (
        <>
            {/* testimonial area starts  */}
            <section className="testimonial-area pt-110 pb-120">
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
                                    onSwiper={(swiper) => {
                                        // Wait for Swiper instance to be initialized
                                        if (prevRef.current && nextRef.current) {
                                            swiper.params.navigation.prevEl = prevRef.current;
                                            swiper.params.navigation.nextEl = nextRef.current;
                                            swiper.navigation.init();
                                            swiper.navigation.update();
                                        }
                                    }}
                                    direction='vertical'
                                    style={{ height: '600px' }}
                                    navigation={{
                                        prevEl: prevRef.current,
                                        nextEl: nextRef.current,
                                    }}
                                    onBeforeInit={(swiper) => {
                                        swiper.params.navigation.prevEl = prevRef.current;
                                        swiper.params.navigation.nextEl = nextRef.current;
                                    }}
                                    className="mySwiper"
                                    // pagination={{ clickable: true }}
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

                                <div className="swiper-button-prev" ref={prevRef}>
                                    <i className="fa-solid fa-angle-up"></i>
                                </div>
                                <div className="swiper-button-next" ref={nextRef}>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}