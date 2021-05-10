import React from 'react';

class Modal extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            category: '',
            description: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const customPack = Object.assign({custom: true}, this.state);
        console.log(customPack)
        this.props.createCustomPack(customPack);
        this.props.closeModal()
    }

    handleChange(input) {
        return (e) => {
            this.setState({[input] : e.currentTarget.value})
        }
    }

    handleCloseModal() {
        this.setState({
            name: '',
            category: '',
            description: '',})
        this.props.closeModal()
    }

    render() {
        if (!this.props.show) {return null}
        console.log(this.state)

        return (
            <main className='modal-screen'>
                <div className='modal'>
                    <div className='session-form'>
                        <div onClick={() => this.handleCloseModal()} 
                             className='close-wrapper modal-close'>
                            <img className='close remove' src={close} />
                        </div>
                        <h1 className='session-title'>Create Your Own Pack!</h1>
                        <form onSubmit={this.handleSubmit}>
                            <label className='session-field'>
                                <input
                                    className='session-input'
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.handleChange('name')}
                                    placeholder='Pack Name' />
                            </label>
                            <div></div>

                            <label className='session-field'>
                                <select
                                className='session-input category-dropdown'
                                type="text"
                                value={this.state.category}
                                onChange={this.handleChange('category')}
                                placeholder='Pack Category'>
                                    <option defaultValue="Choose a Category">
                                        Choose a Category</option>
                                    <option value="foundations">Foundations</option>
                                    <option value="health">Health</option>
                                    <option value="wellness">Wellness</option>
                                    <option value="happiness">Happiness</option>
                                    <option value="work">Work & Performance</option>
                                    <option value="sleep">Sleep</option>
                                </select>
                            </label>

                            <label className='session-field'>
                                <input
                                    className='session-input'
                                    type="text"
                                    value={this.state.description}
                                    onChange={this.handleChange('description')}
                                    placeholder='Description'/>
                            </label>

                            <input className='form-button' type='submit' />
                        </form>
                    </div>
                    {/* <div className='form-bg-container'>
                        <img className='form-bg' src={mindsetBGUrl} />
                    </div> */}
                </div>
            </main>
        )
    }
}

export default Modal;