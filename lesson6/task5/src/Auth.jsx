import React , { Component }from 'react'
import Login from './Login.jsx'
import Spinner from './Spinner.jsx'
import Logout from './Logout.jsx'

export default class Auth extends Component {
    constructor({isLoggedIn}){
        super({isLoggedIn})
        this.state={
            isLoggedIn
        }
    }
    logIn=()=>{
       setTimeout(()=>{ this.setState({
           isLoggedIn:'logged'
       })
       console.log(this.state.isLoggedIn)
       },2000)
        this.setState({
           isLoggedIn:'loading'
       }) 
        console.log(this.state.isLoggedIn)
    }
    logOut=()=>{
        this.setState({
           isLoggedIn:false
       }) 
    }
    render() {
        if(this.state.isLoggedIn==='logged'){
            return <Logout onLogout={this.logOut}/>
        }
        else if(this.state.isLoggedIn==='loading'){
            return <Spinner />
        }
        return <Login onLogin={this.logIn}/>
    }
}

