import React from 'react'
import { connect } from 'react-redux'

function BuildingsCounter() {
    return (
        <div>
            <h2>Buildings count- {props.numOfBuildings}</h2>
            <button onclick={props.buyBuildings}>Add buildings</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfBuildings: state.buildings.numOfBuildings
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyBuildings: () => dispatch(buyBuildings())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (BuildingsCounter)
