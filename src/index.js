import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
import App from '../src/App';
import Home from "./Pages/Home/Home";
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route } from "react-router-dom";

const AppWithRoute = () => {
    return (
        <Router>
            <Route path="/" exact component={App} />
            <Route path="/home" component={Home} />
        </Router>
    );
};
ReactDOM.render(<AppWithRoute />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
