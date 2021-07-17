import React from "react";

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ value, ...props}) => {
    return <AuthContext.Provider value={ value } {...props}/>
};