import {
    GET_STUDENTS, UPDATE_STUDENTS
} from './actionTypes'

import data from "../students.json"

const studentsStorageKey = "STUDENTS_ARRAY_KEY"

export const saveStudents = (students) => {
    if (!students) {
        return
    }
    localStorage.setItem(studentsStorageKey, JSON.stringify(students))
}

export const getStudents = () => {
    console.log("TEST in get students")
    return function (dispatch) {
        
            const studentsArray = []

            if (localStorage.getItem(studentsStorageKey) !== null) {
                const stored = JSON.parse(localStorage.getItem(studentsStorageKey))
                return dispatch({ type: GET_STUDENTS, payload: stored })
            }
            
            for (const [date, innerObj] of Object.entries(data)) {
                for (const [id, student] of Object.entries(innerObj)) {
                    student['id'] = id
                    student['date'] = date
                    studentsArray.push(student)
                }
            }
            
            console.log(studentsArray, "in action")
            dispatch({ type: GET_STUDENTS, payload: studentsArray })
    }
}

export const updateStudents = (studentsArray) => {
    return function(dispatch) {
        saveStudents(studentsArray)
        dispatch({type:UPDATE_STUDENTS, payload: studentsArray})
    }
}