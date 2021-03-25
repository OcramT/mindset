import React from 'react';

class Pack extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPack(this.props.packId)
    }

    componentWillUnmount() {
        // this.props.clearPack(this.props.pack)
    }

    render() {
        if (!this.props.pack) return null
        if (!this.props.packId) return null
        const {pack} = this.props
        
        return (
            <>
                <div>{`PACK SHOW PAGE`}</div>
                <div>{`${pack.name}`}</div>
                <div>{`${pack.category}`}</div>
                {pack.medIds.map(medId => (
                    <div key={`med ${medId}`}>{`Meditation ${medId}`}</div>
                ))}
            </>
        ) 
    }

}

export default Pack;