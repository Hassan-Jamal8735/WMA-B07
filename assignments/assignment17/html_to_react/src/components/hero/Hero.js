import React from 'react';
import heroImg from '../../assets/images/hero.png'; // Adjust the path according to your project structure
import logoLight from '../../assets/images/logo-light.svg';
import logoDark from '../../assets/images/logo-dark.svg';

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="left">
          <h1 className="h1">
            Hi, I'm <b>Julia&nbsp;Walker</b>.
            <br />Web Developer
          </h1>
          <p className="h3">
            Specialized in <abbr title="Accessibility">a11y</abbr> and Core Web Vitals
          </p>
          <div className="btn-group">
            <a href="#" className="btn btn-primary">Contact Me</a>
            <a href="#" className="btn btn-secondary">About Me</a>
          </div>
        </div>
        <div className="right">
          <div className="pattern-bg"></div>
          <div className="img-box">
            <img src={heroImg} alt="Julia Walker" className="hero-img" />
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
