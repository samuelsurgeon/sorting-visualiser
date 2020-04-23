import React from 'react';
import './SpeedPanel.css';

export default class SpeedPanel extends React.Component {
  render() {
    return (
      <section className="component-speed-panel">
        Speed
        <input className="slider" type="range" min="150" max="350" value={this.props.animationSpeed}/>
      </section>
    );
  }
}
