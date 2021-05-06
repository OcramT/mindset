import React from 'react';
import {Link} from 'react-router-dom';
import NavBarContainer from '../nav/nav_bar_container';

class DiscoverPage extends React.Component {
    constructor(props) {
        super(props)

        this.genreRefs = [];
        this.packRefs = [];
    }

    componentDidMount() {
        this.props.fetchAllMedIds()
        this.props.fetchAllPacks()
    }
    
    filter(e) {
        let genreClass = e.target.classList[0]
        
        this.packRefs.forEach(pack => {
            if (pack === null) {
                this.packRefs.shift()
            }
        })
        this.genreRefs.forEach(genre => {
            if (genre === null) {
                this.genreRefs.shift()
            }
        })
        if (this.genreRefs.includes(null)) {
            this.genreRefs = this.genreRefs.slice(1, this.genreRefs.length)
        }
        if (this.packRefs.includes(null)) {
            this.packRefs = this.packRefs.slice(1, this.packRefs.length)
        }

        this.packRefs.forEach(pack => {
            if (genreClass === pack.classList[0]) {
                pack.className = `${pack.classList[0]} showme`
            } else {
                pack.className = `${pack.classList[0]} hideme`
            }
        })
    }

    all() {
        this.packRefs.forEach(pack => {
            let oldClass = pack.classList[0]
            pack.className = `${oldClass} showme`
        })
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
        this.genreRefs = [];
        this.packRefs = [];

        return (
            <>
                <NavBarContainer/>
                <div className='discover-wrapper'>
                    <h1 className='discover-header'></h1>
                    <div className='discover-content'>
                        <nav className='side-nav'>
                            <h2 onClick={() => this.all()}>Packs</h2>
                            <ul>
                                <li className='nav-genres all'
                                    onClick={() => this.all()}>All</li>
                                {genres.map((genre, i) => (
                                    <li className={`${genre} nav-genres`}
                                        key={`${genre}-${Math.random() * i}`}
                                        ref={ref => (this.genreRefs.push(ref))}
                                        onClick={(e) => this.filter(e)}>
                                        {`${genre}`}
                                    </li>
                                ))}
                            </ul>
                            <h2 onClick={() => this.all()}>Singles</h2>
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
                                    <div key={Math.random() * idx + 23}
                                        className={`${genreCategory} showme`}
                                        ref={ref => (this.packRefs.push(ref))}>
                                        <h4 className="pack-genre-header">
                                            {`${genreCategory}`}
                                        </h4>
                                        <ul className='discover-packs'>
                                            {packArr.map((pack, idx2) => (
                                                genreCategory === pack['category'] && (
                                                    <Link
                                                        className={`disc-pack-${pack.id}`}
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
                                    </div>
                                ))}
                                <h4 className='pack-genre-header'>Singles</h4>
                                <ul className='discover-singles'>
                                    {this.props.medIds.map(medId => (
                                        <Link
                                            className={`dash-link med-${medId}`}
                                            key={`meditation ${medId}`}
                                            to={`meditation/info/${medId}`}>

                                            <h5 className='disc-link-singles-info'>
                                                {`Single Meditation ${medId}`}</h5>
                                        </Link>
                                    ))}
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default DiscoverPage;