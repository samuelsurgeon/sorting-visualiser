import React from 'react';
import './SortingVisualiser.css';

// I think the way to solve the problem of importing multiple functions from the same .js (bad) is to create a separate .js file for each function, there was another repo that did that. I think it was C
import { getInsertionSortAnimations } from '../algorithms/insertion';
import { getBubbleSortAnimations } from '../algorithms/bubble';
import { getSelectionSortAnimations } from '../algorithms/selection';
import { 
  disableSortTypeButtons,
  changeSortButtonText,
  setTimeoutsForAnimations,
  clearAnimations,
  enableSortTypeButtons,
  generateArray
} from '../operators/operators';

export default class SortingVisualiser extends React.Component {
  constructor(props) {
    super(props);
  }

  runSortAnimations() {
    let sortedArray = [];
    if (this.state.sortButtonClicked === false && this.state.activeAlgorithm !== null) {
      this.setState({ sortButtonClicked: !this.state.sortButtonClicked }, () => {
        disableSortTypeButtons();
        changeSortButtonText('Stop');
        if (this.state.activeAlgorithm === 'insertion') {
          this.setState({ sortedArray: getInsertionSortAnimations(this.state.unsortedArray) }, () => {
            setTimeoutsForAnimations(this.state.sortedArray);
          });
        }
        if (this.state.activeAlgorithm === 'bubble') {
          this.setState({ sortedArray: getBubbleSortAnimations(this.state.unsortedArray) }, () => {
            setTimeoutsForAnimations(this.state.sortedArray);
          });
        }
        if (this.state.activeAlgorithm === 'selection') {
          this.setState({ sortedArray: getSelectionSortAnimations(this.state.unsortedArray) }, () => {
            setTimeoutsForAnimations(this.state.sortedArray);
          });
        }
      });
    }
    if (this.state.sortButtonClicked === true && this.state.activeAlgorithm !== null) {
      this.setState({ sortButtonClicked: !this.state.sortButtonClicked }, () => {
        clearAnimations(this.state.sortedArray.length);
      });
        enableSortTypeButtons();
      changeSortButtonText('Sort');
      this.setState({ unsortedArray: generateArray() });
    }
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
