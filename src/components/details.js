import React from "react";
function Details() {
    return (
        <section className="py-3">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-3 mx-auto">
                        <div className="device-wrapper position-relative">
                            <img 
                                className="w-100 mt-7 z-index-1 ms-n10 position-relative shadow border-radius-md position-absolute fadeIn3 fadeInBottom d-none d-sm-none d-md-none d-lg-block d-xl-block" 
                                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/illustrations/card-1.png"  alt="Card 1" />
                            <img 
                                className="w-100" 
                                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/illustrations/iphone-1.png" 
                                alt="iPhone 1"
                            />
                            <img 
                                className="w-100 bottom-0 z-index-1 position-relative shadow border-radius-md position-absolute ms-8 mb-5 fadeIn1 fadeInBottom d-none d-sm-none d-md-none d-lg-block d-xl-block" 
                                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/illustrations/card-2.png" 
                                alt="Card 2"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 mx-auto mt-5">
                        <h3 className="text-gradient text-info mb-0">Where Can You Find</h3>
                        <h3>Free Soft Design Resources</h3>
                        <p className="lead mb-5">We’re constantly trying to express ourselves and actualize our dreams.</p>
                        <div className="row">
                            <div className="col-lg-6 col-6 mb-lg-3">
                                <h2 className="text-gradient text-info">323</h2>
                                <p>Of “high-performing” level are led by a certified project manager</p>
                            </div>
                            <div className="col-lg-6 col-6 mb-lg-3">
                                <h2 className="text-gradient text-info">500+</h2>
                                <p>That meets quality standards required by our users</p>
                            </div>
                            <div className="col-lg-6 col-6">
                                <h2 className="text-gradient text-info">24/7</h2>
                                <p>Actively engage team members that finishes on time</p>
                            </div>
                            <div className="col-lg-6 col-6">
                                <h2 className="text-gradient text-info">73</h2>
                                <p>Team members that finishes on time every project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-md-0 mb-4">
                        <h3 className="text-gradient text-info mb-0">Medium Length Headline</h3>
                        <h3>Very nice subtitle</h3>
                        <p className="lead mb-md-5 mb-4">
                            Change the color to match your brand or vision, add your logo, choose the perfect thumbnail, remove the playbar, add controls and more.
                        </p>
                        <p><span className="me-2">&#9679;</span> Showcase and embed your work with</p>
                        <p><span className="me-2">&#9679;</span> Publish across social channels in a click</p>
                        <p><span className="me-2">&#9679;</span> Sell your videos worldwide</p>
                        <p><span className="me-2">&#9679;</span> Make more profit</p>
                    </div>
                    <div className="col-md-6">
                    <div className="blur-shadow-image text-center">
                        <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/curved-images/curved6.jpg" alt="img-blur-shadow" className="img-fluid shadow border-radius-lg max-height-600" />
                    </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Details;
