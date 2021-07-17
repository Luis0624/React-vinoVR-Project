import React from "react";
// import { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/Signup";
import Header from '../components/Header';
// import SignedIn from "../components/Navbar2";
// import MyFavs from "../components/Favorites";


import { AuthContext } from "../utils/AuthContext"
// import dashboard, it might be a seperate nav with a logout btn instead of sign in and sign in

function Routes() {
    return (
        <Switch>
            <RouteRegistration path="/Signin" component={SignIn} /> 
            <RouteRegistration path="/Signup" component={SignUp} /> 
            <RouteProtected path="/" component={Header} />
        </Switch>
    );
}

const RouteRegistration = ({component: Component, ...rest}) => {
    const { auth } = React.useContext(AuthContext);
    return <Route {...rest} render= {props=> !auth ? (<Component {...props} />) : <Redirect to='/mood' />} />;

};
const RouteProtected = ({component: Component, ...rest}) => {
    const { auth } = React.useContext(AuthContext);
    return <Route {...rest} render= {(props)=> auth ? (<Component {...props} />) : <Redirect to='/mood'/>} />;
};

export default Routes;