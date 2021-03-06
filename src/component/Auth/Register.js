import React from 'react';
import { Link } from "react-router-dom";
import firebase, { auth } from '../../config/firebase';
import Loading from '../../component/Common/Loading'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email_address: '',
            password: '',
            log_error: null,
            loading: true
        }
        this.handleChangeForm.bind(this);
        this.handleRegister.bind(this);
    }

    componentDidMount() {
        this.setState({ loading: false });
    }

    handleChangeForm(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleRegister = e => {
        e.preventDefault();
        this.setState({ loading: true });
        const { email_address, username, password } = this.state;
        firebase.auth()
            .createUserWithEmailAndPassword(email_address, password)
            .then(() => {
                firebase.auth().currentUser
                    .updateProfile({ displayName: username })
                    .then(() => {
                        alert('Welcome to react chat team !');
                        this.props.history.push('/chat-room');
                        this.setState({ loading: false });
                    })
                    .catch(log_error => {
                        this.setState({ log_error, loading: false })
                    })
            })
            .catch(log_error => {
               this.setState({ log_error, loading: false })
            });
    }

    render() {
        return (
            <div className="App">
                <section className="login-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 login-sec">
                                <h2 className="text-center">Register your account</h2>
                                {this.state.log_error && <p className="text-danger">{this.state.log_error.message}</p>}
                                <form className="login-form" onSubmit={this.handleRegister}>
                                    <div className="form-group">
                                        <label htmlFor="username" className="text-uppercase">Username</label>
                                        <input type="text" name="username" className="form-control" placeholder="" value={this.state.username} onChange={e => this.handleChangeForm(e) } />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email_address" className="text-uppercase">Email address</label>
                                        <input type="text" name="email_address" className="form-control" placeholder="" value={this.state.email_address} onChange={e => this.handleChangeForm(e) } />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password" className="text-uppercase">Choose a password</label>
                                        <input type="password" name="password" id="password" className="form-control" placeholder="" value={this.state.password} onChange={e => this.handleChangeForm(e) }/>
                                    </div>
                                    <div className="form-check">
                                        <button type="submit" className="btn btn-login float-right">Submit</button>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-check-label">
                                            <small>Already have an account? <Link className="login-btn" to="/login">Login here</Link></small>
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <Loading loading={this.state.loading} />
            </div>
        )
    }
}

export default Register