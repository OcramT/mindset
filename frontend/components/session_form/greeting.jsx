import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props){
        super(props)
        this.logout = this.props.logout.bind(this)
        this.login = this.props.login.bind(this)
    }

    sessionStart() {
        const dummy = { username: 'User', email: 'user@mail.com', password: 'password123' }

        return <Link to='/dashboard' 
                className='signup session-button hidden' 
                onClick={() => this.login(dummy)}>Try for free</Link>
        // return <Link to='/dashboard' className='signup session-button hidden'>Try for free</Link>
    };

    welcomeMsg() {
       return <div className='hidden'>
                    <p>Welcome, {this.props.currentUser.username}</p>
                    <Link to='/' onClick={this.logout}>Log Out</Link>
              </div>
    };

    render() {
        return  this.props.currentUser ? this.welcomeMsg() : this.sessionStart(); 
    } 
};

export default Greeting;
