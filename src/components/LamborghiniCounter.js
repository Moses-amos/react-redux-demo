import React from 'react'
import { connect } from 'react-redux'
import { addCar } from '../redux'

function LamborghiniCounter() {
    return (
        <div>
            <h2>Lamborghini count- {props.numOfCars}</h2>
            <button onclick={props.addCar}>Add cars</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCars: state.car.numOfCars
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCar: () => dispatch(addCar())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (LamborghiniCounter)
