import React from 'react'

function Student(props) {

    //individual student component that is rendered for every student fetched
    return (
        <div className="student-row">
        <div className="student-name">
            <div className="student-initials">
                {props.student.FirstName[0]}{props.student.LastName[0]} 
            </div>
            {props.student.FirstName} {props.student.LastName}
        </div>
        <div className="student-time">
            Time In Time Out
        </div>
        </div>
    )
}

export default Student