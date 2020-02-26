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
    this.resetArray(this.props.updateArray());
  }

  resetArray(array) {
    this.setState({ array });
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
