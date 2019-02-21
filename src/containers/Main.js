import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../components/HomePage";
import Discover from "../components/Discover";

const Main = props => {
    return (
        <div className="main-content">
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/discover" component={Discover} />
                </Switch>
            </Router>
        </div>
    );

}


export default Main;
