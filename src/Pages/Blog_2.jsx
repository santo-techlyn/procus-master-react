import CommonHero from "../Component/Common/CommonHero";
import GetInTuch from "../Component/Common/GetInTuch";

export default function Blog_2() {
    return (
        <>
            <CommonHero title={'Blog 3 Column'} link1={'Home'} Link2={'Blog 3 Column'}></CommonHero>

            {/* blog 2 column starts  */}
            <section className="blog-2-column pt-110 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center wow fadeInUp" data-wow-delay=".2s">
                                <h2>Our Latest <span>Blog</span></h2>
                            </div>
                            <ul className="blog-page-categories mt-60 wow fadeInUp" data-wow-delay=".3s">
                                <li className="active"><a href="#">all post <span className="total-post">20</span></a></li>
                                <li><a href="#">design <span className="total-post">4</span></a></li>
                                <li><a href="#">product <span className="total-post">2</span></a></li>
                                <li><a href="#">Software Engineering <span className="total-post">10</span></a></li>
                                <li><a href="#">Artificial Intelligence <span className="total-post">4</span></a></li>
                                <li className="right">
                                    <select id="cars" name="cars">
                                        <option value="most-recent">Most Recent</option>
                                        <option value="design">Design</option>
                                        <option value="software-engineering">Software Engineering</option>
                                        <option value="artificial-intelligence">Artificial Intelligence</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-20">
                        <div className="col-lg-4 wow fadeIn" data-wow-delay=".3s">
                            <div className="blog-single-slide">
                                <div className="blog-image">
                                    <a href="blog-single.html" className="blog-thumb"><img src="assets/images/blog-thum-01.png" alt="blog-thumb" /></a>
                                </div>
                                <div className="blog-meta">
                                    <ul className="d-flex align-items-center">
                                        <li>By <a href="index.html">procus</a></li>
                                        <li className="separator">|</li>
                                        <li>23 March 2023</li>
                                    </ul>
                                    <ul>
                                        <li><i className="fa-solid fa-book-open"></i> 4 min read</li>
                                    </ul>
                                </div>
                                <h4>
                                    <a href="blog-single.html">Transforming Digital Solutions with  Artificial Intelligence</a>
                                </h4>
                                <p className="mt-20">We delve into the profound impact that Artificial Intelligence (AI) is having on digital solutions.</p>
                                <div className="blog-tags">
                                    <ul>
                                        <li><a href="blog-single.html">Artificial Intelligence</a></li>
                                        <li><a href="blog-single.html">Machine Learning</a></li>
                                        <li><a href="blog-single.html">Deep Learning</a></li>
                                    </ul>
                                </div>
                                <a className="blog-btn mt-40" href="blog-single.html">Read More <span><i className="fas fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay=".4s">
                            <div className="blog-single-slide">
                                <div className="blog-image">
                                    <a href="blog-single.html" className="blog-thumb"><img src="assets/images/blog-thum-02.png" alt="blog-thumb" /></a>
                                </div>
                                <div className="blog-meta">
                                    <ul className="d-flex align-items-center">
                                        <li>By <a href="index.html">procus</a></li>
                                        <li className="separator">|</li>
                                        <li>23 March 2023</li>
                                    </ul>
                                    <ul>
                                        <li><i className="fa-solid fa-book-open"></i> 4 min read</li>
                                    </ul>
                                </div>
                                <h4>
                                    <a href="blog-single.html">The Art of Collaboration in Creative Agency Studio</a>
                                </h4>
                                <p className="mt-20">In this blog post, we explore the dynamics of collaboration within and between creative.</p>
                                <div className="blog-tags">
                                    <ul>
                                        <li><a href="blog-single.html">creative agency</a></li>
                                        <li><a href="blog-single.html">product</a></li>
                                        <li><a href="blog-single.html">digital</a></li>
                                    </ul>
                                </div>
                                <a className="blog-btn mt-40" href="blog-single.html">Read More <span><i className="fas fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay=".5s">
                            <div className="blog-single-slide">
                                <div className="blog-image">
                                    <a href="blog-single.html" className="blog-thumb"><img src="assets/images/blog-thum-03.png" alt="blog-thumb" /></a>
                                </div>
                                <div className="blog-meta">
                                    <ul className="d-flex align-items-center">
                                        <li>By <a href="index.html">procus</a></li>
                                        <li className="separator">|</li>
                                        <li>23 March 2023</li>
                                    </ul>
                                    <ul>
                                        <li><i className="fa-solid fa-book-open"></i> 4 min read</li>
                                    </ul>
                                </div>
                                <h4>
                                    <a href="blog-single.html">Enhancing Creativity with Machine Learning</a>
                                </h4>
                                <p className="mt-20">Explore how AI is revolutionizing the design process, from generating innovative concepts.</p>
                                <div className="blog-tags">
                                    <ul>
                                        <li><a href="blog-single.html">Artificial Intelligence </a></li>
                                        <li><a href="blog-single.html">Machine Learning</a></li>
                                        <li><a href="blog-single.html">Deep Learning</a></li>
                                    </ul>
                                </div>
                                <a className="blog-btn mt-40" href="blog-single.html">Read More <span><i className="fas fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay=".6s">
                            <div className="blog-single-slide">
                                <div className="blog-image">
                                    <a href="blog-single.html" className="blog-thumb"><img src="assets/images/blog-thum-4.png" alt="blog-thumb" /></a>
                                </div>
                                <div className="blog-meta">
                                    <ul className="d-flex align-items-center">
                                        <li>By <a href="index.html">procus</a></li>
                                        <li className="separator">|</li>
                                        <li>23 March 2023</li>
                                    </ul>
                                    <ul>
                                        <li><i className="fa-solid fa-book-open"></i> 4 min read</li>
                                    </ul>
                                </div>
                                <h4>
                                    <a href="blog-single.html">The Art of Collaboration in Creative Agency Studio</a>
                                </h4>
                                <p className="mt-20">In this blog post, we explore the dynamics of collaboration within and between creative.</p>
                                <div className="blog-tags">
                                    <ul>
                                        <li><a href="blog-single.html">creative agency</a></li>
                                        <li><a href="blog-single.html">product</a></li>
                                        <li><a href="blog-single.html">digital</a></li>
                                    </ul>
                                </div>
                                <a className="blog-btn mt-40" href="blog-single.html">Read More <span><i className="fas fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay=".7s">
                            <div className="blog-single-slide">
                                <div className="blog-image">
                                    <a href="blog-single.html" className="blog-thumb"><img src="assets/images/blog-thum-5.png" alt="blog-thumb" /></a>
                                </div>
                                <div className="blog-meta">
                                    <ul className="d-flex align-items-center">
                                        <li>By <a href="index.html">procus</a></li>
                                        <li className="separator">|</li>
                                        <li>23 March 2023</li>
                                    </ul>
                                    <ul>
                                        <li><i className="fa-solid fa-book-open"></i> 4 min read</li>
                                    </ul>
                                </div>
                                <h4>
                                    <a href="blog-single.html">A Blueprint for Innovation in Product Development</a>
                                </h4>
                                <p className="mt-20">Explore how AI is revolutionizing the design process, from generating innovative concepts.</p>
                                <div className="blog-tags">
                                    <ul>
                                        <li><a href="blog-single.html">Artificial Intelligence </a></li>
                                        <li><a href="blog-single.html">Machine Learning</a></li>
                                        <li><a href="blog-single.html">Deep Learning</a></li>
                                    </ul>
                                </div>
                                <a className="blog-btn mt-40" href="blog-single.html">Read More <span><i className="fas fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay=".8s">
                            <div className="blog-single-slide">
                                <div className="blog-image">
                                    <a href="blog-single.html" className="blog-thumb"><img src="assets/images/blog-thum-6.png" alt="blog-thumb" /></a>
                                </div>
                                <div className="blog-meta">
                                    <ul className="d-flex align-items-center">
                                        <li>By <a href="index.html">procus</a></li>
                                        <li className="separator">|</li>
                                        <li>23 March 2023</li>
                                    </ul>
                                    <ul>
                                        <li><i className="fa-solid fa-book-open"></i> 4 min read</li>
                                    </ul>
                                </div>
                                <h4>
                                    <a href="blog-single.html">Product Management in the Digital Age: Complexity and Uncertainty</a>
                                </h4>
                                <p className="mt-20">In this blog post, we explore the dynamics of collaboration within and between creative.</p>
                                <div className="blog-tags">
                                    <ul>
                                        <li><a href="blog-single.html">creative agency</a></li>
                                        <li><a href="blog-single.html">product</a></li>
                                        <li><a href="blog-single.html">digital</a></li>
                                    </ul>
                                </div>
                                <a className="blog-btn mt-40" href="blog-single.html">Read More <span><i className="fas fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 wow fadeInUp" data-wow-delay=".2s">
                            <ul className="blog-pagination">
                                <li className="prev-post"><span><i className="fas fa-arrow-left"></i></span> previous</li>
                                <li className="page-number active">1</li>
                                <li className="page-number">2</li>
                                <li className="page-number">3</li>
                                <li className="next-post">next <span><i className="fas fa-arrow-right"></i></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <GetInTuch></GetInTuch>
        </>
    )
}