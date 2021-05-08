import React from 'react';

class Modal extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.show) {return null}

        return (
            <main className='modal-screen'>
                <div className='modal'>
                    <div className='session-form'>
                        <div onClick={() => this.props.closeModal()} 
                             className='close-wrapper modal-close'>
                            <img className='close remove' src={close} />
                        </div>
                        <h1 className='session-title'>Create Your Own Pack!</h1>
                        <form onSubmit={this.handleSubmit}>
                            <label className='session-field'>
                                <input
                                    className='session-input'
                                    type="text"
                                    placeholder='Pack Title' />
                            </label>
                            <div></div>

                            <label className='session-field'>
                                <input
                                    className='session-input'
                                    type="text"
                                    placeholder='Pack Category' />
                            </label>

                            <label className='session-field'>
                                <input
                                    className='session-input'
                                    type="text"
                                    placeholder='Something Else'/>
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