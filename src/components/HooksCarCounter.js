import React from 'react'
import { useSelector } from 'react-redux'
import { addCar } from '../redux'

function HooksCarCounter() {
    const numOfCars = useSelector(state => state.car.numOfCars)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Num of cars -{numOfCars}</h1>
            <button onClick={() => dispatch(addCar())}>Add cars</button>
        </div>
    )
}

export default HooksCarCounter
