import React from 'react';
import './SpeedSlider.css';

export default class SpeedSlider extends React.Component {
  componentDidMount() {
    // I couldn't figure out a better way to do this? When I set the value in JSX it just gets stuck there
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
