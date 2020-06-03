import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from 'react-dom';

import Login from './Login';
import Search from './Search';
import Home from './Home/Home';
import Register from './Register';
import Tourist from './Tourist';
import ViewTour from './ViewTour';
import Payment from './Payment';
import TourForm from './TourForm';
import Review from './Review';
import Admin from './Admin';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/TourForm/:id" component={TourForm}/>
        <Route path="/CreateTour"><TourForm /></Route>
        <Route path="/Payment"><Payment /></Route>
        <Route path="/Review"><Review /></Route>
        <Route path="/Login"><Login /></Route>
        <Route path="/Register"><Register /></Route>
        <Route path="/Search"><Search /></Route>
        <Route path="/Admin"><Admin /></Route>
        <Route path="/Tourist"><Tourist /></Route>
        <Route path="/ViewTour"><ViewTour /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);