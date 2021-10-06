import React from 'react'

const Offline = ({handler}) => {
    return (
        <div>
            <p className='status__text'>Offline</p>
            <button onClick={handler} className='status__btn'>Reconnect</button>
        </div>
    )
}

export default Offline
