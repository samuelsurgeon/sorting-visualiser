import React from 'react';
import infoButton from '../image/infoButton.png';
import './InfoButton.css';

export default class InfoButton extends React.Component {
  render() {
    return (
      <section className="info-button">
        <a href=""><img class="info-button-icon" src={infoButton}></img></a>
      </section>
    );
  }
}