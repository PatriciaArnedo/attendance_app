import React, { useEffect, useState } from 'react'
import Student from './student.js'

function Modal(props) {

    window.onclick = function (event) {
        if (event.target.className === "modal") {
            props.setShowModal(currentShowModal => !props.showModal)
        }
    }

    const [students, setStudents] = useState([])

    useEffect (() => {
        fetch(`http://localhost:4000/students`)
        .then(r => r.json())
        .then(studentsArray => {
            console.log(studentsArray)
            setStudents(studentsArray)
        })
        .catch(console.log)
    }, [])

    function renderStudents() {
        return students.map(student => <Student key={student.id} student={student} />)
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <p>Attendance</p>
                </div>
                <button onClick={() => props.setShowModal(currentShowModal => !props.showModal)}>Close</button>
                {renderStudents()}
            </div>
        </div>
    )

}

export default Modal