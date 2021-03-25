import React from 'react';

class Pack extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPack(this.props.packId)
        
    }

    render() {
        if (!this.props.currentPack) return null
        const {currentPack} = this.props
        console.log(currentPack.medIds)
        
        return (
            <>
                <div>{`PACK SHOW PAGE`}</div>
                <div>{`${currentPack.name}`}</div>
                <div>{`${currentPack.category}`}</div>
                {currentPack.medIds.map(medId => (
                    <div>{`Meditation ${medId}`}</div>
                ))}
            </>
        ) 
    }

}

export default Pack;