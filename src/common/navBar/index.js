import React from 'react';
import { Link } from 'react-router-dom';
import "./index.scss";

export default ({ back, backUrl, next, nextUrl, history }) => {
  
  return(
    <div className={"nav-ribbon-bar"}>
        { back ? <Link to={backUrl || '/'}>{'< Back'}</Link> : null }
        { next ? <Link to={nextUrl || '/'}>{'Next >'}</Link> : null }
    </div>
  )
};
