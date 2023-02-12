import axios from "axios";
import React, { useState } from 'react'

const LoginScreen = () => {

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login, ", username, ": ", password);

        axios({
            method: "post",
            url: "/login",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                username: username,
                password: password
            }
        })
    }

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Register, ", username, ": ", password);
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Username" onChange={e => {e.preventDefault(); setUsername(e.target.value)}}/>
                <input type="password" placeholder="Password" onChange={e => {e.preventDefault(); setPassword(e.target.value)}}/>
                <button onClick={(e) => handleLogin(e)}>Login</button>
                <button onClick={(e) => handleRegister(e)}>Register</button>
            </form>
        </div>
    )
}

export { LoginScreen };
