import React from 'react';
//import newArrayIcon from '../image/newArrayButton.png';
//import infoIcon from '../image/infoButton.png';
import './SortingVisualiser.css';

// Remember this should be 65! That's what it originally was
const NUMBER_OF_ARRAY_BARS = 14;

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
    const sortButtonStyle = document.querySelector(`button[class*='sort-button']`);
    sortButtonStyle.textContent = 'Sort';
    const arrayBars = document.querySelectorAll('.array-bar');
    const max = arrayBars.length;
    for (let i = 0; i < max; i += 1) {
      arrayBars[i].style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    }
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(100, 650));
    }
    this.setState({ array });
    this.props.updateArray(array);
  }

  render() {
    const { array } = this.state;
    return (
      <section className="component-sorting-visualiser">
        <div className="button-container">
          <button
            className="info-button"
            alt="Information Button">
            ?
          </button>
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
