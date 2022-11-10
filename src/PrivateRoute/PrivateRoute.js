import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/ContextProvider';
import Spinner from '../Pages/Shared/Spinner';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);

    if(!user){
        if(loading){
            return <Spinner></Spinner>
        }
        return <Navigate to='/login'></Navigate>
    }
    else{
        return children
    }
};

export default PrivateRoute;