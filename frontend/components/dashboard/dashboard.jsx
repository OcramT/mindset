import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../nav/nav_bar';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className='nav-main hidden'><NavBar /></div>
                <div className='banner'>
                    <div className='session'>
                        <h3 className='session-info'>You're on session 1 of Level 1</h3>
                        <h1 className='med-title'>Managing Anxiety</h1>
                        <div className='med-buttons'>
                            <Link to='/meditation' className='med-play'>&#9654; BEGIN</Link>
                            <button className='med-dur'>20 MIN</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Dashboard;