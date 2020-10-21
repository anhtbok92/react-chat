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
                                <h2 className="text-center">Register Now</h2>
                                <form className="login-form">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Username</label>
                                        <input type="text" className="form-control" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                                        <input type="password" className="form-control" placeholder="" />
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
                            {/*<div className="col-md-8 banner-sec">*/}
                            {/*    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">*/}
                            {/*        <div className="carousel-inner" role="listbox">*/}
                            {/*            <div className="carousel-item active">*/}
                            {/*                <img className="d-block img-fluid" src="https://static.pexels.com/photos/33972/pexels-photo.jpg"*/}
                            {/*                     alt="First slide" />*/}
                            {/*                <div className="carousel-caption d-none d-md-block">*/}
                            {/*                    <div className="banner-text">*/}
                            {/*                        <h2>This is Heaven</h2>*/}
                            {/*                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt*/}
                            {/*                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Register