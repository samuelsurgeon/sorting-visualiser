import React from 'react';
import './SortType.css';

export default class SortType extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="sort-type">
        Sort type
        <section className="buttons-container">
          {this.props.children}
        </section>
      </section>
    );
  }
}