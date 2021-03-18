import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props){
        super(props)
        this.dummy = this.props.dummyUser
        this.logout = this.props.logout.bind(this)
        this.login = this.props.login.bind(this)
    }

    sessionStart() {
        return <Link to='/' 
                className='signup session-button' 
                onClick={() => this.login(this.dummy)}>Try for free</Link>
    };

    welcomeMsg() {
       return <div>
                    <p>Welcome, {this.props.currentUser.username}</p>
                    <button onClick={this.logout}>Log Out</button>
              </div>
    };

    render() {
        return  this.props.currentUser ? this.welcomeMsg() : this.sessionStart(); 
    } 
};

export default Greeting;
