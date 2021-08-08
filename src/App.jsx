import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// pages
import { Provider } from 'react-redux';
import ConfirmDataPage from './pages/ConfirmDataPage';
import ExchangePage from './pages/ExchangePage';
import RequestPage from './pages/RequestPage';
import HomePage from './pages/Home/HomePage';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ExchangePage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/confirme" component={ConfirmDataPage} />
          <Route exact path="/request" component={RequestPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
