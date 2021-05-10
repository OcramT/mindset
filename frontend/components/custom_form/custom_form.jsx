import React, { createRef } from 'react';
import NavBarContainer from '../nav/nav_bar_container';
import { Link } from 'react-router-dom';

class CustomForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            packId: '',
            medId: this.props.currentMed.id,
            pack: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const {packId, medId, pack} = this.state
        // const customPack = Object.assign({ custom: true }, this.state);
        // console.log(customPack)
        this.props.updateCustomPack(packId, medId, pack);
        // this.props.closeModal()
    }

    handleChange(input) {
        return (e) => {
            let pack = this.props.customPacks[e.currentTarget.value]
            this.setState({ [input]: e.currentTarget.value, pack: pack })
        }
    }

    handleAnimate(e) {
        if (this.state.footerRef.current.className === 'single-med-bar-closed') {
            this.state.footerRef.current.className = 'single-med-bar-open'
            this.setState({ ['footerUp']: true })
        } else {
            this.state.footerRef.current.className = 'single-med-bar-closed'
            this.setState({ ['footerUp']: false })
        }
    }

    render() {
        if (!this.props.currentMed) return null
        let customPackArr = Object.values(this.props.customPacks)
        console.log('form state', this.state)
        console.log('form props', this.props)
        console.log(this.props.customPacks)

        return (
                <div className='med-list-wrapper'>
                    <ul className='med-list'>
                        <label className='session-field'>
                            <select
                                className='session-input category-dropdown'
                                value={this.state.description}
                                onChange={this.handleChange('packId')}
                                type="text">
                                <option defaultValue={`${this.props.currentUser.username}'s Custom Packs`}>
                                    {`${this.props.currentUser.username}'s Custom Packs`}</option>
                        {customPackArr.map((customPack, idx) => (
                                <option 
                                value={customPack.id}
                                key={`${customPack}-${idx}`}>
                                    {`${customPack.name}`}
                                </option>
                        ))}
                            </select>
                        </label>
                                {/* {customPack.medIds.map((medIdArr, medIdx) => (
                                    <Link
                                        to={`meditation/${medId}`}
                                        className='med-list-item'
                                        key={`med-item ${medIdx}`}>
                                        <div className='link-wrap'>
                                            <img className='med-icon'
                                                src={medListButton} />
                                            <li className='med-text'>
                                                {`Session ${idx + 1}`}
                                            </li>
                                        </div>
                                    </Link>
                                ))} */}
                            {/* </div> */}
                        {/* ))} */}
                        <button className='med-play' onClick={this.handleSubmit}>Add to this pack</button>
                    </ul>
                </div>
        )}
}

export default CustomForm;