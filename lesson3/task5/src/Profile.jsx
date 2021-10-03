import React from 'react'

function Profile(userData) {
    const birthDate =new Date(userData.birthDate);
    const day = birthDate.getDate();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[birthDate.getMonth()];
    const year = birthDate.getFullYear()
    const birthDay = `${day} ${month} ${year}`
    return (
        <div>
            <h1 className="profile__name">{userData.firstName} {userData.lastName}</h1>
            <p className="profile__birth">Was born {birthDay} in {userData.birthPlace}</p>
            
        </div>
    )
}

export default Profile
