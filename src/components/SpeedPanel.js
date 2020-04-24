import React from 'react';
import './SpeedPanel.css';

export default class SpeedPanel extends React.Component {
  constructor(props) {
    super(props);

    this.handleRangeChange = this.handleRangeChange.bind(this);
  }

  handleRangeChange(e) {
    this.props.onRangeChange(e.target.value);
  }

  render() {
    const animationSpeed = this.props.animationSpeed;

    return (
      <section className="component-speed-panel">
        Speed
        <input 
          className="slider"
          type="range"
          min="150" max="350" 
          value={animationSpeed}
          onChange={this.handleRangeChange} />
      </section>
    );
  }
}
