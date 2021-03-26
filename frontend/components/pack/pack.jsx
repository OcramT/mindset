import React from 'react';
import NavBarContainer from '../nav/nav_bar_container';
import {Link} from 'react-router-dom';

class Pack extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPack(this.props.packId)
    }

    render() {
        if (!this.props.pack) return null
        if (!this.props.packId) return null
        const {pack} = this.props
        
        return (
            <>
                <NavBarContainer />
                <div className='pack-main-content'>
                <div className='pack-show-wrapper'>
                    <div className='pack-banner-wrapper'>
                        <div className='pack-info-wrapper'>
                            <header className='pack-title'>{`${pack.name}`}</header>
                            <div className='session-total'>{`${pack.medIds.length}`} sessions</div>
                            <h1 className='pack-info'>Cultivate a new perspective on fear and anxiety.</h1>
                            <div className='add-remove'>
                                <div to='/dashboard ' className='close-wrapper'>
                                    <img className='close remove' src={close} />
                                </div>
                                <p className='remove-text'>remove from my packs</p>
                            </div>
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
                                <h2 className='med-list-title'>Day 3 of Managing Anxiety</h2>
                            </div>
                            <div to='/dashboard ' className='close-wrapper'>
                                <img className='close remove' src={close} />
                            </div>
                        </div>
                        <div className='med-divider'></div>
                        <div className='med-list-wrapper'>
                            <ul className='med-list'>
                                {pack.medIds.map((medId, idx) => (
                                    <a
                                    // to={`/meditation/${medId}`}
                                    href={`https://mind-set.herokuapp.com/#/meditation/${medId}`}
                                    className='med-list-item' 
                                    key={`med-item ${medId}`}>
                                        <div className='link-wrap'>
                                        <img className='med-icon' src={medListButton} />
                                        <li className='med-text'
                                            key={`med ${medId}`}>{`Session ${idx+1}`}
                                        </li>
                                        </div>
                                    </a>
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