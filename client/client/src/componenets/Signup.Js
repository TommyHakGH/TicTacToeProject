import React, {useState} from 'react'

function Signup() {
    const [user, setUser] = useState()
  return (
    <div className = "signUp">
        <label>Sign Up</label>
        <input placeholder= "First Name" onChange={(event) => {
            setUser({...user, firstName: event.target.value})
        }} />
        <input placeholder= "Last Name" onChange={(event) => {
            setUser({...user, lastName: event.target.value})
        }} />
        <input placeholder= "Username" onChange={(event) => {
            setUser({...user, username: event.target.value})
        }} />
        <input placeholder= "Passwor" onChange={(event) => {
            setUser({...user, password: event.target.value})
        }} />
        

    </div>
  )
}

export default Signup