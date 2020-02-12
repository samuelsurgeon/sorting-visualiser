import React from 'react';
import newArrayIcon from '../image/newArrayButton.png';
import infoIcon from '../image/infoButton.png';
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
    for (let i = 0; i < 65; i++) {
      array.push(randomIntFromInterval(100, 800));
    }
    this.setState({ array });
  }

  render() {
    const { array } = this.state;

    return (
      <div className="sorting-visualiser">
        <div class="button-container">
          <img
            class="new-array-button"
            onClick={() => this.resetArray()}
            alt="Generate New Array Button"
            src={newArrayIcon}>
          </img>
          <img
            class="info-button"
            alt="Information Button"
            src={infoIcon}>
          </img>
        </div>
        <div className="sorting-visualiser-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              // This needs to be implemented better, maybe split up better. Other engineers wouldn't be able to understand this code very easily...
              style={{height: `${value}px`, backgroundColor: `rgba(187, 174, 0, ${value / 800}`}}>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);   
}
