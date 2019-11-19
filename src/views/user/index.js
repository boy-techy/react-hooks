import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import UserDetail from "./userDetail";
import UserList from "./userList";
import { getUsersList } from "../../services/user.service";
import { UserContext } from "../../contexts/userContext";
import { Loader } from "../../common/Loader";

//configurable page size
const PAGE_SIZE = 20;
export default class User extends Component {
    
    state = {
        loading: false,
        userList: [],
        updateVersion: 0
    };
    
    async componentDidMount() {
        this.setState({ loading: true });
        const userList = await getUsersList();
        this.setState(currentState => ({ userList, updateVersion: currentState + 1, loading: false }));
    }
    
    render() {
        const { userList, updateVersion, loading } = this.state;
        const { match } = this.props;
        return (
          <UserContext.Provider value={{ userList, PAGE_SIZE, updateVersion }}>
              <Loader isLoading={loading}/>
              <Switch>
                  <Route path={`${match.path}/:id`} component={UserDetail}/>
                  <Route path={`${match.path}/`} component={UserList}/>
                  <Route path="*" component={() => <div>No Page Found</div>}/>
              </Switch>
          </UserContext.Provider>
        )
    }
}
