import React from 'react';
import NewArrayButton from './NewArrayButton';
import InfoButton from './InfoButton';
import './SortingVisualiserButtons.css';

export default class SortingVisualiserButtons extends React.Component {
  render() {
    return (
      <section className="sorting-visualiser-buttons">
        <NewArrayButton></NewArrayButton>
        <InfoButton></InfoButton>
      </section>
    );
  }
}