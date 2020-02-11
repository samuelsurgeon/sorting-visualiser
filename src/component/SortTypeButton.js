import React from 'react';
import './SortTypeButton.css';

export default class SortTypeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="sort-type-button">
        {this.props.type}
      </section>
    );
  }
}