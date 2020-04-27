import React from 'react';
import './SortingVisualiser.css';

export default class SortingVisualiser extends React.Component {
  componentShouldUpdate() {
    return false;
  }

  render() {
    return (
      <section className="component-sorting-visualiser">
        {this.props.array.map((height, index) => (
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
