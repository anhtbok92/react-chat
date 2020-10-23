import React from 'react';
import firebase from "firebase";

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            chat_box: []
        }
        this.handleChat.bind(this);
    }

    componentDidMount() {
        // const chatRef = firebase.database().ref('general');
        // chatRef.on('value', snapshot => {
        //     const getChats = snapshot.val();
        //     let ascChats = [];
        //     for(let chat in getChats){
        //         if(getChats[chat].message !== ''){
        //             ascChats.push({
        //                 id: chat,
        //                 message: getChats[chat].message,
        //                 user: getChats[chat].user,
        //                 date: getChats[chat].timestamp
        //             });
        //         }
        //     }
        //     const chat_box = ascChats.reverse();
        //     this.setState({chat_box});
        // });

        let query = firebase.firestore()
            .collection('messages')
            .orderBy('timestamp', 'desc');

        query.onSnapshot(function(snapshot) {
            let ascChats = [];
            snapshot.docChanges().forEach(function(change) {
                console.log(change);
                let message = change.doc.data();
                if (change.type === 'added') {
                    ascChats.push({
                        id: change.doc.id,
                        user: message.name,
                        message: message.text,
                        profilePicUrl: message.profilePicUrl,
                        imageUrl: message.imageUrl,
                        date: message.timestamp
                    })
                }
            });
            const chat_box = ascChats.reverse();
            this.setState({chat_box});
        }).bind(this);

    }

    handleChangeMessage = e => {
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }

    handleChat = e => {
        e.preventDefault();
        if(this.state.message !== '') {
            // const chatRef = firebase.database().ref('general');
            // const chat = {
            //     message: this.state.message,
            //     user: this.props.username.displayName,
            //     timestamp: new Date().getTime()
            // }
            //
            // chatRef.push(chat);
            // this.setState({ message: '' });
            const chat = {
                name: firebase.auth().currentUser.displayName,
                text: this.state.message,
                profilePicUrl: firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png',
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }

            firebase.firestore().collection('messages')
                .add(chat)
                .then(() => {
                    this.setState({ message : '' });
                })
                .catch(function(error) {
                console.error('Error writing new message to database', error);
            });
        }
    }

    render() {
        return (
            <div>
                {this.props.username &&
                <div className="container">
                    <div className="messaging">
                        <div className="inbox_msg">
                            <div className="inbox_people">
                                <div className="headind_srch">
                                    <div className="recent_heading">
                                        <h4>Recent</h4>
                                    </div>
                                    <div className="srch_bar">
                                        <div className="stylish-input-group">
                                            <input type="text" className="search-bar" placeholder="Search team"/>
                                            <span className="input-group-addon"><button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="inbox_chat">
                                    <div className="chat_list active_chat">
                                        <div className="chat_people">
                                            <div className="chat_img">
                                                <img src="https://ptetutorials.com/images/user-profile.png"
                                                     alt="sunil"/>
                                            </div>
                                            <div className="chat_ib">
                                                <h5>React Develop Team</h5>
                                                <p>Chia sẻ trao dồi các kiến thức về front-end, chia sẻ các thư viện
                                                    React</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mesgs">
                                <form onSubmit={this.handleChat}>
                                    <div className="msg_history">
                                        {this.state.chat_box.map((chat, key) => {
                                            return(
                                                <div className='incoming_msg' key={key}>
                                                    {/*<div className="incoming_msg_img">*/}
                                                    {/*    /!*<img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/>*!/*/}
                                                    {/*    <p>{chat.user} : </p>*/}
                                                    {/*</div>*/}
                                                    <div className="received_msg">
                                                        <div className="received_withd_msg">
                                                            <p>{chat.user + ' : ' + chat.message + ' ' + new Date(chat.date).getDate() + '/' + (new Date(chat.date).getMonth()+1)}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="type_msg">
                                        <div className="input_msg_write">
                                            <input type="text" name="message" className="write_msg" placeholder="Type a message..." value={this.state.message} onChange={e => this.handleChangeMessage(e)} />
                                            <button className="msg_send_btn" type="submit"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                }
                {!this.props.username && <label>Login please !!!</label>}
            </div>
        );
    }
}

export default ChatRoom;