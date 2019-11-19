import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./index.scss";

export default class DataTable extends Component {
    
    
    render() {
        const { data } = this.props;
        return <table className={"data-table"}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Company</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Email</th>
                <th>Web</th>
                <th>Age</th>
            </tr>
            </thead>
            <tbody>
            {
                data.map(user => {
                    return <tr key={user.id}>
                        <td>
                            <Link to={{pathname: `/user/${user.id}`, state:{...user}}}>{`${user.first_name} ${user.last_name}`}</Link>
                        </td>
                        <td>{user.company_name}</td>
                        <td>{user.city}</td>
                        <td>{user.state}</td>
                        <td>{user.zip}</td>
                        <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                        <td><a href={user.web}>{user.web}</a></td>
                        <td>{user.age}</td>
                    </tr>
                })
                
            }
            </tbody>
        </table>
    }
}
