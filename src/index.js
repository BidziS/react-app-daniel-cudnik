/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';


ReactDOM.render(
    <Router history={browserHistory} routes={routes}/>,
    document.getElementById('app')
);

