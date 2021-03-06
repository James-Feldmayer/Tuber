import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from 'react-dom';

import Login from './Login';
import Search from './Search';
import Home from './Home';
import Register from './Register';
import Tourist from './Tourist';
import CreateTour from './CreateTour';
import ViewTour from './ViewTour';
import Payment from './Payment';
import TourForm from './TourForm';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/TourForm/:id" component={TourForm}/>
        <Route path="/Login"><Login /></Route>
        <Route path="/Register"><Register /></Route>
        <Route path="/Search"><Search /></Route>
        <Route path="/CreateTour"><CreateTour /></Route>
        <Route path="/Tourist"><Tourist /></Route>
        <Route path="/ViewTour"><ViewTour /></Route>
        <Route path="/Payment"><Payment /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);