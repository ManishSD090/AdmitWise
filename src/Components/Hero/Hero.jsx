import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark_arrow.png';


const Hero = () => {
  return (
    <div className='hero container' >
      <div className="hero-text">
        <h1>Smarter choices, better admissions, expert advice.</h1>
        <p>AdmitWise is an AI-powered college predictor and counseling platform that helps students make informed decisions about their higher education journey. It combines data-driven predictions with expert guidance, ensuring students find the best-fit colleges based on their academic profile, interests, and career goals.</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
}

export default Hero;
