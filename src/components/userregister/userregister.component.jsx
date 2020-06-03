import React, { Component } from 'react';
import axios from 'axios';

import './userregister.style.scss'

export default class UserRegister extends Component {
	constructor(props) {
		super(props);

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			username: '',
			email: '',
			users: []
		}
	}

	componentDidMount() {
		axios.get('http://localhost:5000/users/')
			.then(res => {
				const users = res.data;
				this.setState({ users })
			})
	}

	onChangeUsername(e) {
		this.setState({
			username: e.target.value
		});
	}

	onChangeEmail(e) {
		this.setState({
			email: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const user = {
			username: this.state.username,
			email: this.state.email
		}

		if (user.email === "sbhavesh@gmail.com" && user.username === "Bhavesh") {
			window.location = '/admin'
		} else {
			axios.post('http://localhost:5000/users/add', user)
				.then(res => console.log(res.data));
		}

		this.setState({
			username: '',
			email: ''
		})
	}

	render() {
		return(
			<div>
				<div className="container">
					<form onSubmit={this.onSubmit}>
						<div className="row justify-content-center">
							<h3>Enter Your Name and Email</h3>
						</div>
						<div className="row justify-content-center">
							<div className="col col-width-form">
								<div className="form-group">
									<div className="row">
										<div className="col al align-self-end">
											<label>Name: </label>
											<input type='text'
												required
												className='form-control username'
												value={this.state.username}
												onChange={this.onChangeUsername}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="col col-width-form">
								<div className="form-group">
									<div className="row">
										<div className="col al align-self-end">
											<label>Email: </label>
											<input type='email'
												required
												className='form-control email'
												value={this.state.email}
												onChange={this.onChangeEmail}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="form-group">
								<input type='submit' value='Submit' className='btn btn-primary' />
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}