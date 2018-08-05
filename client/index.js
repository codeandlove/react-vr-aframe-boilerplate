import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import rootAssets from './rootAssets.js';

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <App assets={rootAssets} />,
        document.getElementById('app')
    );
});