import React from 'react';
import SortingVisualiser from './SortingVisualiser';
import './App.css';

function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <SortType></SortType>
      <SpeedSlider></SpeedSlider>
      <SortButton></SortButton>
      <SortingVisualiser></SortingVisualiser>
      <SortingVisualiserButtons>
        <NewArrayButton></NewArrayButton>
        <InfoButton></InfoButton>
      </SortingVisualiserButtons>
      <Stickies></Stickies>
    </div>
  );
}

export default App;
