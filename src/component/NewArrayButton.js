import React from 'react';
import newArrayIcon from '../image/newArrayButton.png';
import './NewArrayButton.css';

export default class NewArrayButton extends React.Component {
  render() {
    return (
      <section className="new-array-button">
        <a href="" class="new-array-icon"><img class="new-array-icon" src={newArrayIcon}></img></a>
      </section>
    );
  }
}