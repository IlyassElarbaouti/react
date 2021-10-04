import React from 'react'

function Profile(props) {
    const birthDate =new Date(props.userData.birthDate);
    const day = birthDate.getDate();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[birthDate.getMonth()];
    const year = birthDate.getFullYear()
    const birthDay = `${day} ${month} ${year}`
    return (
    <div className="profile">
      <div className="profile__name">{`${props.userData.firstName} ${props.userData.lastName}`}</div>
      <div className="profile__birth">{`Was born ${birthDay} in ${props.userData.birthPlace}`}</div>
    </div>
    )
}

export default Profile
