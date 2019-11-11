import React from 'react';
import NavBar from "../common/navBar";


export default ({ location, history }) => {
    if (!location.state) {
        history.push("/");
    }
    return <div>
        <NavBar back={true}/>
    </div>
    
};
