import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { HashRouter as R} from 'react-router-dom';
import store from './ducks/store';
import './index.css';

ReactDOM.render(<R><Provider store={store}><App /></Provider></R>, document.getElementById('root'));
registerServiceWorker();

