import React from 'react';
import {Link} from 'react-router-dom';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='banner'>
                <div className='session'>
                    <h3 className='session-info'>You're on session 1 of Level 1</h3>
                    <h1 className='med-title'>Managing Anxiety</h1>
                    <div className='med-buttons'>
                        <button className='med-play'>&#9654; BEGIN</button>
                        <button className='med-dur'>20 MIN</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Dashboard;