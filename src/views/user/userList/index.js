import React, { Component } from 'react';
import Pagination from '../../../common/pagination';
import DataTable from "../../../common/DataTable";
import Search from "../../../common/search";
import { UserContext } from "../../../contexts/userContext";
import "./index.scss";

export default class UserList extends Component {
    state = {
        filteredUsers: [],
        currentPage: 0,
        searchFlag: false,
        pages: 0
    };
    static contextType = UserContext;
    
    static getDerivedStateFromProps(props, state) {
        const { userList, PAGE_SIZE, updateVersion } = UserContext.Consumer._currentValue;
        if (updateVersion !== state.updateVersion) {
            const data = userList.slice(0, PAGE_SIZE);
            return { ...state, updateVersion, filteredUsers: data, pages: userList.length };
        }
        return null;
    }
    
    submitHandler = searchValue => {
        const { PAGE_SIZE, userList } = this.context;
        if (searchValue) {
            const filteredUsers = userList.filter(user => user.first_name.includes(searchValue)) || [];
            const data = filteredUsers.slice(0, PAGE_SIZE);
            this.setState({ filteredUsers: data, searchFlag: true, pages: filteredUsers.length });
        } else {
            const data = userList.slice(0, PAGE_SIZE);
            this.setState({ filteredUsers: data, searchFlag: false, pages: userList.length })
        }
    };
    
    updateCurrentPage = pageIndex => {
        const { userList, PAGE_SIZE } = this.context;
        const { searchFlag, pages } = this.state;
        const startOffset = ((pageIndex - 1) * PAGE_SIZE),
          lastIndex = startOffset + PAGE_SIZE;
        const data = userList.slice(startOffset, lastIndex);
        this.setState({ currentPage: pageIndex, filteredUsers: data,
            pages: searchFlag ? pages : userList.length
        });
    };
    
    render() {
        const { PAGE_SIZE } = this.context;
        const { filteredUsers, pages } = this.state;
        return <div className={"container"}>
            <Search submitHandler={this.submitHandler}/>
            <DataTable data={filteredUsers}/>
            <Pagination updateCurrentPage={this.updateCurrentPage}
                        dataLength={pages} initialPage={1} pageSize={PAGE_SIZE}/>
        </div>
    }
}
