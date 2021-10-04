import React from 'react'

function GoodButton() {
    const clickHandler = ()=>{
        alert('Good job!')
    };
    return (
        <button onClick={clickHandler}>
            click me
        </button>
    )
}

export default GoodButton
