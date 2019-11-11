import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Search from "./common/Search";
import UserList from "./views/UserList";
import UserDetail from "./views/UserDetail";


export default class App extends Component {
    submitHandler = (event) => {
        event.preventDefault();
        console.log("values");
    };
    
    render() {
        return (
          <BrowserRouter>
              <Search submitHandler={this.submitHandler}/>
              <Switch>
                  <Route path="/user/:id" component={UserDetail}/>
                  <Route path="/users" component={UserList}/>
                  <Route exact path="/" render={props => <Redirect {...props} to="/users" />}/>
              </Switch>
          </BrowserRouter>
        )
    }
}
