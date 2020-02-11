import React from 'react';
import './SpeedSlider.css';

export default class SpeedSlider extends React.Component {
  render() {
    return (
      <section className="speedSlider">
        Speed
        <input className="slider" type="range"></input>
      </section>
    );
  }
}