import React from 'react';
import {Link} from 'react-router-dom';
import NavBarContainer from '../nav/nav_bar_container';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllMedIds()
        this
    }

    render() {
        if (!this.props.medIds) return null;
        return (
            <>
                <div className='nav-main hidden'><NavBarContainer /></div>
                <div className='banner-wrapper'>
                    <div className='banner'>
                        <div className='session'>
                            <h3 className='session-info'>You're on session 1 of Level 1</h3>
                            <h1 className='med-title'>Managing Anxiety</h1>
                            <div className='med-buttons'>
                                <Link to='/meditation/' className='med-play'>&#9654; BEGIN</Link>
                                <button className='med-dur'>20 MIN</button>
                                <ul className='dash-meds'>
                                    {this.props.medIds.map(medId => (
                                        <Link 
                                            className='dash-med'
                                            key={`meditation ${medId}`} 
                                            to={`meditation/${medId}`} 
                                        >{`meditation ${medId}`}</Link>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Dashboard;