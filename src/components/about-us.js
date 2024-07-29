import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

function AboutUs() {
  const words = ["team", "design", "tool"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && subIndex === words[currentWordIndex].length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && subIndex === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    };

    const typingSpeed = isDeleting ? 100 : 150;
    const timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, currentWordIndex, words]);

  useEffect(() => {
    setDisplayedText(words[currentWordIndex].substring(0, subIndex));
  }, [subIndex, currentWordIndex, words]);

  return (
    <section className="bg-gradient-dark">
      <div className="page-header min-vh-75 bg-img-man">
        <span className="mask bg-gradient-info opacity-8"></span>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mx-auto my-auto">
              <h1 className="text-white">
                Work with an amazing{" "}
                <span className="text-white" id="typed">{displayedText}</span>
              </h1>
              <p className="lead mb-4 text-white opacity-8">
                We’re constantly trying to express ourselves and actualize our
                dreams. If you have the opportunity to play this game
              </p>
              <button type="submit" className="btn bg-white text-dark">
                Create Account
              </button>
              <h6 className="text-white mb-2 mt-5">Find us on</h6>
              <div className="d-flex justify-content-center">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} className="text-lg text-white me-4" />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} className="text-lg text-white me-4" />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} className="text-lg text-white me-4" />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faGooglePlus} className="text-lg text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute w-100 z-index-1 bottom-0">
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 40"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="moving-waves">
              <use xlinkHref="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.35)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.25)" />
              <use xlinkHref="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.20)" />
              <use xlinkHref="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)" />
              <use xlinkHref="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,1)" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
