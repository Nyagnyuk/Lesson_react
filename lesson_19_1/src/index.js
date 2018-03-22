import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App_2 from './App_2';
import App_life_cycle from './App_life_cycle';
import registerServiceWorker from './registerServiceWorker';
import App_19_2 from './App_19_2';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App_2 />, document.getElementById('root_2'));
ReactDOM.render(<App_life_cycle />, document.getElementById('life_cycle'));
ReactDOM.render(<App_19_2 />, document.getElementById('app_19_2'));

registerServiceWorker();
