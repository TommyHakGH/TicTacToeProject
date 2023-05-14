import React, { useState } from 'react'

function Login() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState(""); 
const logIn = () => {};

  return (
    <div className = "logIn">
        <label> LogIn </label>
        <input placeholder= "Username" onChange={(event) => {
            setUsername(event.target.value);
        }} />
        <input placeholder= "Password" onChange={(event) => {
            setPassword(event.target.value);
        }} />
        <button onClick ={logIn}> Login 

        </button>

    </div>
  )
}

export default Login