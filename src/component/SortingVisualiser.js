import React from 'react';
import newArrayIcon from '../image/newArrayButton.png';
import infoIcon from '../image/infoButton.png';
import './SortingVisualiser.css';

const NUMBER_OF_ARRAY_BARS = 65;

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
    // NUMBER_OF_ARRAY_BARS should be 65 :)
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(100, 800));
    }
    this.setState({ array });
    this.props.updateArray(array);
  }

  render() {
    const { array } = this.state;
    return (
      <section className="component-sorting-visualiser">
        <div className="button-container">
          <img
            className="new-array-button"
            onClick={() => this.resetArray()}
            alt="Generate New Array Button"
            src={newArrayIcon}>
          </img>
          <img
            className="info-button"
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
      </section>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);   
}
