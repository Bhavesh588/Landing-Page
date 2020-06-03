import React, { Component } from 'react';
import axios from 'axios';

import './adminpage.style.scss';

class Admin extends Component {

    constructor(props) {
		super(props);

		this.state = {
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

    render() {
        return(
            <div className="main-admin bg-dark">
                <div className='container-fluid'>
                    <div className="container">
                        
                        <div className="row">
                            <div className="col col-flex">
                                <img src={require('../../assets/logo.jpg')} alt="logo" width="40px" className="logo" />
                                <h3 className="text-center name">Welcome Bhavesh</h3>
                                <button className="logout" onClick={() => window.location = '/'}><h6>Logout</h6></button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col col-imp">
                                <p>
                                    This is where you can view the user who are interested 
                                    in your website. Only you have the control because only
                                    you have the Name and Email to go to this page. This is
                                    not the Login or Profile page. This page was design for
                                    only to view the records so that you have to not go to 
                                    to the database to view the records. You can come here 
                                    whenever you want through your Landing Page.
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col col-scroll">
                                <table className="table table-dark table-striped">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody key="tbody">
                                        { 
                                            this.state.users.map(use =>
                                                    <tr key={use.username}> 
                                                        <td>{use.username}</td>
                                                        <td>{use.email}</td>
                                                    </tr>
                                                )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;