import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import User from "./views/user";

export default class App extends Component {
    
    render() {
        return (
          <BrowserRouter>
              <Switch>
                  <Route path="/user" component={User}/>
                  <Route exact path="/" render={props => <Redirect {...props} to="/user"/>}/>
                  <Route path="*" component={() => <div>No Page Found</div>}/>
              </Switch>
          </BrowserRouter>
        )
    }
}
