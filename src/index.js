import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import reducer from './reducers/ticket-list-reducer';
// note: all reducers are now imported through rootReducer file
import rootReducer from './reducers/index';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer);
store.subscribe(() =>
  console.log(store.getState())
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
