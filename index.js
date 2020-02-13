import React, { Component } from 'react';
import { render } from 'react-dom';

// The root of the React app
//import App from './App';
import App from './bookmarks/App';
import './bookmarks/styles.scss';

// Import styles
//import 'https://www.w3schools.com/w3css/4/w3.css';
import './css/w3css.css';

import './css/style.css';
import './css/main.scss';

// Render the application.
//render(<App />, document.getElementById('root'));
render(<App />, document.getElementById('bookmarks-root'));