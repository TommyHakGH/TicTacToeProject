import React from 'react'

function Login() {


  return (
    <div className = "signUp">
        <label>Log In</label>
        <input placeholder= "Username" onChange={(event) => {
            setUser({...user, username: event.target.value})
        }} />
        <input placeholder= "Password" onChange={(event) => {
            setUser({...user, password: event.target.value})
        }} />
        <button onClick ={signUp}> Sign Up 

        </button>

    </div>
  )
}

export default Login