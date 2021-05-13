import React, { createRef } from 'react';
import NavBarContainer from '../nav/nav_bar_container';
import { Link } from 'react-router-dom';
import CustomFormContainer from '../custom_form/custom_form_container';

class MeditationShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            footerRef: createRef(),
            footerUp: false,
            userMeds: {},
            customPacks: {},
            packs: this.props.packs
        }
    }

    componentDidMount() {
        this.props.fetchMeditation(this.props.currentMedId)
        this.props.fetchAllUserMeds()
            .then(response => response)
            .then((allUserMeds) => this.setState(
                {
                    userMedArr: allUserMeds.allUserMeds.userMeds.map(
                        med => this.state.userMeds[med.id] = med.id)
                }
            ))
        const flag = 'custom'
        // this.props.fetchCustomPacks(flag)
        //     .then(response => response)
        //     .then((allCustomPacks) => this.setState(
        //         {
        //             customPacks: allCustomPacks.packs
        //         }
        //     ))
        this.props.fetchAllUserPacks()
            // .then(response => response)
            // .then((allCustomPacks) => this.setState(
            //     {
            //         customPacks: allCustomPacks.packs
            //     }
            // ))
        this.setState({packs: this.props.packs})
    }

    handleAddRemove(medId) {
        let userMeds = this.state.userMeds

        if (!userMeds[medId]) {
            this.setState(Object.assign(userMeds, { [`${medId}`]: parseInt(medId) }))
        } else if (userMeds[medId]) {
            this.setState({ [userMeds]: delete userMeds[medId] })
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
        if (!this.props.currentMedId) return null
        if (!this.props.userPacks) return null
        const { currentMed, currentMedId, userPacks } = this.props;
        let userMeds = this.state.userMeds;
        // console.log(userPacks)
        let customPacks = Object.values(userPacks).filter(pack => pack.custom)
        // customPacks = Object.assign({...customPacks})
        // console.log(customPacks)
        console.log('MED PROPS', this.props)
        console.log('MED STATE', this.state)

        return (
            
            <>
                <NavBarContainer />
                <div className='single-main-content'>
                    <div className='single-show-wrapper'>
                        <div className='single-banner-wrapper'>
                            <div className='single-info-wrapper'>
                                <header className='single-title'>{`${currentMed.title}`}</header>
                                <h1 className='single-info'>Short on time? You can still alter your
                                mindset with the {`${currentMed.title}`} single!</h1>
                                {!userMeds[currentMedId] && (
                                    <div className='single-add-remove' onClick={() => { this.props.addUserMed(currentMedId); this.handleAddRemove(currentMedId) }}>
                                        <div className='close-wrapper'>
                                            <img className='close remove' src={close} />
                                        </div>
                                        <p className='single-remove-text'>add to my singles!</p>
                                    </div>)
                                }
                                {userMeds[currentMedId]  &&
                                    (<div className='single-add-add' onClick={() => { this.props.removeUserMed(currentMedId); this.handleAddRemove(currentMedId) }}>
                                        <div className='close-wrapper'>
                                            <img className='close add' src={close} />
                                        </div>
                                        <p className='remove-text'>remove from my singles</p>
                                    </div>)
                                }
                            </div>
                            <div className='single-image-wrapper'>
                                <img className='single-image' src={singleLogo5} />
                            </div>
                        </div>

                        <div className='single-techniques-wrapper'></div>
                    </div>
                </div>

                <footer className='single-med-bar-closed' ref={this.state.footerRef}>
                    <div className='single-pop-up-wrapper'>
                        <div className='single-pop-up-header'>
                            <div className='med-buttons'>
                                <Link to={`/meditation/${currentMedId}`} className='med-play begin'>&#9654; BEGIN</Link>
                                <button className='med-dur duration'>{`${currentMed.duration}`} MIN</button>
                                <h2 className='med-list-title'>{`${currentMed.title}`} </h2>
                            </div>
                            <div to='/dashboard ' className='single-footer-close-wrapper' onClick={(e) => this.handleAnimate(e)}>
                                {!this.state.footerUp ? (
                                    <button className='med-dur duration'>Custom Packs</button>
                                ) : (
                                    <button className='med-dur duration'>Close </button>
                                )}
                            </div>
                        </div>
                        <div className='single-med-divider'></div>
                        <CustomFormContainer 
                            packs={this.props.packs}
                            currentMed={this.props.currentMed}
                            userMeds={this.state.userMeds}
                            customPacks={customPacks}
                            currentUser={this.props.currentUser}/>
                    </div>
                </footer>

            </>
        )
    }

}

export default MeditationShow;