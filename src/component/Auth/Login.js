import React from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../config/firebase'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email_address: '',
            password: '',
            log_error: ''
        }
        this.handleChangeEmail.bind(this);
        this.handleChangePassword.bind(this);
    }

    handleChangeEmail = e => {
        this.setState({ email_address: e.target.value });
    }

    handleChangePassword = e => {
        this.setState({ password : e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        firebase.auth()
            .signInWithEmailAndPassword(this.state.email_address, this.state.password)
            .then(user => {
                console.log(user)
                this.props.history.push('/');
            })
            .catch(log_error => {
                this.setState({log_error});
            });

    }

    render() {
        return (
            <div className="App">
                <section className="login-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 login-sec">
                                <h2 className="text-center">Login Now</h2>
                                {this.state.log_error && <p className="text-danger">{this.state.log_error.message}</p>}
                                <form className="login-form" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email" className="text-uppercase">Email address</label>
                                        <input type="text" className="form-control" placeholder="" value={this.state.email_address} onChange={this.handleChangeEmail}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="text-uppercase">Password</label>
                                        <input type="password" name="password" id="password" className="form-control" placeholder="" onChange={this.handleChangePassword} />
                                    </div>

                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" />
                                            <small>Remember Me</small>
                                        </label>
                                        <button type="submit" className="btn btn-login float-right">Submit</button>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-check-label">
                                            <small>Don't have an account yet? <Link className="login-btn" to="/register">Register here</Link></small>
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Login