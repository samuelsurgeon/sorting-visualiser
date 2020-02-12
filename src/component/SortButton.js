import React from 'react';
import PropTypes from 'prop-types';
import './SortButton.css';

export default class SortButton extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func
  }

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  }

  render() {
    return (
      <section className="sort-button">
        <button onClick={this.handleClick}>{this.props.name}</button>
      </section>
    );
  }
}