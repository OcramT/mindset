import React from 'react';
import NavBarContainer from '../nav/nav_bar_container'

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
            <ul className='errors'>
                {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`} className='error'>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {
        const { formType } = this.props
        return (
            <>
            <div className='nav-main hidden'><NavBarContainer /></div>
            <div className='session-splash'>
                <div className='session-form'>
                    <h1 className='session-title'>{formType}</h1>
                    <h2>{this.props.navLink}</h2>
                    <form onSubmit={this.handleSubmit}>

                        <label className='session-field'>
                            <input 
                            className='session-input'
                            type="text"
                            placeholder='Username'
                            value={this.state.username}
                            onChange={this.handleChange('username')}/>
                        </label>
                        <div></div>
                        
                        {this.props.formType === 'Sign up' && (
                        <label className='session-field'>
                            <input
                            className='session-input'
                            type="text"
                            placeholder='Email address'
                            value={this.state.email}
                            onChange={this.handleChange('email')} />
                        </label>)}
                        
                        <label className='session-field'>
                            <input 
                            className='session-input'
                            type="password"
                            placeholder='Password (6+ characters)'
                            value={this.state.password}
                            onChange={this.handleChange('password')}/>
                        </label>
                        
                        <input className='form-button' type='submit' value={formType}/>
                        {this.renderErrors()}
                    </form>
                </div>
                <div className='form-bg-container'>
                    <img className='form-bg' src={mindsetBGUrl} />
                </div>
            </div>
            </>
        )
    }

}

export default SessionForm;

