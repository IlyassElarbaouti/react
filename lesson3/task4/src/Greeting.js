import React from 'react'

function Greeting(props) {
    const today = new Date();
    const birthDate = new Date(props.dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;}
    return (
        <div firstName={props.firstName} lastName={props.lastName} date={props.dateString}>
            My name is {props.firstName} {props.lastName}. I'm {age} years old
        </div>
    )
}

export default Greeting
