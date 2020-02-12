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
      <section className="sort-button">
        <button className="button" onClick={this.handleClick}>{this.props.name}</button>
      </section>
    );
  }
}