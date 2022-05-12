import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "./../redux/actions/user";
import { Link } from "react-router-dom";

const Signup = () => {
    const [newUser, setNewUser] = useState({});
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <h1>Signup</h1>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="enter name here" name="name" onChange={handleChange} />
            <label htmlFor="email">Email</label>
            <input
                type="text"
                placeholder="enter email here"
                name="email"
                onChange={handleChange}
            />
            <label htmlFor="password">PASSword</label>
            <input
                type="text"
                placeholder="enter password here"
                name="password"
                onChange={handleChange}
            />
            <Link to={"/profile"}>
                <button onClick={() => dispatch(signup(newUser))}>Register</button>
            </Link>
        </div>
    );
};

export default Signup;
