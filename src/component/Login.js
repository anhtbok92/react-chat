import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }

    render() {
        return (
            <div className="App">
                <section className="login-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 login-sec">
                                <h2 className="text-center">Login Now</h2>
                                <form className="login-form">
                                    <div className="form-group">
                                        <label htmlFor="email" className="text-uppercase">Email address</label>
                                        <input type="text" className="form-control" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="text-uppercase">Password</label>
                                        <input type="password" name="password" id="password" className="form-control" placeholder="" />
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