import React from 'react';
import './Content.css';
import ClockSvgComponent from '../../assets/SVG/clock';
import AnonSvgComponent from '../../assets/SVG/anonymous';
import WorldSvgComponent from '../../assets/SVG/world';
import EliminateSvgComponent from '../../assets/SVG/eliminate';
import AccurateSvgComponent from '../../assets/SVG/accurate';
import ServerSvgComponent from '../../assets/SVG/server';


const Content = () => {
  return (
    <>
      <div className="content-container">

        <div className="column">
          <ClockSvgComponent className="icon" />
          <h2>Real-Time Intelligence</h2>
          <p>Get up-to-the-minute information instantly.</p>
        </div>
        <div className="column">
          <AnonSvgComponent />
          <h2>Stealthy Searches</h2>
          <p>Stay discreet while gathering data.</p>
        </div>
        <div className="column">
          <WorldSvgComponent />
          <h2>200+ Data Sources</h2>
          <p>Access a vast network of information.</p>
        </div>
        <div className="column">
          <EliminateSvgComponent className="icon" />
          <h2>Zero False Positives</h2>
          <p>Eliminate irrelevant results for precision.</p>
        </div>
        <div className="column">
          <AccurateSvgComponent />
          <h2>100% Accuracy</h2>
          <p>Trust in data that's always spot-on.</p>
        </div>
        <div className="column">
          <ServerSvgComponent />
          <h2>No Data Storage</h2>
          <p>Your searches, your privacy, always protected.</p>
        </div>
      </div>
    </>
  );
};

export default Content;
