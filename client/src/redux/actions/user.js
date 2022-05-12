import axios from "axios";
import { SIGN_IN, SIGN_UP, LOAD, FAIL, LOG_OUT } from "./../actionType/user";

export const signup = (newUser) => async (dispatch) => {
    dispatch({ type: LOAD });
    try {
        let result = await axios.post("/api/user/signup", newUser);
        dispatch({
            type: SIGN_UP,
            payload: result.data,
        });
    } catch (error) {
        dispatch({
            type: FAIL,
            payload: error.response.data.errors,
        });
    }
};

export const signin = (user) => async (dispatch) => {
    dispatch({ type: LOAD });
    try {
        let result = await axios.post("/api/user/signin", user);
        dispatch({
            type: SIGN_IN,
            payload: result.data,
        });
    } catch (error) {
        dispatch({
            type: FAIL,
            payload: error.response.data.errors,
        });
    }
};

export const logOut = () => {
    return { type: LOG_OUT };
};
