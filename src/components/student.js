import React from 'react'

function Student(props){

    return(
        <div className="student">
            <p>{props.student.FirstName} {props.student.LastName}</p>
        </div>
    )
}

export default Student