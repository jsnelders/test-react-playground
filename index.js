import React, { Component } from 'react';
import { render } from 'react-dom';


// Import styles
import './css/w3css.css';

import './css/style.css';
import './css/main.scss';



// The root of the React app
//import App from './App';
import App from './bookmarks/App';
import './bookmarks/styles.scss';

// Render the application.
//render(<App />, document.getElementById('root'));
render(<App />, document.getElementById('bookmarks-root'));