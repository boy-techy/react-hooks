const getTotalPage = (totalPages, pageSize) => {
    const remainder = (totalPages % pageSize) || 0;
    const pages = (totalPages / pageSize) || 0;
    return remainder ? pages + 1 : pages
};

export {
    getTotalPage
}


