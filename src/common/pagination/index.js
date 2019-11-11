import React, { useState, useEffect } from 'react';
import { getTotalPage } from "./selector";
import "./index.scss";


export default (props) => {
    const [currentPage, updatePage] = useState(props.initialPage);
    const [totalPages, updateTotalPages] = useState(props.dataLength);
    
    useEffect(() => {
        const { dataLength, pageSize } = props;
        updateTotalPages(getTotalPage(dataLength, pageSize));
    }, [props.dataLength]);
    
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(<li className={`page-number ${currentPage === i ? 'selected' : ''}`}
                       key={i} onClick={() => {
                           updatePage(i);
                           props.updateCurrentPage(i);
                       }}>{i}</li>)
    }
    
    
    return (
      <ul className={"pagination-container"}>{pages}</ul>
    )
    
}
