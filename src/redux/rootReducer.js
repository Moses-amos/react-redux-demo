import { combineReducers } from 'redux'
import carReducer from './car/carReducer'
import buildingReducer from './buildings/buildingReducer'

const rootReducer = combineReducers({
    car: carReducer,
    building: buildingReducer
})

export default rootReducer