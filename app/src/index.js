import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import getInitState, { LOCAL_STORAGE_KEY } from './components/redux/store';
import { rootReducer } from './components/redux/reducers/rootReducer';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, getInitState(), composeWithDevTools())

store.subscribe(() => {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(store.getState()))
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

