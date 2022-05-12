import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const load = useSelector((state) => state.userReducer.load);
    const isAuth = useSelector((state) => state.userReducer.isAuth);

    return load ? <p>loooadi</p> : isAuth ? children : <Navigate to="/" />;
};

export default PrivateRoute;
