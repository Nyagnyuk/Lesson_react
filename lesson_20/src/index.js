import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App_bool from './App_bool';
import App_gener_tag from './App_gener_tag';
import App_list from './App_list';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App_gener_tag/>,document.getElementById('root_2'));
ReactDOM.render(<App_bool/>,document.getElementById('root_3'));
ReactDOM.render(<App_list/>,document.getElementById('root_4'));
registerServiceWorker();
