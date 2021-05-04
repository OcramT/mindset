import React from 'react';
import NavBarContainer from '../nav/nav_bar_container';
import {Link} from 'react-router-dom';

class Pack extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // addRemove: "",
            userPacks: {}
        }
        this.handleAddRemove = this.handleAddRemove.bind(this)
    }

    componentDidMount() {
        this.props.fetchPack(this.props.packId)
        // this.props.fetchAllUserPacks()
        //     .then(response => response)
        //     .then((userPackIds) => this.setState({ userPackIds: userPackIds['allUserPacks'].map(pack => pack.id) }))
        this.props.fetchAllUserPacks()
            .then(response => response)
            .then((userPackIds) => this.setState(
                {userPackIds: userPackIds['allUserPacks'].map(
                    pack => this.state.userPacks[pack.id] = pack.id)}
            ))
    }

    handleAddRemove(packId) {
        let userPacks = this.state.userPacks

        if (!userPacks[packId]) {
            // this.setState({ addRemove: 'added' })
            this.setState(Object.assign(userPacks, {[`${packId}`]: parseInt(packId)}))
        } else if (userPacks[packId]) {
            // this.setState({ addRemove: 'removed' })
            this.setState({ [userPacks] : delete userPacks[packId] })
        }
    }

    render() {
        if (!this.props.pack) return null
        if (!this.props.packId) return null
        // if (!this.state.userPackIds) return null;
        if (!this.state.userPacks) return null;
        const {pack, packId} = this.props
        let userPackIds = this.state.userPackIds
        let userPacks = this.state.userPacks
        // console.log(packId)
        console.log(this.state)
        // console.log(userPacks)
        // console.log(parseInt(packId))
        // console.log(parseInt(packId) in userPacks)
        // console.log(this.state.testme.keys)
        
        return (
            <>
                <NavBarContainer />
                <div className='pack-main-content'>
                <div className='pack-show-wrapper'>
                    <div className='pack-banner-wrapper'>
                        <div className='pack-info-wrapper'>
                            <header className='pack-title'>{`${pack.name}`}</header>
                            <div className='session-total'>{`${pack.medIds.length}`} sessions</div>
                                <h1 className='pack-info'>Alter your mindset with the {`${pack.name}`} pack.</h1>
                                {/* {!userPackIds.includes(parseInt(packId)) && */}
                                {!userPacks[packId] &&
                                    (<div className='add-remove' onClick={() => {this.props.addUserPack(packId); this.handleAddRemove(packId)}}>
                                        <div className='close-wrapper'>
                                            <img className='close remove' src={close} />
                                        </div>
                                        <p className='remove-text'>add to my packs</p>
                                    </div>) }
                                {/* {userPackIds.includes(parseInt(packId)) && */}
                                {userPacks[packId] &&
                                    (<div className='add-add' onClick={() => {this.props.removeUserPack(packId); this.handleAddRemove(packId)}}>
                                        <div className='close-wrapper'>
                                            <img className='close add' src={close} />
                                        </div>
                                        <p className='remove-text'>remove from my packs</p>
                                    </div>) }
                        </div>
                        <div className='pack-image-wrapper'>
                            <img className='pack-image' src={anxietyPack} />
                        </div>
                    </div>

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
                </div>

                <footer className='med-bar'>
                    <div className='pop-up-wrapper'>
                        <div className='pop-up-header'>
                            <div className='med-buttons'>
                                <Link to='/meditation/1' className='med-play begin'>&#9654; BEGIN</Link>
                                <button className='med-dur duration'>20 MIN</button>
                                    <h2 className='med-list-title'>Day {`${pack.medIds.length}`} of {`${pack.name}`} </h2>
                            </div>
                            <div to='/dashboard ' className='close-wrapper'>
                                <img className='close remove' src={close} />
                            </div>
                        </div>
                        <div className='med-divider'></div>
                        <div className='med-list-wrapper'>
                            <ul className='med-list'>
                                {pack.medIds.map(medId => (
                                    <Link
                                    to={`meditation/${medId}`}
                                    className='med-list-item' 
                                    key={`med-item ${medId}`}>
                                        <div className='link-wrap'>
                                        <img className='med-icon' src={medListButton} />
                                        <li className='med-text'
                                            key={`med ${medId}`}>{`Session ${medId}`}
                                        </li>
                                        </div>
                                    </Link>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </footer>
                </div>
            </>
        ) 
    }

}

export default Pack;