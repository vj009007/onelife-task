import React from 'react';
import AboutUs from '../about-us';
import Details from '../details';
import Team from '../team';
import Testimonial from '../testimonial';

function HomePage() {
  return (
    <React.StrictMode>
      <AboutUs />
      <Details />
      <Team />
      <Testimonial />
    </React.StrictMode>
  );
}

export default HomePage;
