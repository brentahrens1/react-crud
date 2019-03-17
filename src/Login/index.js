import React, { Component } from 'react'; 

import { Button , Form } from 'semantic-ui-react'

class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }
    }
    handleInput = (e) => {

       this.setState({
           [e.target.name]: e.target.value
       })

    }
    handleSubmit = (e) => {
        e.preventDefault()
        //this is the function from the app container component that will allow us to lift state up to the 
        //app container this is the messenger
        this.props.handleLogin(this.state.username)
    }
    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Input type="text" name="username" value={this.state.username} onChange={this.handleInput} placeholder="usename"/>
                <Form.Input type="password" name="password" value={this.state.password} onChange={this.handleInput} placeholder="password"/>
                <Button color='green' size="large" type="submit" value="submit">Submit</Button>
            </Form>
        )
    }
}

export default Login 