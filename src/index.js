import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './js/components/App';
import registerServiceWorker from './js/registerServiceWorker';

let appEl = document.querySelector('#root');
ReactDOM.render(<App />, appEl);

registerServiceWorker();
