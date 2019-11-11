import React, { Component } from 'react';
import { getUsersList } from "../services/user.service";
import Pagination from '../common/pagination';
import DataTable from "../common/DataTable";
import Search from "../common/Search";

export default class UserList extends Component {
    state = {
        userList: []
    };
    
    submitHandler = (event) => {
        event.preventDefault();
        console.log("values");
    };
    
    async componentDidMount() {
        const userList = await getUsersList();
        this.setState({ userList });
    }
    
    render() {
        const { userList  } = this.state;
        return <div>
            <Search submitHandler={this.submitHandler}/>
            <DataTable data={userList}/>
            <Pagination dataLength={userList.length} initialPage={1} pageSize={10}/>
        </div>
    }
}
