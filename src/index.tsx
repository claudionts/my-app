import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import './main.css';
import ReduxToastr from 'react-redux-toastr';
import reducer from './store/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxToastr/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
