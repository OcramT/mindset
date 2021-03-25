import React from 'react';
import {Link} from 'react-router-dom';
import NavBarContainer from '../nav/nav_bar_container';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllMedIds()
        this.props.fetchAllPacks()
    }

    render() {
        if (!this.props.medIds) return null;
        if (!this.props.packs) return null;
        console.log(this.props)
        console.log(this.props.packs.id)
        const packIds = []
        for (const key in this.props.packs) {
            packIds.push(Object.values(this.props.packs[key])[0])
        }
        console.log(packIds)
        return (
            <>
                <div className='nav-main hidden'><NavBarContainer /></div>
                <div className='banner-wrapper'>
                    <div className='banner'>
                        <div className='session'>
                            <h2 className='session-info'>You're on session 1 of Level 1</h2>
                            <h1 className='med-title'>Managing Anxiety</h1>
                            <div className='med-buttons'>
                                <Link to='/dashboard' className='med-play'>&#9654; BEGIN</Link>
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
                            {packIds.map(packId => (
                                <Link
                                    className={`dash-link pack-${packId}`}
                                    key={`packs ${packId}`}
                                    to={`packs/${packId}`}>
                                    <h5 className='dash-link-info'>
                                        {`Meditation Pack ${packId}`}</h5>
                                </Link>
                            ))}
                        </ul>
                        <Link 
                            to='/dashboard' 
                            className='packs-discover'>Discover More Packs</Link>
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
                            className='singles-discover'>Discover More Singles</Link>
                    </div>
                    <div className='divider' />
                </div>
            </>
        )
    }

}

export default Dashboard;