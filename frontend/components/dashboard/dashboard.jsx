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
                <path d="M418.11,209.64c4.75,66.19-26,103.74-44.53,130-28.84,30.4-65.37,71.85-158.18,74.17C136.68,416.92,98,382.3,65.52,352.23,23.18,305.69,12.12,278.15,10,209.64c-.2-42,16-83.92,44.31-120.8C94,32.79,157.11,14,215.4,10.13c61.16-2.37,109.8,28.47,143,61.7,42.5,44.81,55.55,83.29,59.68,137.81"></path>
            </div>
        )
    }

}

export default Dashboard;