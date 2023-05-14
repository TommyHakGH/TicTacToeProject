import React from 'react'

function Login() {
const logIn = () => {};

  return (
    <div className = "logIn">
        <label> LogIn </label>
        <input placeholder= "Username" onChange={(event) => {
            setUser({...user, username: event.target.value})
        }} />
        <input placeholder= "Password" onChange={(event) => {
            setUser({...user, password: event.target.value})
        }} />
        <button onClick ={logIn}> Login 

        </button>

    </div>
  )
}

export default Login