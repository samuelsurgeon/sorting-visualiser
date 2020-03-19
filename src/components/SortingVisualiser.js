import React from 'react';
import './SortingVisualiser.css';

export default class SortingVisualiser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      unsortedArray: [],
    }
  }

  componentDidMount() {
    this.resetArray(this.props.updateArray());
  }

  resetArray(unsortedArray) {
    this.setState({ unsortedArray });
  }

  handleClick = () => {
    this.props.infoButtonClick();
  }

  render() {
    const { unsortedArray } = this.state;
    return (
      <section className="component-sorting-visualiser">
        {unsortedArray.map((height, index) => (
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
