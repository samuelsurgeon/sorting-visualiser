import React from 'react';
import './Heading.css';

export default class Heading extends React.Component {
  // Should this just be changed to a functional component? Because it's so simple?
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