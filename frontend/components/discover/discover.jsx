import React from 'react';
import {Link} from 'react-router-dom';
import NavBarContainer from '../nav/nav_bar_container';

class DiscoverPage extends React.Component {
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
        const packArr = Object.values(this.props.packs)
        const genres = []
        packArr.map(pack => {
            if (!genres.includes(pack['category'])) {
                genres.push(pack['category'])
            }
        })

        return (
            <>
                <NavBarContainer/>
                <div className='discover-wrapper'>
                    <h1 className='discover-header'></h1>
                    <div className='discover-content'>
                        <nav className='side-nav'>
                            <h2>Packs</h2>
                            <ul>
                                {genres.map((genre, i) => (
                                    <li className='nav-genres'
                                    key={`${genre}-${i}`}>{`${genre}`}</li>
                                ))}
                            </ul>
                        </nav>
                        <div className='main-search'>
                            <div className='discover-featured'>
                                <h3 className='featured'>
                                    <div>Featured</div>
                                    <div>Sleep</div>
                                </h3>
                            </div>
                            <ul className='discover-categories'>
                                {genres.map((genreCategory, idx) => (
                                    <>
                                    <h4 
                                    key={`category-${idx}`}
                                    className='pack-genre-header'>
                                        {`${genreCategory}`}
                                    </h4>
                                    <ul className='discover-packs'>
                                        {packArr.map(pack => (
                                            genreCategory === pack['category'] && (
                                                <Link
                                                    className={`pack-${pack.id}`}
                                                    key={`packs ${pack.id}`}
                                                    to={`packs/${pack.id}`}>

                                                    <h5 className='discover-link-info'>
                                                        {`${pack.name}`}
                                                        <div className='pack-med-nums'>
                                                            {`${pack.medIds.length}
                                                        sessions`}
                                                        </div>
                                                    </h5>
                                                </Link>
                                            )))}
                                    </ul>
                                    </>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default DiscoverPage;