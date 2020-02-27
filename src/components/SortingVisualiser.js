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

  handleClick = () => {
    this.props.infoButtonClick();
  }

  render() {
    const { array } = this.state;
    return (
      <section className="component-sorting-visualiser">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            // This needs to be implemented better, maybe split up better. Other engineers wouldn't be able to understand this code very easily...
            style={{height: `${value}px`}}>
              <h1 className="bar-height">{`${value}`}</h1>
          </div>))
        }
      </section>
    );
  }
}
