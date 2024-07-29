import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Testimonial() {

    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto text-center">
                        <h2 className="text-gradient text-info mb-0">What random people</h2>
                        <h2 className="mb-3">Think about us</h2>
                        <p>That’s the main thing people are controlled by! Thoughts- their perception of themselves!</p>
                    </div>
                </div>
                <div className="row mt-6">
                    <div className="col-lg-4 col-md-8">
                        <div className="card card-plain">
                            <div className="card-body">
                                <div className="author">
                                    <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-3.jpg" alt="Mathew Glock" className="avatar shadow" />
                                    <div className="name ps-2">
                                        <span>Mathew Glock</span>
                                        <div className="stats">
                                            <small><i className="far fa-clock"></i> 5 min read</small>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-4">"If you have the opportunity to play this game of life you need to appreciate every moment."</p>
                                <div className="rating mt-3 text-gradient text-info">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-4 col-md-8 ms-md-auto`}>
                        <div className="card card-plain">
                            <div className="card-body">
                                <div className="author align-items-center">
                                    <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/marie.jpg" alt="Marie" className="avatar shadow" />
                                    <div className="name ps-2">
                                        <span>Mathew Glock</span>
                                        <div className="stats">
                                            <small>Posted on 28 February</small>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-4">"If you have the opportunity to play this game of life you need to appreciate every moment."</p>
                                <div className="rating mt-3 text-gradient text-info">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-8">
                        <div className="card card-plain">
                            <div className="card-body">
                                <div className="author">
                                    <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-2.jpg" alt="Mathew Glock" className="avatar shadow" />
                                    <div className="name ps-2">
                                        <span>Mathew Glock</span>
                                        <div className="stats">
                                            <small><i className="far fa-clock"></i> 5 min read</small>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-4">"If you have the opportunity to play this game of life you need to appreciate every moment."</p>
                                <div className="rating mt-3 text-gradient text-info">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="horizontal dark my-5" />
                <div className="row">
                    <div className="col-lg-2 col-6">
                        <img className="w-100 opacity-6" src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-apple.svg" alt="Apple Logo" />
                    </div>
                    <div className="col-lg-2 col-6">
                        <img className="w-100 opacity-6" src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-facebook.svg" alt="Facebook Logo" />
                    </div>
                    <div className="col-lg-2 col-6">
                        <img className="w-100 opacity-6" src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-behance.svg" alt="Behance Logo" />
                    </div>
                    <div className="col-lg-2 col-6">
                        <img className="w-100 opacity-6" src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-spotify.svg" alt="Spotify Logo" />
                    </div>
                    <div className="col-lg-2 col-6">
                        <img className="w-100 opacity-6" src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-coinbase.svg" alt="Coinbase Logo" />
                    </div>
                    <div className="col-lg-2 col-6">
                        <img className="w-100 opacity-6" src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-pinterest.svg" alt="Pinterest Logo" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
