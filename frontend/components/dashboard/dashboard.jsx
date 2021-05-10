import React from 'react';
import {Link} from 'react-router-dom';
import NavBarContainer from '../nav/nav_bar_container';
import ModalContainer from '../modal/modal_container';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
         }
    }

    componentDidMount() {
        this.props.fetchAllUserPacks()
            .then(response => response)
            .then((userPacks) => this.setState({ userPacks: userPacks['allUserPacks'] }))
        this.props.fetchAllMedIds()
        this.props.fetchAllUserMeds()
            .then(response => response)
            .then((userMeds) => this.setState({ userMeds: userMeds['allUserMeds'] }))
    }

    openModal() {
        this.setState({ show: true })
    }

    render() {
        if (!this.props.medIds) return null;
        if (!this.props.packs) return null;
        if (!this.state.userPacks) return null;
        if (!this.state.userMeds) return null;
        // const packArr = Object.values(this.props.packs)
        const userPackArr = this.state.userPacks
        const userMedArr = this.state.userMeds.userMeds
        // console.log(Object.values(this.props.userPacks))
        // console.log(this.state.userPacks.map(pack => console.log(pack)))
        // console.log('THIS IS STATE', this.state)
        console.log(userPackArr)
       
        return (
            <>
                <div className='nav-main hidden'><NavBarContainer /></div>
                <div className='banner-wrapper'>
                    <div className='banner'>
                        <div className='session'>
                            <h2 className='session-info'>You're on Session 1 of Level 1</h2>
                            <h1 className='med-title'>Managing Anxiety</h1>
                            <div className='med-buttons'>
                                <Link to='/packs/4' className='med-play'>&#9654; BEGIN</Link>
                                <button className='med-dur'>20 MIN</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='lower-dash-wrapper'>
                    <div className='packs-wrapper'>
                        <h3 className='packs-header'>My Packs</h3>
                        {userPackArr.length !== 0 && (
                        <div className='packs-header-details'>
                            Themed meditations for specific topics. 
                            Each session builds on the one before it.</div>
                        )}
                        {userPackArr.length === 0 && (
                            <>
                                <p className='empty'>
                                    Looks like you don't have any packs
                                    added to your account yet!
                            </p>
                                <p className='empty'>
                                    Click the
                                <span className='disc-span'>
                                        &nbsp;Discover&nbsp;
                                </span>
                                button below to find a pack you like and
                                add it to your dashboard.
                            </p>
                            </>
                        )}
                        <ul className='med-packs'>
                            {userPackArr.map(pack => (
                                pack.custom === null && (
                                <Link
                                    className={`dash-link pack-${pack.id}`}
                                    key={`packs ${pack.id}`}
                                    to={`packs/${pack.id}`}>

                                    <h5 className='dash-link-info'>
                                        {`${pack.name}`}
                                        {/* <div className='pack-med-nums'>
                                            {`${pack.medIds.length}
                                        sessions`}
                                        </div> */}
                                    </h5>

                                </Link>)
                            ))}
                        </ul>
                        <Link 
                            to='/discover' 
                            className='packs-discover'>Discover More Packs
                        </Link>
                    </div>
                    <div className='divider'/>
                    <div className='meds-wrapper'>
                        <h4 className='packs-header'>My Singles</h4>
                        {userMedArr.length === 0 && (
                            <>
                            <p className='empty'>
                                Looks like you don't have any meditations 
                                added to your account yet!
                            </p> 
                            <p className='empty'>
                                Click the
                                <span className='disc-span'>
                                    &nbsp;Discover&nbsp;
                                </span>
                                button below to find a meditation you like and
                                add it to your dashboard.
                            </p>
                            </>
                        )}
                        {userMedArr.length !== 0 && (
                            <div className='packs-header-details'>
                                One-off sessions designed to add some
                                mindfulness to your day</div>
                        )}
                        <ul className='single-meds'>
                            {userMedArr.map(userMed => (
                                <Link 
                                className={`dash-link med-${userMed.id}`}
                                key={`meditation ${userMed.id}`} 
                                to={`meditation/info/${userMed.id}`}>

                                    <h5 className='dash-link-singles-info'>
                                        {`${userMed.title}`}</h5>
                                    <div className='single-med-dur'>
                                        {`${userMed.duration} minutes`}
                                    </div>
                                </Link>
                            ))}
                        </ul>
                        <Link 
                            to='/discover' 
                            className='singles-discover'>Discover More Singles
                        </Link>
                    </div>
                    <div className='divider' />
                    <div className='meds-wrapper'>
                        <h4 className='packs-header'>My Custom Packs</h4>
                        <div className='packs-header-details'>
                           Don't see a pack you connect with? Make your own!</div>
                        <ul className='single-meds custom-packs'>
                            {userPackArr.map(pack => (
                                pack.custom === true && (
                                    <Link
                                        className={`dash-link pack-${pack.id} custom-pack`}
                                        key={`customPacks ${pack.id}`}
                                        to={`packs/${pack.id}`}
                                        description={pack.description}>

                                        <h5 className='dash-link-info custom-pack-info'>
                                            {`${pack.name}`}
                                            {/* <div className='pack-med-nums'>
                                            {`${pack.medIds.length}
                                        sessions`}
                                        </div> */}
                                        </h5>

                                    </Link>)
                            ))}

                        </ul>
                        <div
                            onClick={() => this.openModal()}
                            className='singles-discover custom'>Make My Own Pack!
                        </div>
                    </div>
                    <div className='divider' />
                </div>
                    <ModalContainer 
                        show={this.state.show} 
                        closeModal={() => this.setState({ show: false })}/>
            </>
        )
    }

}

export default Dashboard;