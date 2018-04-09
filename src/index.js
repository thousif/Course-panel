import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";
import App from './layout/App';
import Login from './scenes/login/index';
import Register from './scenes/register';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import { Router, Route, Link,IndexRoute, browserHistory, hashHistory } from "react-router";

ReactDOM.render(
  <LocaleProvider locale={enUS}>
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={App}>
        </Route>
      </Router>
    </Provider>
  </LocaleProvider>
  ,
document.getElementById('root'));

registerServiceWorker();
