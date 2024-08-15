import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel, Keyboard, Direction } from 'swiper/modules';

export default function FidbackSection() {
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
                                    direction='vertical'
                                    style={{ height: '600px' }}
                                    breakpoints={{
                                        768: {
                                            style: { height: '500px' },
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                    }}
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
        </>
    )
}