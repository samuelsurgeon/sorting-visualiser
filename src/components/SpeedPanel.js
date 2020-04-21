import React from 'react';
import './SpeedPanel.css';

export default class SpeedSlider extends React.Component {
  componentDidMount() {
    const speedSlider = document.querySelector(`input[class*='slider']`);
    speedSlider.value = 250;
  }

  render() {
    return (
      <section className="component-speed-slider">
        Speed
        <input className="slider" type="range" min="150" max="350"></input>
      </section>
    );
  }
}
