import React from 'react';
import './SpeedSlider.css';

export default class SpeedSlider extends React.Component {
  render() {
    return (
      <section className="component-speed-slider">
        Speed
        <input className="sliderYellow" type="range"></input>
      </section>
    );
  }
}