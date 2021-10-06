import React from 'react'

function Login({onLogin}) {
    return (
        <button onClick={onLogin} className='btn login'>
            Login
        </button>
    )
}

export default Login

