import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import BaseRoute from './components/common/BaseRoute';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/main.css';
import ListProductPage from './pages/product/ListProductPage';

const App = () => (
  <Router>
    <ToastContainer />
    <Switch>
      <BaseRoute path="/" component={ListProductPage} />
    </Switch>
  </Router>
);

export default App;
