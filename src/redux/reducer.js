import { combineReducers } from 'redux'
import {
    GET_STUDENTS, UPDATE_STUDENTS
} from './actionTypes'


const defaultState = {
    students: []
}

function studentsReducer(currentState = defaultState.students, action) {
    switch (action.type) {
        case GET_STUDENTS:
            return action.payload
        case UPDATE_STUDENTS:
            return action.payload
        default:
            return currentState
    }
}

const rootReducer = combineReducers({
    students: studentsReducer
})

export default rootReducer