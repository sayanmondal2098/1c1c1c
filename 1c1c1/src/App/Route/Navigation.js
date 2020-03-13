import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './../ui/Login';
import Dashboard from "./../ui/Dashboard";
import Registration from "./../ui/Registration";
// import ErrorPage from './../ui/ErrorPage';

class Navigation extends React.Component {
    render() {
        return (

            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/Dash" component={Dashboard} />
                        <Route path="/Login" component={Login} />
                        <Route path="/Registration" component={Registration} />
                        <Route component={Login} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Navigation;
