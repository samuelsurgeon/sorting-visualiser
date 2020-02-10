import React from 'react';
import './SortingVisualiser.css';

export default class SortingVisualiser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    }
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 84; i++) {
      array.push(randomIntFromInterval(100, 1000));
    }
    this.setState({ array });
  }

  render() {
    const { array } = this.state;

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            // This needs to be implemented better, maybe split up better. Other engineers wouldn't be able to understand this code very easily...
            style={{height: `${value}px`, backgroundColor: `rgba(187, 174, 0, ${value / 1000}`}}>
          </div>
        ))}
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);   
}
