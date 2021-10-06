import React from 'react'

function Logout({onLogout}) {
    return (
        <button onClick={onLogout} className='btn logout'>
            Logout
        </button>
    )
}

export default Logout

