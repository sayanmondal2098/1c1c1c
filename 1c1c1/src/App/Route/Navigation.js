import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './../ui/Login';
import Dashboard from "./../ui/Dashboard";
import ErrorPage from './../ui/ErrorPage';

class Navigation extends React.Component {
    render() {
        return (

            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/Dash" component={Dashboard} />
                        <Route path="/Login" component={Login} />
                        <Route component={Login} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Navigation;
