import React from 'react';
import Heading from './Heading';
import SortType from './SortType';
import SortTypeButton from './SortTypeButton';
import SpeedSlider from './SpeedSlider';
import SortButton from './SortButton';
import SortingVisualiser from './SortingVisualiser';
import Stickies from './Stickies';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="sidebar">
        <Heading></Heading>
        <section className="sidebar-bottom">
          <SortType>
            <SortTypeButton type="Merge"></SortTypeButton>
            <SortTypeButton type="Insertion"></SortTypeButton>
            <SortTypeButton type="Bubble"></SortTypeButton>
            <SortTypeButton type="Heap"></SortTypeButton>
          </SortType>
          <SpeedSlider></SpeedSlider>
          <SortButton></SortButton>
        </section>
      </section>
      <section className="visualiser">
        <SortingVisualiser></SortingVisualiser>
        {/* maybe might move these stickies out */}
        <Stickies></Stickies>
      </section>
    </div>
  );
}

export default App;
