import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

const Profile = () => {
    const load = useSelector((state) => state.userReducer.load);
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const user = useSelector((state) => state.userReducer.user);
    return (
        <div>
            {load ? (
                <p>looooaaadiiing</p>
            ) : isAuth ? (
                <div>
                    <h2>Profile of {user.name}</h2>
                    <h5>name : {user.name}</h5>
                    <h5>email : {user.email}</h5>
                    <Link to="/edit">edit</Link>
                </div>
                
            ) : (
                <div>
                    {alert("please check you email or your password")}
                    <Navigate to="/signin" />
                </div>
            )}
        </div>
    );
};

export default Profile;
