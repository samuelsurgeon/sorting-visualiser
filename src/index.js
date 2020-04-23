import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import generateArray from './logic/generateArray';

ReactDOM.render(<App unsortedArray={generateArray()} selectedAlgorithm={null}/>, document.getElementById('root'));
