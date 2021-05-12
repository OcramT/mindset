import React, { createRef } from 'react';
import {Link} from 'react-router-dom';
import NavBarContainer from '../nav/nav_bar_container';

class DiscoverPage extends React.Component {
    constructor(props) {
        super(props)

        this.allSinglesRef = React.createRef();
        this.allPacksRef = React.createRef();
        this.removeNull = this.removeNull.bind(this);
        this.genreRefs = [];
        this.packRefs = [];
    }

    removeNull() {
        this.genreRefs.filter(x => x !== null)
        this.packRefs.filter(y => y !== null)
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
    };

    componentDidMount() {
        this.props.clearAllPacks()
        const flag = 'all'
        this.props.fetchAllPacks()
        this.props.fetchAllMedIds()
        this.props.fetchAllMeditations(flag)
        this.removeNull()
    }
    
    filter(e) {
        this.removeNull()
        let genreClass = e.target.classList[0]
        let oldSingles = this.allSinglesRef.current
        let oldPacks = this.allPacksRef.current
        if (oldPacks.classList[1] === 'hideme') {
            oldPacks.className = `${oldPacks.classList[0]} showme`
        }
        oldSingles.className = `${oldSingles.classList[0]} hideme`

        this.packRefs.forEach(pack => {
            if (genreClass === pack.classList[0]) {
                pack.className = `${pack.classList[0]} showme`
            } else {
                pack.className = `${pack.classList[0]} hideme`
            }
        })
    }

    all() {
        let oldSingles = this.allSinglesRef.current
        let oldPacks = this.allPacksRef.current
        this.removeNull()
  
        if (oldSingles.classList[1] === 'hideme' || oldPacks.classList[1] === 'hideme') {
            oldSingles.className = `${oldSingles.classList[0]} showme`
            oldPacks.className = `${oldPacks.classList[0]} showme`
        }

        this.packRefs.forEach(pack => {
            pack.className = `${pack.classList[0]} showme`
        })
    }

    allPacks() {
        let oldSingles = this.allSinglesRef.current
        let oldPacks = this.allPacksRef.current
        this.removeNull()

        oldSingles.className = `${oldSingles.classList[0]} hideme`
        oldPacks.className = `${oldPacks.classList[0]} showme`
        this.packRefs.forEach(pack => {
            let oldClass = pack.classList[0]
            pack.className = `${oldClass} showme`
        })
    }

    allSingles() {
        let oldSingles = this.allSinglesRef.current
        let oldPacks = this.allPacksRef.current
        this.removeNull()

        oldSingles.className = `${oldSingles.classList[0]} showme`
        oldPacks.className = `${oldPacks.classList[0]} hideme`
    }

    render() {
        if (!this.props.medIds) return null;
        if (!this.props.packs) return null;
        if (!this.props.allMeditations) return null;
        const {allMeditations} = this.props
        const packArr = Object.values(this.props.packs)
        const genres = []
        packArr.map(pack => {
            if (pack['custom'] !== true && !genres.includes(pack['category'])) {
                genres.push(pack['category'])
            }
        })
        this.genreRefs = [];
        this.packRefs = [];
        this.removeNull()
       
        return (
            <>
                <NavBarContainer/>
                <div className='discover-wrapper'>
                    <h1 className='discover-header'></h1>
                    <div className='discover-content'>
                        <nav className='side-nav'>
                            <h2 onClick={this.removeNull(), () => { this.all()}}>All</h2>
                            <br />
                            <h2 onClick={() => {this.removeNull(); this.allPacks()}}>Packs</h2>
                            <ul className='list'>
                                {genres.map((genre, i) => (
                                    <div className='list'
                                        key={`${genre}-${Math.random() * i}`}>
                                        <li className={`${genre} nav-genres`}
                                            // key={`${genre}-${Math.random() * i}`}
                                            ref={ref => (this.genreRefs.push(ref))}
                                            onClick={(e) => { this.removeNull();this.filter(e)}}>
                                            {`${genre}`}
                                        </li>
                                    </div>
                                ))}
                            </ul>
                            <h2 onClick={() => { this.removeNull();this.allSingles()}}>Singles</h2>
                        </nav>
                        <div className='main-search'>
                            <div className='discover-featured'>
                                <h3 className='featured'>
                                    <div>Featured</div>
                                    <div>Sleep</div>
                                </h3>
                            </div>
                            <div className='disc-packs-wrapper showme'
                                    ref={this.allPacksRef}>
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
                                                            <h5 className='discover-link-info'
                                                                key={Math.random() * idx2}>
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
                            <div className='singles-wrapper showme' 
                                ref={this.allSinglesRef}>
                                <h4 className='pack-genre-header'>Singles</h4>
                                <ul className='discover-singles'>
                                    {allMeditations.map((meditation, medIdx) => (
                                        <Link
                                            className={`dash-link med-${meditation.id}`}
                                            key={`meditation ${meditation.id}`}
                                            to={`meditation/info/${meditation.id}`}>

                                            <div className='disc-link-singles-info'>
                                                <h5>{`${meditation.title}`}</h5>
                                                <div className='disc-singles-duration'>
                                                    {`${meditation.duration} minutes`}
                                                </div>
                                            </div>
                                        </Link>
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

export default DiscoverPage;