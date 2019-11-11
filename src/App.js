import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import UserList from "./views/userList";
import UserDetail from "./views/userDetail";


export default class App extends Component {
    
    render() {
        return (
          <BrowserRouter>
              <Switch>
                  <Route path="/user/:id" component={UserDetail}/>
                  <Route path="/users" component={UserList}/>
                  <Route exact path="/" render={props => <Redirect {...props} to="/users" />}/>
              </Switch>
          </BrowserRouter>
        )
    }
}
