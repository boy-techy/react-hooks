import React from 'react';
import "./index.scss";

const Loader = ({ isLoading }) => isLoading ? <div className={"loader"}/> : null;

export {
    Loader
}
