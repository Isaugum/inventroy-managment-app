import axios from "axios";
import React, { useContext, useState } from 'react'
import { PopUp } from '../../components';
import {UserSession} from '../../App.js';

const LoginScreen = () => {

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState("");

    const { setUserSession, setUser } = useContext(UserSession);

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("Login, ", username, ": ", password);

        await axios({
            method: "post",
            url: "/login",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                username: username,
                password: password
            }
        }).then(response => {
            if(response.data.error) {
                console.log(response.data.error);
                setError(response.data.error);
            } else {
                console.log("It worked!");
                console.log(response);
                setUserSession(response.data.token);
                setUser(response.data.user);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', response.data.user);                
            }
        }).catch(err => {
            console.log(err);
        })
    }

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Register, ", username, ": ", password);

        axios({
            method: "post",
            url: "/register",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                username: username,
                password: password
            }
        })
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Username" onChange={e => {e.preventDefault(); setUsername(e.target.value)}}/>
                <input type="password" placeholder="Password" onChange={e => {e.preventDefault(); setPassword(e.target.value)}}/>
                <button onClick={(e) => handleLogin(e)}>Login</button>
                <button onClick={(e) => handleRegister(e)}>Register</button>
            </form>
            { error !== "" ? < PopUp setError={setError} message={error} /> : null}
        </div>
    )
}

export { LoginScreen };
