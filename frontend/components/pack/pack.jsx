import React, { createRef } from 'react';
import NavBarContainer from '../nav/nav_bar_container';
import {Link} from 'react-router-dom';

class Pack extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userPacks: {},
            footerRef: createRef(),
            footerUp: false,
            meds: {},
            packMeds: {},
        }
        this.handleAddRemove = this.handleAddRemove.bind(this);
        this.handleAnimate = this.handleAnimate.bind(this);
        this.handleMedRemove = this.handleMedRemove.bind(this);
        this.setMeds = this.setMeds.bind(this);
        this.setPackMeds = this.setPackMeds.bind(this);
        this.handlePackDelete = this.handlePackDelete.bind(this);
    }

    componentDidMount() {
        this.props.fetchPack(this.props.packId)
        this.props.fetchAllUserPacks()
    }

    handleAddRemove(packId) {
        let userPacks = this.state.userPacks
        if (!userPacks[packId]) {
            this.props.addUserPack(packId)
                .then(this.setState(Object.assign(userPacks, { [`${packId}`]: parseInt(packId) })))
        } else if (userPacks[packId]) {
            let newPacks = delete userPacks[packId]
            this.props.removeUserPack(packId)
                .then(() => this.setState({ [userPacks]: newPacks }))
        }
    }

    goBack() {
        this.props.history.goBack();
    }

    handlePackDelete(packId) {
        let userPacks = this.state.userPacks
        this.props.deleteCustomPack(packId)
            .then(() => this.goBack())
    }

    handleMedRemove(medId) {
        let newMeds = this.props.pack.meds
        newMeds = newMeds.filter((med) => med.id !== medId)
        this.props.deleteCustomPackMeditation(medId, this.props.packId)
            .then(() => this.setState({ meds: newMeds }))
    }

    setMeds(oldMeds) {
        this.state.meds = oldMeds
    }

    setPackMeds(oldPackMeds) {
        this.state.packMeds = oldPackMeds
    }

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
        if (!this.props.pack) return null
        if (!this.props.packId) return null
        if (!this.props.userPacks) return null;
        if (!this.props.pack.meds) return null;
        const {pack, packId, userPacks} = this.props
        const {packMeds, meds} = this.props.pack
        userPacks.map(pack => this.state.userPacks[pack.id] = pack.id)
        this.setMeds(meds)
        this.setPackMeds(packMeds)
        
        return (
            <>
                <NavBarContainer />
                <div className='pack-main-content'>
                <div className='pack-show-wrapper'>
                    <div className='pack-banner-wrapper'>
                        <div className='pack-info-wrapper'>
                            <header className='pack-title'>{`${pack.name}`}</header>
                            <div className='session-total'>{`${pack.medIds.length}`} sessions</div>
                            {!pack.custom ? (
                                <h1 className='pack-info'>Alter your mindset with the {`${pack.name}`} pack.</h1>
                            ) : (
                                <h1 className='pack-info'>{`${pack.description}`}</h1>
                            )}
                                {(!this.state.userPacks[packId] && !pack.custom) &&
                                    // (<div className='add-remove' onClick={() => {this.props.addUserPack(packId); this.handleAddRemove(packId)}}>
                                    (<div className='add-remove' onClick={() => this.handleAddRemove(packId) }>
                                        <div className='close-wrapper'>
                                            <img className='close remove' src={close} />
                                        </div>
                                        <p className='remove-text'>add to my packs</p>
                                    </div>) 
                                }
                                {(this.state.userPacks[packId] && !pack.custom) &&
                                    // (<div className='add-add' onClick={() => {this.props.removeUserPack(packId); this.handleAddRemove(packId)}}>
                                    (<div className='add-add' onClick={() => this.handleAddRemove(packId)}>
                                        <div className='close-wrapper'>
                                            <img className='close add' src={close} />
                                        </div>
                                        <p className='remove-text'>remove from my packs</p>
                                    </div>) 
                                }
                                {(!this.state.userPacks[packId] && pack.custom) &&
                                    (<div className='add-remove' onClick={() => { this.props.addUserPack(packId); this.handleAddRemove(packId) }}>
                                        <div className='close-wrapper'>
                                            <img className='close remove' src={close} />
                                        </div>
                                        <p className='remove-text'>this pack shouldn't exist</p>
                                    </div>)
                                }
                                {(this.state.userPacks[packId] && pack.custom) &&
                                    (<div  
                                            className='add-add' 
                                            onClick={() => 
                                                this.handlePackDelete(packId)
                                                }>
                                        <div className='close-wrapper'>
                                            <img className='close add' src={close} />
                                        </div>
                                        <p className='remove-text'>DELETE this custom pack</p>
                                    </div>)
                                }
                        </div>
                        <div className='pack-image-wrapper'>
                            <img className='pack-image' src={anxietyPack} />
                        </div>
                    </div>
                    {pack.custom === true && (<div className='lower-custom-wrapper'></div>)}
                    { !pack.custom && (
                        <div className='techniques-wrapper'>
                            <h2 className='tech-header'>Techniques</h2>
                            <div className='tech-images-wrapper'>
                                <div className='techs tech-1'>
                                    <img className='tech-image' src={techniquesBodyScan} />
                                    <p className='tech-title'>Body Scan</p>
                                </div>
                                
                                <div className='techs tech-2'>
                                    <img className='tech-image' src={techniquesNoting} />
                                    <p className='tech-title'>Noting</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                </div>

                <footer className='med-bar-closed' ref={this.state.footerRef}>
                    <div className='pop-up-wrapper'>
                        <div className='pop-up-header'>
                            <div className='med-buttons'>
                                <Link to='/meditation/1' className='med-play begin'>&#9654; BEGIN</Link>
                                <button className='med-dur duration'>20 MIN</button>
                                    <h2 className='med-list-title'>Day 1 of {`${pack.medIds.length}`} in {`${pack.name}`} </h2>
                            </div>
                            <div className='footer-close-wrapper' onClick={(e) => this.handleAnimate(e)}>
                                {!this.state.footerUp ? (
                                    <img className='footer-open-close' src={footerOpen} />
                                ) : (
                                    <img className='footer-open-close' src={footerClose} />
                                )}
                            </div>
                        </div>
                        <div className='med-divider'></div>
                        <div className='med-list-wrapper'>
                            {(pack.meds.length === 0) ? (
                                <Link to='/discover' className='med-play no-meds'>Add to this pack</Link>
                            )
                            : (
                            <ul className='med-list'>
                                {pack.meds.map((med, idx) => (
                                    <div className='med-list-item'
                                         key={`med-item ${med.id}`} >
                                        <Link
                                        className='single-med-link'
                                        to={`meditation/${med.id}`}>
                                            <div className='link-wrap'>
                                                <div className='inner-link-wrap'>
                                                    <div className='med-icon-wrapper'>
                                                    <li className='med-text'
                                                        key={`med ${med.id}`}>
                                                            {`Session ${idx + 1}`}
                                                    </li>
                                                    </div>
                                                </div>
                                                <div className='med-name'>{`${med.title} `}</div>
                                            </div>
                                                <div className='med-time'>{`${med.duration} mins`}</div>
                                        </Link>
                                        {pack.custom === true && (
                                            <div className='close-wrapper med-remove'
                                                 onClick={() => this.handleMedRemove(med.id)}>
                                                <img className='close remove' src={close} />
                                            </div>
                                        )}
                                    </div>
                                    ))}
                            </ul>
                            )}
                        </div>
                    </div>
                </footer>
                
            </>
        ) 
    }

}

export default Pack;