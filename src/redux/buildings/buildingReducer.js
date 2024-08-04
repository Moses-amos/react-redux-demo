import { BUY_BUILDING } from './buildingTypes'

const initialState = {
    numOfBuiildings: 10
}

const buildingReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_BUILDING: return {
            ...state,
            numOfBuildings: state.numOfBuildings + 1
        }
        default: return state
    }
}

export default buildingReducer