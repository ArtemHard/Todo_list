import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore} from 'redux'
import getInitState from './components/redux/store';
import { rootReducer } from './components/redux/reducers/rootReducer';

const store = createStore(rootReducer, getInitState())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

