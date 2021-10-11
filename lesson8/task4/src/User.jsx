import React, { Component } from "react";

export default class User extends Component {
  
  state={
      user:null
  }
  componentDidMount(){
      this.fetchUser(this.props.userId)
  }
  fetchUser = (user)=>{
      fetch(`https://api.github.com/users/${user}`)
      .then(data=>data.json())
      .then(user=>this.setState({
          user
      }))
  }
  
    render() {
        const {user}=this.state
        const {avatar_url,name , location} = user;
        if(!user){
            return null
        }
    return (
      <div classNameName="user">
        <img
        className='user__avatar'
          alt="User Avatar"
          src={avatar_url}
        />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}
