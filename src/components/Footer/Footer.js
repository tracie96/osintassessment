import React from 'react';
import SearchSvgComponent from '../../assets/SVG/search';
import IntelligenceSvgComponent from '../../assets/SVG/intelligence';
import AnalyzeSvgComponent from '../../assets/SVG/analyze';
import './Footer.css';

const Footer = () => {
  return (
    <>
    <h1 className="sub-title">Effortless intelligence in <span class="steps">three steps</span></h1>
    <footer className="footer">
    <div className="column">
      <SearchSvgComponent className="icon" />
      <h2>Search a selector</h2>
      <p>Enter a phone or email to initiate. Our platform rapidly connects to numerous data sources.</p>
    </div>
    <div className="column">
      <IntelligenceSvgComponent className="icon" />
      <h2>Receive real-time intelligence</h2>
      <p>Access immediate insights, including profiles, photos, links, and more, for a complete digital picture.</p>
    </div>
    <div className="column nopd-2">
      <AnalyzeSvgComponent className="icon" />
      <h2>Analyze and export data</h2>
      <p>Examine data closely and export in your preferred format: JSON, CSV, or PDF.</p>
    </div>
  </footer>
    </>
   
  );
};

export default Footer;
