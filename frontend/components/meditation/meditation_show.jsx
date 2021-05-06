import React, { createRef } from 'react';
import NavBarContainer from '../nav/nav_bar_container';
import { Link } from 'react-router-dom';

class MeditationShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            footerRef: createRef(),
            footerUp: false,
        }
        // this.handleAddRemove = this.handleAddRemove.bind(this);
        // this.handleAnimate = this.handleAnimate.bind(this);
        // this.handleMeds = this.handleMeds.bind(this);
    }

    componentDidMount() {
        this.props.fetchMeditation(this.props.currentMedId)
        // this.props.fetchAllUserPacks()
        //     .then(response => response)
        //     .then((userPackIds) => this.setState(
        //         {
        //             userPackIds: userPackIds['allUserPacks'].map(
        //                 pack => this.state.userPacks[pack.id] = pack.id)
        //         }
        //     ))
    }

    // handleAddRemove(packId) {
    //     let userPacks = this.state.userPacks

    //     if (!userPacks[packId]) {
    //         this.setState(Object.assign(userPacks, { [`${packId}`]: parseInt(packId) }))
    //     } else if (userPacks[packId]) {
    //         this.setState({ [userPacks]: delete userPacks[packId] })
    //     }
    // }

    // handleMeds() {
    //     let medIds = this.props.pack.medIds
    //     if (!this.state.footerUp && this.state.meds.length < medIds.length) {
    //         medIds.map(medId => (
    //             this.props.fetchMeditation(medId)
    //                 .then(response => this.state.meds.push(response.meditation))
    //         ))
    //     }
    // }

    handleAnimate(e) {
        if (this.state.footerRef.current.className === 'med-bar-closed') {
            this.state.footerRef.current.className = 'med-bar-open'
            this.setState({ ['footerUp']: true })
        } else {
            this.state.footerRef.current.className = 'med-bar-closed'
            this.setState({ ['footerUp']: false })
        }
    }

    render() {
        // if (!this.props.pack) return null
        // if (!this.props.packId) return null
        // if (!this.state.userPacks) return null;
        // const { pack, packId } = this.props
        // let userPacks = this.state.userPacks

        // if (this.state.meds.length === 0) {
        //     this.props.pack.medIds.map(medId => (
        //         this.props.fetchMeditation(medId)
        //             .then(response => this.state.meds.push(response.meditation))
        //     ))
        // }
        if (!this.props.currentMed) return null
        const { currentMed, currentMedId } = this.props;
        console.log('this is state', this.state)
        console.log('this is props', this.props)



        return (
            
            <>
                <NavBarContainer />
                <div className='single-main-content'>
                    <div className='single-show-wrapper'>
                        <div className='single-banner-wrapper'>
                            <div className='single-info-wrapper'>
                                <header className='single-title'>{`${currentMed.title}`}</header>
                                {/* <div className='session-total'>{`${currentMed.medIds.length}`} sessions</div> */}
                                <h1 className='single-info'>Short on time? You can still alter your
                                mindset with the {`${currentMed.title}`} single!</h1>
                                {/* {
                                !userPacks[packId] && () */}
                                    <div className='single-add-remove' onClick={() => { this.props.addUserPack(packId); this.handleAddRemove(packId) }}>
                                        <div className='close-wrapper'>
                                            <img className='close remove' src={close} />
                                        </div>
                                        <p className='single-remove-text'>add to my custom pack!</p>
                                    </div>
                                {/* } */}
                                {/* {userPacks[packId] &&
                                    (<div className='single-add-add' onClick={() => { this.props.removeUserPack(packId); this.handleAddRemove(packId) }}>
                                        <div className='close-wrapper'>
                                            <img className='close add' src={close} />
                                        </div>
                                        <p className='remove-text'>remove from my packs</p>
                                    </div>) */}
                                {/* } */}
                            </div>
                            <div className='single-image-wrapper'>
                                <img className='single-image' src={singleLogo5} />
                            </div>
                        </div>

                        <div className='single-techniques-wrapper'>
                            {/* <h2 className='tech-header'>Techniques</h2>
                            <div className='tech-images-wrapper'>
                                <div className='techs tech-1'>
                                    <img className='tech-image' src={techniquesBodyScan} />
                                    <p className='tech-title'>Body Scan</p>
                                </div>

                                <div className='techs tech-2'>
                                    <img className='tech-image' src={techniquesNoting} />
                                    <p className='tech-title'>Noting</p>
                                </div>
                            </div> */}
                        </div>
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
                                    <img className='single-footer-open-close' src={footerOpen} />
                                ) : (
                                    <img className='single-footer-open-close' src={footerClose} />
                                )}
                            </div>
                        </div>
                        <div className='single-med-divider'></div>
                        {/* <div className='med-list-wrapper'>
                            <ul className='med-list'>
                                {pack.medIds.map((medId, idx) => (
                                    <Link
                                        to={`meditation/${medId}`}
                                        className='med-list-item'
                                        key={`med-item ${medId}`}>
                                        <div className='link-wrap'>
                                            <img className='med-icon' src={medListButton} />
                                            <li className='med-text'
                                                key={`med ${medId}`}>{`Session ${idx + 1}`}
                                            </li>
                                        </div>
                                    </Link>
                                ))}
                            </ul>
                        </div> */}
                    </div>
                </footer>

            </>
        )
    }

}

export default MeditationShow;