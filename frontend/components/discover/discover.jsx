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
        if (this.packRefs.includes(null)) {
            this.packRefs = this.packRefs.slice(1, this.packRefs.length)
        }
        console.log(this.packRefs)
        this.packRefs.forEach(pack => {
            let packClass = pack.classList[0]
            if (genreClass === packClass) {
                pack.className = `${packClass} showme`
            } else {
                pack.className = `${packClass} hideme`
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
                            <h2>Packs</h2>
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
                                        <h4 className={`pack-genre-header`}>
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
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default DiscoverPage;