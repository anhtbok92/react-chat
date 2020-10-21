import React from 'react';
import {Link} from "react-router-dom";

class Register extends React.Component {
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
                                <h2 className="text-center">Register your account</h2>
                                <form className="login-form">
                                    <div className="form-group">
                                        <label htmlFor="username" className="text-uppercase">Username</label>
                                        <input type="text" className="form-control" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="text-uppercase">Email address</label>
                                        <input type="text" className="form-control" placeholder="" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password" className="text-uppercase">Choose a password</label>
                                        <input type="password" name="password" id="password" className="form-control" placeholder="" />
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
            </div>
        )
    }
}

export default Register