import React from 'react';
import './SortingVisualiser.css';

export default class SortingVisualiser extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.infoButtonClick();
  }

  render() {
    // think of a better more obvious way to do this. face the issue head, deal with the asyncness in App.js
    const unsortedArray = this.props.unsortedArray ? this.props.unsortedArray : [];
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
