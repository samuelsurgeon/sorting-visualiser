import React from 'react';
import './SortingVisualiser.css';

// I think the way to solve the problem of importing multiple functions from the same .js (bad) is to create a separate .js file for each function, there was another repo that did that. I think it was C
import { getInsertionSortAnimations } from '../logic/algorithms/insertion';
import { getBubbleSortAnimations } from '../logic/algorithms/bubble';
import { getSelectionSortAnimations } from '../logic/algorithms/selection';

export default class SortingVisualiser extends React.Component {
  constructor(props) {
    super(props);
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
