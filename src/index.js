import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import Container from './components/Container';

const store = configureStore();

const App = () => (
  <Provider store={ store }>
    <Router>
      <div>
        <Container />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();