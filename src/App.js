import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer';
import HomePage from './components/pages/home';
import AboutPage from './components/pages/about';
import ServicePage from './components/pages/service';
import BlogPage from './components/pages/blog';
import ContactPage from './components/pages/contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;