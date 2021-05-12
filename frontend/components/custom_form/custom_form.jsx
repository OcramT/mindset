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
            customPackUpdateValues : {
                packId: '',
                medId: this.props.currentMed.id,
                pack: ''},
            selectedCustomPack: {},
            packs: this.props.packs,
            selected: false,
            meds: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRender = this.handleRender.bind(this);
        this.handleState = this.handleState.bind(this);
        this.handleMedRemove = this.handleMedRemove.bind(this);
    }

    componentDidMount() {
        this.setState({packs: this.props.packs})
    }

    componentWillUnmount() {
        this.props.clearAllPacks()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.packs !== this.props.packs) {
            this.setState({packs: this.props.packs})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const {packId, medId, pack} = this.state
        let packUpdate = this.state.customPackUpdateValues
        packUpdate = pack
        this.props.updateCustomPack(packId, medId, pack)
            .then(() => this.setState({ packs: this.props.packs}))
    }

    handleChange(input) {
        return (e) => {
            this.state.selected = true
            let pack = this.props.customPacks[e.currentTarget.value]
            this.setState({ [input]: e.currentTarget.value, pack: pack })
        }
    }

    handleMedRemove() {
        let {medId, packId} = this.state
        let newMeds = this.state.pack.medIds
        newMeds = newMeds.filter((med) => med.id !== medId)
        this.props.deleteCustomPackMeditationForm(medId, packId)
            .then(() => this.setState({ meds: newMeds }))
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

    handleState() {
        let oldPackProps = this.props.packs
        this.state.packs = oldPackProps
    }

    handleRender() {
            let currentPack = Object.assign({...this.state.pack.medIds})
            let currentMedArr = []
            for (const key in currentPack) {
                currentMedArr.push(currentPack[key]['id'])
            }

            if (!currentMedArr.includes(this.state.medId)) {
                return <button className='med-play single-med-add-remove'
                    onClick={this.handleSubmit}>
                    Add to this pack
                                </button>
            } else {
                return <button className='med-play single-med-add-remove'
                    onClick={() => this.handleMedRemove()}>
                    Remove from this pack
                                </button>
            }
    }

    render() {
        if (!this.props.packs) return null
        if (!this.props.currentMed) return null
        if (!this.props.customPacks) return null
        let customPackArr = Object.values(this.props.customPacks)
        this.handleState()
        let currentPackMeds = this.state.pack.medIds

        return (
            <div className='custom-wrap'>
                <div className='custom-med-list-wrapper'>
                    <ul className='single-med-list'>
                        <label className='session-field'>
                            <select
                                className='session-input category-dropdown'
                                defaultValue='no-value'
                                value={this.state.description}
                                onChange={this.handleChange('packId')}
                                type="text">
                                <option value='no-value' disabled>
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
                        {/* {customPackArr.forEach((customPack) => (
                            !customPack.medIds.includes(this.state.medId) ? (
                                <button className='med-play single-med-add-remove' 
                                        onClick={this.handleSubmit}>
                                            Add to this pack
                                </button>
                            ) 
                            : (
                                <button className='med-play single-med-add-remove' 
                                        onClick={this.handleSubmit}>
                                            Remove from this pack
                                </button>
                            )
                        ))} */}
                        {this.state.selected === true &&
                            this.handleRender()
                        }
                    </ul>
                </div>
            </div>
        )}
        
}

export default CustomForm;