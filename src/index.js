import './assets/scss/main.scss';
import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './routes/main/Main.js';

const App = () => <Main/>


ReactDOM.render(<App/>, document.getElementById('root'));