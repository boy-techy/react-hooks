import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import User from "./views/user";
import PageNotFound from "./PageNotFound";

export default class App extends Component {
    
    render() {
        return (
          <BrowserRouter>
              <Switch>
                  <Route path="/user" component={User}/>
                  <Route exact path="/" render={props => <Redirect {...props} to="/user"/>}/>
                  <Route path="*" component={PageNotFound}/>
              </Switch>
          </BrowserRouter>
        )
    }
}
