import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faDribbble, faTwitter, faPinterest, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubscribe = () => {
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            return;
        }

        // If email is valid, clear error and show a success popup
        setEmailError('');
        alert('Subscription successful!');
        setEmail('');
    };

    return (
        <>
            <div className="position-relative mt-8">
                <div className="container">
                    <div className="card bg-gradient-info z-index-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-8 mx-auto text-center">
                                    <h3 className="text-white">Be the first who see the news</h3>
                                    <p className="text-white opacity-8 mb-5 pe-5">
                                        Your company may not be in the software business,
                                        but eventually, a software company will be in your business.
                                    </p>
                                    <div className="row">
                                        <div className="col-sm-5 ms-auto">
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <FontAwesomeIcon icon={faEnvelope} />
                                                </span>
                                                <input 
                                                    type="text" 
                                                    className="form-control mb-sm-0 mb-2" 
                                                    placeholder="Email Here..." 
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            {emailError && <p className="text-danger">{emailError}</p>}
                                        </div>
                                        <div className="col-sm-3 me-auto text-start">
                                            <button 
                                                type="button" 
                                                className="btn bg-white w-100 mb-0 position-relative z-index-2"
                                                onClick={handleSubscribe}
                                            >
                                                Subscribe
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer pb-5 pt-10 bg-light mt-n8 position-relative">
                <div className="position-absolute w-100 z-index-1 top-0 mt-n3">
                    <svg width="100%" viewBox="0 -2 1920 157" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
                        <div className="col-lg-3">
                            <h6 className="font-weight-bolder mb-lg-4 mb-3">One Life Health</h6>
                        </div>
                        <div className="col-lg-6 text-center">
                            <ul className="nav flex-row align-items-center mb-5 mt-sm-0 justify-content-center">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Blog
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Services
                                    </a>
                                </li>
                            </ul>
                            <p className="mb-0">
                                Copyright © {new Date().getFullYear()} One Life Health by Mohd Rizwan.
                            </p>
                        </div>
                        <div className="col-lg-3 text-end">
                            <a href="javascript:;"  className="text-secondary me-xl-4 me-4">
                                <FontAwesomeIcon icon={faDribbble} />
                            </a>
                            <a href="javascript:;"  className="text-secondary me-xl-4 me-4">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="javascript:;"  className="text-secondary me-xl-4 me-4">
                                <FontAwesomeIcon icon={faPinterest} />
                            </a>
                            <a href="javascript:;"  className="text-secondary">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
