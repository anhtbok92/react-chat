import React from 'react';
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
                <a className="navbar-brand" href="#">Chatting</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        {/*<li className="nav-item active">*/}
                        {/*    <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>*/}
                        {/*</li>*/}
                        {!this.props.username &&
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                        }
                        {!this.props.username &&
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                        }
                        {this.props.username &&
                            <div className="mt-1">
                                <a href="#!" onClick={this.props.logOut}>Logout</a>
                            </div>
                        }
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar