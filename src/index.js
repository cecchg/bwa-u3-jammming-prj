import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '/Users/gabrielcecchini/jamming/src/components/App/App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
