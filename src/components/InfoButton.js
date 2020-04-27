import React from 'react';
import './InfoButton.css';

export default class InfoButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleInfoButton = this.handleInfoButton.bind(this);
  }
    
  handleInfoButton() {
    this.props.onInfoButtonClick();
  }

  render() {
    const infoPopUpHidden = this.props.infoPopUpHidden;

    return (
      <section className="component-info-button">
        <section className="button-container">
          <button
            name="infoButton"
            className="info-button"
            onClick={this.handleInfoButton} 
            alt="Information Button"
            disabled={this.props.animationRunning}>
            ?
          </button>
        </section>
      </section>
    );
  }
}
