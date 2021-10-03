import React from 'react'

function Greeting(props) {
    const today = new Date();
    const birth = new Date(props.birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    let m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;}
    return (
        <div className="greeting" firstName={props.firstName} lastName={props.lastName} date={props.birthDate}>
            My name is {props.firstName} {props.lastName}. I'm {age} years old
        </div>
    )
}

export default Greeting
