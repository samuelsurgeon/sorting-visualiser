import React from 'react';
import './Heading.css';

export default class Heading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="component-heading">
        <section className="title">
          Sorting Algorithm Visualiser
        </section>
        <section className="subtitle">
          <br></br>Click <a href="https://github.com/samuelsurgeon/sorting-visualiser" target="_blank">here</a> to see the code
        </section>
      </section>
    );
  }
}
