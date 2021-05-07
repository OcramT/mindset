import React from 'react';
import {Link} from 'react-router-dom';
import NavBarContainer from '../nav/nav_bar_container';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { }
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
        console.log(this.state)
        console.log(userMedArr)
       
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
                        <div className='packs-header-details'>
                            Themed meditations for specific topics. 
                            Each session builds on the one before it.</div>
                        <ul className='med-packs'>
                            {userPackArr.map(pack => (
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

                                </Link>
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
                        <div className='packs-header-details'>
                            One-off sessions designed to add some 
                            mindfulness to your day</div>
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
                </div>
            </>
        )
    }

}

export default Dashboard;