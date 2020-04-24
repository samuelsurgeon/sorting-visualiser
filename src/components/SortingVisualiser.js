import React from 'react';
import './SortingVisualiser.css';

export default class SortingVisualiser extends React.Component {
  shouldComponentUpdate() {
    return this.props.animationRunning;
  }

  render() {
    return (
      <section className="component-sorting-visualiser">
        {this.props.unsortedArray.map((height, index) => (
          <section
            className="array-bar"
            key={index}
            style={{height: `${height}px`}}>
              <h1 className="bar-height">{`${height}`}</h1>
          </section>))
        }
      </section>
    );
  }
}
