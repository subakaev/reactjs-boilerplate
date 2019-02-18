import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

import reducer from './reducers';
import App from './components/App.jsx';

const store = createStore(reducer);

render(
  <App store={store} />,
  document.getElementById('root'),
);
