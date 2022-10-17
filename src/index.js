import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reducer } from './database/redux/reducers'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
     </Router>
    </Provider>,
    document.getElementById("root")
);
