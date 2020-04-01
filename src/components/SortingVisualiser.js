import React from 'react';
import './SortingVisualiser.css';

export default class SortingVisualiser extends React.Component {
  constructor(props) {
    super(props);
  }

  // Can this be lifted up? or is it better to keep this here?
  componentDidMount() {
    // console.log(this.props.updateArray());
    // console.log(this.props.unsortedArray);
  }

  handleClick = () => {
    this.props.infoButtonClick();
  }

  render() {
    // If it turns out that I need this then just grab it from props
    // const unsortedArray = this.props.updateArray();
    const unsortedArray = [];
    // const unsortedArray = this.props.unsortedArray;
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
