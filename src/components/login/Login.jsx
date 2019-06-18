import React from 'react'

class Login extends React.Component{
    constructor(props){
        super(props);        
    }

    login = (event)=> {

    }

    render(){
        return(
            <div className='Login'>
                <h1>Login with Google</h1>
                <i class="fab fa-google" onClick={this.login}></i>
            </div>
        )
    }
}

export default Login;