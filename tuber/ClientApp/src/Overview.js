import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    changeUser = (user) => {
        this.setState({user: user});
    }

    render() {
        return(
            <Router>
                <Switch>
                    <Route path="/TourForm/:id" component={(param) => <TourForm url={param} user={this.state.user}/>}/>
                    <Route path="/CreateTour"><TourForm user={this.state.user}/></Route>
                    <Route path="/Payment"><Payment user={this.state.user}/></Route>
                    <Route path="/Review"><Review user={this.state.user}/></Route>
                    <Route path="/Login"><Login changeUser={this.changeUser} user={this.state.user}/></Route>
                    <Route path="/Register"><Register /></Route>
                    <Route path="/Search"><Search user={this.state.user}/></Route>
                    <Route path="/Admin"><Admin user={this.state.user}/></Route>
                    <Route path="/Tourist"><Tourist user={this.state.user}/></Route>
                    <Route path="/ViewTour"><ViewTour user={this.state.user}/></Route>
                    <Route path="/"><Home /></Route>
                </Switch>
            </Router>
        );
    }
}

export default Overview;