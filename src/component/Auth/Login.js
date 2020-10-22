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
        this.handleChangeForm.bind(this);
        this.handleSubmit.bind(this);
    }

    handleChangeForm(e) {
        console.log(e);
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { email_address, password } = this.state;
        firebase.auth()
            .signInWithEmailAndPassword(email_address, password)
            .then(user => {
                console.log(user);
                var user1 = firebase.auth().currentUser;
                console.log(user1)
                this.props.history.push('/chat-room');
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
                                        <input type="text" name="email_address" className="form-control" placeholder="" value={this.state.email_address} onChange={e => this.handleChangeForm(e) }/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="text-uppercase">Password</label>
                                        <input type="password" name="password" id="password" className="form-control" placeholder="" onChange={e => this.handleChangeForm(e) } />
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