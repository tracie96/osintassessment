import React from 'react';
import BackgroundSvgComponent from '../../assets/SVG/background.svg';
import WorldSVGComponent from '../../assets/SVG/world-map.svg';
import SpiralSvgComponent from '../../assets/SVG/spiral.svg';
import StarRatings from 'react-star-ratings';
import GoogleSvgComponent from '../../assets/SVG/google.svg';
import ArrowSvgComponent from '../../assets/SVG/arrow.svg';


import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={BackgroundSvgComponent} className='blurred-svg' alt='background' />
      <div className="overlay">
        <img src={SpiralSvgComponent} className='spiral-image' alt='spiral' />

        <div className="responsive-two-column-grid">
          <div className='pd-2'>
            <h1 className="subtitle"><span class="steps">Supercharge</span> your searches with OSINT Industries</h1>
            <p>The world’s best OSINT platform to give you detailed information from over 200+ websites.</p>

            <div className="button-container">
              <button className="button started">Get Started</button>
              <button className="button learn"> <span>Learn more <i class="fa-solid fa-arrow-right"></i></span></button>
            </div>

            <div className="button-container">
              <div className="ratings" style={{ display: "flex" }}>
                <StarRatings
                  rating={4.5}
                  starDimension="15px"
                  starSpacing="2px"
                  starRatedColor='#F2AE40'
                />
              </div>
              <div className="ratings"><img src={GoogleSvgComponent} className='' alt='goole'/></div>
              <div className="ratings"> <span>5 star rating</span></div>

            </div>

          </div>
          <div><img src={WorldSVGComponent} className='map-image' alt='map' />
          </div>
        </div>
      </div>
      <div className='table'>
      <div className="row">
        <div className="column-table border">
       
        </div>
        <div className="column-table border">
          
        </div>
        <div className="column-table border">
      
        </div>
      </div>
      <div className="row">
        <div className="column-table">
      
        </div>
        <div className="column-table">
       
        </div>
        <div className="column-table">
    
        </div>
        </div>
      </div>
      <img src={ArrowSvgComponent} className='arrowplus' alt='arrow' />
    </header>

  );
};

export default Header;// Header.js


