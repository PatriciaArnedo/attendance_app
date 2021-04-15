import React, { useEffect, useState } from 'react'
import Student from './student.js'
import { Icon } from '@material-ui/core'

function Modal(props) {

    //Exits the modal when the user clicks outside of the modal
    window.onclick = function (event) {
        if (event.target.className === "modal") {
            props.setShowModal(currentShowModal => !props.showModal)
        }
    }

    //use state hook to store students fetched from json server
    const [students, setStudents] = useState([])

    //fetches student list from a json server
    useEffect(() => {
        fetch(`http://localhost:4000/students`)
            .then(r => r.json())
            .then(studentsArray => {
                console.log(studentsArray)
                setStudents(studentsArray)
            })
            .catch(console.log)
    }, [])


    //renders all student names fetched from json server
    function renderStudents() {
        return students.map(student => <Student key={student.id} student={student} />)
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <button className="close-button" onClick={() => props.setShowModal(currentShowModal => !props.showModal)}>x</button>
                    <Icon>timer</Icon>
                    Attendance
                </div>

                {/* calls the render students function */}
                <div className="student-container">
                    {renderStudents()}
                </div>
            </div>
        </div>
    )

}

export default Modal