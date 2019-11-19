import React from 'react';

const UserContext = React.createContext({
    userList: [],
});
UserContext.displayName = 'UserContext';

export {
    UserContext
}
