import React, { Component } from 'react'

class UserGreeting extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    

    render() {
        // return(
        //     this.state.isLoggedIn ? 
        //     <div>Welcome Golam Kibria</div>:<div>Welcome Guest</div>
        // )

        return (this.state.isLoggedIn) && <div>Welcome Golam Kibria</div>
         
        // let message 
        // if (this.state.isLoggedIn) {
        //     message=<div><h1>Welcome Golam Kibria</h1></div>
        // }
        // else {
        //     message=<div><h1>Welcome Guest</h1></div>
        // } 
        
        // if (this.state.isLoggedIn) {
        //     return <div><h1>Welcome Golam Kibria</h1></div>
        // }
        // else {
        //     return <div><h1>Welcome Guest</h1></div>
        // }      
        
        // return (
        //     <div>
        //         <div><h1>Welcome Golam Kibria</h1></div>
        //         <div><h1>Welcome Guest</h1></div>                
        //     </div>
        // )
        //return <div>{message}</div>
    }
}
export default UserGreeting
