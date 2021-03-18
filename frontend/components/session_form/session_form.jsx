import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleChange(input) {
        return (e) => {
            this.setState({ [input] : e.currentTarget.value })
        }
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={idx}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        const { formType } = this.props
        return (
            <div>
                <h2>{this.props.navLink}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Username
                        &nbsp;
                        <input 
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange('username')}/>
                        &nbsp;
                    </label>
                    &nbsp;
                    {this.props.formType === 'Sign Up' && (
                    <label>Email
                        &nbsp;
                        <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange('email')} />
                    </label>)}
                    &nbsp;
                    <label>Password
                        &nbsp;
                        <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}/>
                    </label>
                    &nbsp;&nbsp;
                    <input class='session-button' type='submit' value={formType}/>
                    {this.renderErrors()}
                </form>
            </div>
        )
    }

}

export default SessionForm;

