import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './utils/serviceWorker';

ReactDOM.render(<App />, document.getElementById('app'));

serviceWorker.register();
