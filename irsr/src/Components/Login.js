import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux';
import { loginData } from '../actions';
import '../css/login.css'

class Login extends Component {
  constructor() {
    super()
	this.state = {
		username: '',
		password: ''
  }
}

	
	render() {
		return (
			<form className='login' onSubmit={this.handleSubmit}>
				<div>
                <h1 className="login-title">Welcome Back!</h1>
					<input
						name='username'
						value={this.state.username}
						placeholder='username'
						onChange={this.handleInputChange}
                        type='text'
                        className='login-input'
					/>
				</div>
				<div>
					<input
						name='password'
						value={this.state.password}
						placeholder='password'
						onChange={this.handleInputChange}
                        type='password'
                        className='login-input'
					/>
				</div>
				<div>
					<button className='login-button'type='submit'>Login</button>
				</div>
                <p class="login-lost"><a href="">Forgot Password?</a></p>
			</form>
		)
	}

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

    handleSubmit = e => {
        e.preventDefault()

        //const endpoint = `${process.env.REACT_APP_API_URL}/api/login`
        const endpoint = 'http://localhost:5000/api/login'
        axios
            .post(endpoint, this.state)
            .then(res => {
                localStorage.setItem('jwt', res.data.token)
                console.log(res.data.token)
                axios.defaults.headers.common["Authorization"] = res.data.token
                return axios.get(`http://localhost:5000/api/users/${res.data.id}`)
            })
            .then(res=>{
				this.props.loginData(res.data)
				console.log(res.data)
                this.props.history.push('/home')
            })
            .catch(err => console.error(err))
	}
	
	
}

export default connect(null,{loginData})(Login)