import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../redux/actions/user";
import { Link } from "react-router-dom";
function Signin() {
    const [newUser, setNewUser] = useState({});
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>SIgnin</h2>
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
                <button onClick={() => dispatch(signin(newUser))}>Register</button>
            </Link>
        </div>
    );
}

export default Signin;
