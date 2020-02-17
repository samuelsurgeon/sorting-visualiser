import React from 'react';
import newArrayIcon from '../image/newArrayButton.png';
import infoIcon from '../image/infoButton.png';
import './SortingVisualiser.css';

// Remember this should be 65! That's what it originally was
const NUMBER_OF_ARRAY_BARS = 12;

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

  // If I'm using this resetArray method in the App.js file then I should declare that function in App.js and pass it down as a prop.
  
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
              style={{height: `${value}px`}}>
                <h1 className="bar-height">{`${value}`}</h1>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

// Declaring this here? Ideally, we should pass this down from App.js or something like that :)
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);   
}
