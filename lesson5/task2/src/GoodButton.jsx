import React from 'react'

function GoodButton() {
    const clickHandler = (event)=>{
        alert(event.target.innerHTML)
    };
    return (
        <button className='fancy-button' onClick={clickHandler}>
            click me!
        </button>
    )
}

export default GoodButton
