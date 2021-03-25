import React from 'react';

class Pack extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPack(this.props.packId)
        this.props.currentPack
    }

    // componentWillUnmount() {
    //     this.props.
    // }

    render() {
        if (!this.props.currentPack) return null
        if (!this.props.packId) return null

        const {currentPack} = this.props
        console.log(currentPack)
        
        return (
            <>
                <div>{`PACK SHOW PAGE`}</div>
                <div>{`${currentPack.name}`}</div>
                <div>{`${currentPack.category}`}</div>
                {currentPack.medIds.map(medId => (
                    <div key={`med ${medId}`}>{`Meditation ${medId}`}</div>
                ))}
            </>
        ) 
    }

}

export default Pack;