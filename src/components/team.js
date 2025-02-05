import React from "react";
import team1 from "../assets/images/kal-visuals-square.jpg";
import team2 from "../assets/images/bruce-mars.jpg";
import team3 from "../assets/images/team-4.jpg";
import team4 from "../assets/images/ivana-square.jpg";

function Team() {
    return (
        <section className="pt-sm-8 pb-5 position-relative bg-gradient-dark">
            <div className="position-absolute w-100 z-index-1 top-0 mt-n3">
                <svg width="100%" viewBox="0 -2 1920 157" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <title>wave-down</title>
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g fill="#FFFFFF" fillRule="nonzero">
                            <g id="wave-down">
                                <path d="M0,60.8320331 C299.333333,115.127115 618.333333,111.165365 959,47.8320321 C1299.66667,-15.5013009 1620.66667,-15.2062179 1920,47.8320331 L1920,156.389409 L0,156.389409 L0,60.8320331 Z" id="Path-Copy-2" transform="translate(960.000000, 78.416017) rotate(180.000000) translate(-960.000000, -78.416017) "></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 text-start mb-5 mt-5">
                        <h3 className="text-white z-index-1 position-relative">The Executive Team</h3>
                        <p className="text-white opacity-8 mb-0">There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="card card-profile overflow-hidden">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12 pe-lg-0">
                                    <a href="#">
                                        <div className="p-3 pe-md-0">
                                            <img className="w-100 border-radius-md" src={team1} alt="Emma Roberts" />
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-8 col-md-6 col-12 ps-lg-0 my-auto">
                                    <div className="card-body">
                                        <h5 className="mb-0">Emma Roberts</h5>
                                        <h6 className="text-info">UI Designer</h6>
                                        <p className="mb-0">Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="card card-profile mt-lg-0 mt-5 overflow-hidden">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12 pe-lg-0">
                                    <a href="#">
                                        <div className="p-3 pe-md-0">
                                            <img className="w-100 border-radius-md" src={team2} alt="William Pearce" />
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-8 col-md-6 col-12 ps-lg-0 my-auto">
                                    <div className="card-body">
                                        <h5 className="mb-0">William Pearce</h5>
                                        <h6 className="text-info">Boss</h6>
                                        <p>Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-6 col-12">
                        <div className="card card-profile overflow-hidden z-index-2">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12 pe-lg-0">
                                    <a href="#">
                                        <div className="p-3 pe-md-0">
                                            <img className="w-100 border-radius-md" src={team3} alt="Ivana Flow" />
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-8 col-md-6 col-12 ps-lg-0 my-auto">
                                    <div className="card-body">
                                        <h5 className="mb-0">Ivana Flow</h5>
                                        <h6 className="text-info">Athlete</h6>
                                        <p>Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="card card-profile mt-lg-0 mt-5 overflow-hidden z-index-2">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12 pe-lg-0">
                                    <a href="#">
                                        <div className="p-3 pe-md-0">
                                            <img className="w-100 border-radius-md" src={team4} alt="Sophia Garcia" />
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-8 col-md-6 col-12 ps-lg-0 my-auto">
                                    <div className="card-body">
                                        <h5 className="mb-0">Sophia Garcia</h5>
                                        <h6 className="text-info">JS Developer</h6>
                                        <p>Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-absolute w-100 bottom-0 mn-n1">
                <svg className="bottom-svg" width="100%" viewBox="0 -1 1920 166" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <title>wave-up</title>
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(0.000000, 5.000000)" fill="#FFFFFF" fillRule="nonzero">
                            <g id="wave-up" transform="translate(0.000000, -5.000000)">
                                <path d="M0,70 C298.666667,105.333333 618.666667,95 960,39 C1301.33333,-17 1621.33333,-11.3333333 1920,56 L1920,165 L0,165 L0,70 Z" fill="#fff"></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </section>
    );
}

export default Team;
