import React, { Component } from 'react'
import ContentContainer from './../components/ContentContainer';
import LoginForm from './../forms/LoginForm'

class LoginView extends Component {

    render() {
        return (
            <div style = {{marginTop:'10em'}} >
            <ContentContainer>
                <LoginForm/>
            </ContentContainer>
            </div>
        )
    }
}

export default LoginView