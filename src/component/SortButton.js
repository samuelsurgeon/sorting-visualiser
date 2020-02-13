import React from 'react';
import PropTypes from 'prop-types';
import './SortButton.css';

export default class SortButton extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func
  }

  handleClick = () => {
    console.log(this.props.name);
  }

  render() {
    return (
      <section className="component-sort-button">
        <button className="sort-button" onClick={this.handleClick}>Sort</button>
      </section>
    );
  }
}