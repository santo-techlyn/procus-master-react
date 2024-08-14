import { useState } from "react";

const items = [
    {
        header_number: '01',
        header_content: 'Branding',
        content: "Our expert team combines cutting-edge technology with intuitive design to create websites that not only look stunning but also drive results. Whether you need a simple landing page or a complex e-commerce platform, we've got you.",
        img: 'assets/images/service-image.png'
    },
    {
        header_number: '02',
        header_content: 'Website Design',
        content: "Our expert team combines cutting-edge technology with intuitive design to create websites that not only look stunning but also drive results. Whether you need a simple landing page or a complex e-commerce platform, we've got you.",
        img: 'assets/images/service-image.png'
    },
    {
        header_number: '03',
        header_content: 'App Design',
        content: "Our expert team combines cutting-edge technology with intuitive design to create websites that not only look stunning but also drive results. Whether you need a simple landing page or a complex e-commerce platform, we've got you.",
        img: 'assets/images/service-image.png'
    },
    {
        header_number: '03',
        header_content: 'SASS Development',
        content: "Our expert team combines cutting-edge technology with intuitive design to create websites that not only look stunning but also drive results. Whether you need a simple landing page or a complex e-commerce platform, we've got you.",
        img: 'assets/images/service-image.png'
    },
];

export default function Accordion() {

    const [acordion, setAcordion] = useState(0);

    function togglerAcordion(index) {
        if (index === acordion) {
            setAcordion(-1);
            return;
        }
        setAcordion(index)
    }
    return (
        <ul className="accordion-list">
            {items.map((item, index) =>
                <li onClick={() => togglerAcordion(index)} className={` wow fadeInLeft ${acordion === index ? "active" : ""}`} data-wow-delay=".2s" key={index}>
                    <h3 className={acordion === index ? "active" : ""}><span className="space-right">{item.header_number}</span>{item.header_content}</h3>
                    <div className={`answer ${acordion === index ? "active" : "inactive"}`}>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <p>{item.content}</p>
                                <a href="/service-single" className="primary-btn mt-20">Learn More <span><i className="fas fa-arrow-right"></i></span></a>
                            </div>
                            <div className="col-lg-6">
                                <img src="assets/images/service-image.png" alt="service-image" className="service-image" />
                            </div>
                        </div>
                    </div>
                </li>
            )}
        </ul>

    )
}