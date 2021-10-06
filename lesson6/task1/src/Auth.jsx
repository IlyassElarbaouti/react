import React, { Component } from 'react'
import Greeting from './Greeting.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

export default class Auth extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false
        }
    }
    loginHandler=()=>{
            this.setState({
                isLoggedIn:true
            })
            
        }
        logoutHandler=()=>{
            this.setState({
                isLoggedIn:false
            })
            
        }
    render() {
        const button = this.state.isLoggedIn?(<Logout onLogout={this.logoutHandler}></Logout>)
        :(<Login onLogin={this.loginHandler}></Login>)
        return (
            <div className='panel'>
                <Greeting isLoggedIn={this.state.isLoggedIn}/>
                <div>{button}</div>     
            </div>
        )
    }
}

