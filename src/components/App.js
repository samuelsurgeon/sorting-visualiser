import React from 'react';
import InfoPopUp from './InfoPopUp';
import Heading from './Heading';
import AlgorithmPanel from './AlgorithmPanel';
import SpeedPanel from './SpeedPanel';
import SortButton from './SortButton';
import InfoButton from './InfoButton';
import SortingVisualiser from './SortingVisualiser';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <section className="component-app">
        <InfoPopUp />
        <section className="sidebar">
          <Heading />
          <section className="sidebar-bottom">
            <AlgorithmPanel />
            <SpeedPanel />
            <SortButton />
          </section>
        </section>
        <section className="visualiser">
          <InfoButton />
          <SortingVisualiser />
        </section>
      </section>
    );
  }
}
