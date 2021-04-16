import {
    GET_STUDENTS
} from './actionTypes'


export const getStudents = () => {
    console.log("TEST in get students")
    return function (dispatch) {
        fetch(`http://localhost:4000/students`)
        .then(r => r.json())
        .then(dataArr => {
            console.log(dataArr, "DATA IN GET STUDENTS")
            const studentsArray = []
            const data = dataArr[0]

            for (const [date, innerObj] of Object.entries(data)) {
                for (const [id, student] of Object.entries(innerObj)) {
                    student['id'] = id
                    student['date'] = date
                    studentsArray.push(student)
                }
            }
            console.log(studentsArray, "in action")
            dispatch({ type: GET_STUDENTS, payload: studentsArray })
        })
        .catch(console.log)
    }
}