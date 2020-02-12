import React from 'react';
import './SortTypeButton.css';

export default class SortTypeButton extends React.Component {
  render() {
    return (
      <section className="sort-type-button">
        {this.props.type}
      </section>
    );
  }
}