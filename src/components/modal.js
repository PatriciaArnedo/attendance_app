import React, { useState } from 'react'
import { Icon } from '@material-ui/core'
import { connect } from 'react-redux'
import DayComponent from './dayComponent.js'
import Student from './student.js'





function Modal(props) {

    //Exits the modal when the user clicks outside of the modal
    window.onclick = function (event) {
        if (event.target.className === "modal") {
            props.setShowModal(currentShowModal => !props.showModal)
        }
    }

    //holds the current selected date in state
    const [clickedDate, setClickedDate] = useState("2021-04-16")

    function getUniqueDates() {
        const datesArray = props.students.map(student => student.date)
        const uniqueDatesArray = datesArray.filter((date, currentIdx) => datesArray.indexOf(date) === currentIdx)
        return uniqueDatesArray.sort()
    }

    function renderDays() {
        let datesArray = getUniqueDates()
        console.log(datesArray, "dates to be rendered")
        return datesArray.map((date, index) => (<DayComponent onClick={() => setClickedDate(date)} key={date} date={date} id={index} />))
    }


    function studentByDate(date) {
        return props.students.filter(student => student.date === date)
    }

    //renders all student names fetched from json server
    function renderStudents() {
        if (!clickedDate) {
            return <div/>
        }
        return studentByDate(clickedDate).map(student => <Student key={student.date + ' ' + student.id} student={student} />)
    }


    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <button className="close-button" onClick={() => props.setShowModal(currentShowModal => !props.showModal)}>x</button>
                    <Icon style={{ fontSize: 50, color: 'rgb(164, 161, 192)' }} >timer</Icon>
                    Attendance
                </div>
                <div className="calendar-container">
                    {renderDays()}
                </div>
                {/* calls the render students function */}
                <div className="student-container">
                    {renderStudents()}
                </div>
            </div>
        </div>
    )

}

function msp(state) {
    return {
        students: state.students
    }
}

export default connect(msp)(Modal)