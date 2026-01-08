import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import { useLocation } from 'react-router-dom';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there is a hash in the URL and scroll to it
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  );
};

export default Home;