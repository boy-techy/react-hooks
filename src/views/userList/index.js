import React, { Component, createRef } from 'react';
import { getUsersList } from "../../services/user.service";
import Pagination from '../../common/pagination';
import DataTable from "../../common/DataTable";
import Search from "../../common/search";
import "./index.scss";

//configurable page size
const PAGE_SIZE = 20;
export default class UserList extends Component {
    state = {
        userList: [],
        filteredUsers: [],
        currentPage: 0,
        searchFlag: false,
        pages: 0
    };
    pagination = createRef();
    
    submitHandler = searchValue => {
        const { userList } = this.state;
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
        const { userList, searchFlag, pages } = this.state;
        const data = userList.slice(pageIndex - 1, (pageIndex - 1) + PAGE_SIZE);
        this.setState({ currentPage: pageIndex, filteredUsers: data,
            pages: searchFlag ? pages : userList.length
        });
    };
    
    async componentDidMount() {
        const userList = await getUsersList();
        const data = userList.slice(0, PAGE_SIZE);
        this.setState({ userList, filteredUsers: data, pages: userList.length });
    }
    
    render() {
        const { filteredUsers, searchFlag, pages } = this.state;
        return <div className={"container"}>
            <Search submitHandler={this.submitHandler}/>
            <DataTable data={filteredUsers}/>
            <Pagination ref={this.pagination} key={searchFlag}
                        updateCurrentPage={this.updateCurrentPage}
                        dataLength={pages} initialPage={1} pageSize={PAGE_SIZE}/>
        </div>
    }
}
