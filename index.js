import React, { Component } from 'react';
import { render } from 'react-dom';

// The root of the React app
import App from './app';

// Import styles
import './style.css';
import './main.scss';

// Render the application.
render(<App />, document.getElementById('root'));