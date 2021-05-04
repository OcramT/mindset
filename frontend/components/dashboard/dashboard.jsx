import React from 'react';
import {Link} from 'react-router-dom';
import NavBarContainer from '../nav/nav_bar_container';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    componentDidMount() {
        this.props.fetchAllUserPacks()
            .then(response => response)
            .then((userPacks) => this.setState({ userPacks: userPacks['allUserPacks'] }))
        // this.setState({ userPacks: this.props.fetchAllUserPacks().then(allPacks => (console.log(allPacks))
        this.props.fetchAllMedIds()
        this.props.fetchAllPacks()
    }

    render() {
        if (!this.props.medIds) return null;
        if (!this.props.packs) return null;
        if (!this.state.userPacks) return null;
        const packArr = Object.values(this.props.packs)
        const userPackArr = this.state.userPacks
        // console.log(Object.values(this.props.userPacks))
        // console.log(this.state.userPacks.map(pack => console.log(pack)))
       
        return (
            <>
                <div className='nav-main hidden'><NavBarContainer /></div>
                <div className='banner-wrapper'>
                    <div className='banner'>
                        <div className='session'>
                            <h2 className='session-info'>You're on session 1 of Level 1</h2>
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
                        <h3 className='packs-header'>My packs</h3>
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
                            to='/dashboard' 
                            className='packs-discover'>Discover More Packs
                        </Link>
                    </div>
                    <div className='divider'/>
                    <div className='meds-wrapper'>
                        <h4 className='packs-header'>Singles</h4>
                        <div className='packs-header-details'>
                            One-off sessions designed to add some 
                            mindfulness to your day</div>
                        <ul className='single-meds'>
                            {this.props.medIds.map(medId => (
                                <Link 
                                className={`dash-link med-${medId}`}
                                key={`meditation ${medId}`} 
                                to={`meditation/${medId}`}>

                                    <h5 className='dash-link-singles-info'>
                                        {`Single Meditation ${medId}`}</h5>

                                </Link>
                            ))}
                        </ul>
                        <Link 
                            to='/dashboard' 
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