import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux';
import { loginData } from '../actions';

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
			<form onSubmit={this.handleSubmit}>
				<div>
					<input
						name='username'
						value={this.state.username}
						placeholder='username'
						onChange={this.handleInputChange}
						type='text'
					/>
				</div>
				<div>
					<input
						name='password'
						value={this.state.password}
						placeholder='password'
						onChange={this.handleInputChange}
						type='password'
					/>
				</div>
				<div>
					<button type='submit'>Login</button>
				</div>
			</form>
		)
	}

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

    handleSubmit = e => {
        e.preventDefault()

        //const endpoint = `${process.env.REACT_APP_API_URL}/api/login`
        const endpoint = ' https://irsr-api.herokuapp.com/api/login'
        axios
            .post(endpoint, this.state)
            .then(res => {
                localStorage.setItem('jwt', res.data.token)
                console.log(res.data.token)
                axios.defaults.headers.common["Authorization"] = res.data.token
                return axios.get(` https://irsr-api.herokuapp.com/api/users/${res.data.id}`)
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