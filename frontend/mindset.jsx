import React from 'react';
import ReactDOM from 'react-dom';
// import configureStore from './store/store';
// import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    // const store = configureStore;
    const rootEl = document.addEventListener('root');
    ReactDOM.render(<Root store={store}>Test</Root>, rootEl)
});