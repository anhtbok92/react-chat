import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }

    render() {
        return (
            <main role="main">
                <section className="login-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 login-sec">
                                <h2 className="text-center">Group chat for global teams.</h2>
                                <div>
                                    <label className="font-weight-bold event-color">Teamwork without the drama. It’s a beautiful thing.</label>
                                </div>
                                <img className="img-fluid mt-3" src="https://go.chatwork.com/image/home/img_device.jpg" />
                                <div className="mt-4">
                                    <button type="submit" className="btn btn-login float-right">Sign up now</button>
                                </div>
                            </div>
                            <div className="col-md-8 banner-sec">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img className="d-block img-fluid" src="https://static.pexels.com/photos/33972/pexels-photo.jpg"
                                                 alt="First slide" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <div className="banner-text">
                                                    <h2>Make meetings more productive for everyone.</h2>
                                                    <p>You know you're not the only one who dreads the weekly meeting. Person-by-person status updates. Really? Still?! Imagine your daily back-to-back meetings are replaced by project-specific quick video chats. Only as needed.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default LandingPage