import React, { Component } from 'react';
import { render } from 'react-dom';

// The root of the React app
import App from './App';

// Import styles
import './css/style.css';
import './css/main.scss';

// Render the application.
render(<App />, document.getElementById('root'));