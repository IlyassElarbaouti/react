import React from 'react'
import GuestGreeting from './GuestGreeting.jsx'
import Login from './Login.jsx'
import Logout from './Logout.jsx'
import UserGreeting from './UserGreeting.jsx'

function Greeting({isLoggedIn}) {
    if(isLoggedIn){
        return (
        <UserGreeting></UserGreeting>
    )
    }
    return <GuestGreeting></GuestGreeting>
    
}

export default Greeting
