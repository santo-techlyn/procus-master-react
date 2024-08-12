export default function CommonHero(props) {
    return (
        <>
            {/* breadcrumb starts  */}
            <section className="breadcrumb-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>{props.title}</h1>
                            <ul className="breadcrumb-meta">
                                <li><a href="/">{props.link1}</a></li>
                                <li><span><i className="fa-solid fa-angle-right"></i></span></li>
                                <li className="active">{props.link2}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}