import React, { Component } from 'react';
import { getUsersList } from "../services/user.service";


export default class UserList extends Component {
    state = {
        userList: []
    };
    
    async componentDidMount() {
        const userList = await getUsersList();
        this.setState({ userList });
    }
    
    render() {
        console.log(this.state.userList);
        return <div>UserList Page</div>
    }
}
