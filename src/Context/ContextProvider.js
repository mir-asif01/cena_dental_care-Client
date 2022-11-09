import React, { createContext } from 'react';

export const AuthContext = createContext()
const ContextProvider = ({children}) => {

    const user = {name : 'asif'}
    const auth = {user}

    return (
        <div>
            <AuthContext.Provider value={auth}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ContextProvider;