import React,{ Component } from "react" 
import AuthenticationService from '../service/AuthenticationService';
import { Input, Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

const inputFieldStyle = {marginBottom: '10px', width: '20em'};

class LoginForm extends Component{

    constructor(props) {
        super(props)
        this.state = {
            username: 'tom',
            password: 'password',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }
    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }
    loginClicked() {

        AuthenticationService
            .executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                this.props.history.push(`/admin`)
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })
        // AuthenticationService
        //     .executeBasicAuthenticationService(this.state.username, this.state.password)
        //     .then(() => {
        //         AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        //         this.props.history.push(`/courses`)
        //     }).catch(() => {
        //         this.setState({ showSuccessMessage: false })
        //         this.setState({ hasLoginFailed: true })
        //     })

    }


    render(){
        return (
        <div className="container" 
                    style= {{
                        margin:'2.5em',
                        display:'block',
                        float:'left',
                        width:'100%'
                    }}>
                    <h1 style={{marginBottom:'2em', fontWeight:'bold', fontFamily:'serif'}}>Survey Administrator Entrance</h1>
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    <div style = {{width:'100%'}}>
                        <Input type="text" 
                            name="username"
                            placeholder="username"
                            size = "large"
                            value={this.state.username}
                            onChange={this.handleChange} 
                            style = {inputFieldStyle}
                        />
                    </div>
                    <div style = {{width:'100%'}}>
                        <Input type="password" 
                            name="password"
                            placeholder="password"
                            size = "large"
                            value={this.state.password}
                            onChange={this.handleChange} 
                            style = {inputFieldStyle}
                        />
                    </div>
                    <Button 
                        className="btn btn-success" 
                        onClick={this.loginClicked}
                        type="primary"
                        shape="round" 
                        icon={<LoginOutlined/>} 
                        size={'large'}
                        style={{
                            marginTop:'2.5em',
                            background:'black',
                            borderColor:'white'
                        }}
                    >
                    Login
                    </Button>
                </div>
        );
    }
}

export default LoginForm;