import { ADD_CAR } from './carTypes'

const initialState = {
    numOfCars: 10
}

const carReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CAR: return {
            ...state,
            numOfCars: state.numOfCars + 1
        }
        default: return state
    }
}

export default carReducer