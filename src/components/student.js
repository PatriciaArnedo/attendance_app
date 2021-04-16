import React, { useState } from 'react'
import { Icon } from '@material-ui/core'
import { connect } from 'react-redux'
import { updateStudents } from '../redux/actions'
import EditModal from './editModal.js'



function Student(props) {

    const [editingInTime, setEditingInTime] = useState()
    //state for whether the sign in timer icon has been clicked. defaults to false. 
    const inTimerClicked = props.student.In !== ""

    //state for whether the sign out timer icon has been clicked. defaults to false. 

    const outTimerClicked = props.student.Out !== ""

    //function for getting the current time
    const getTime = () => {

        //gets current datetime
        let d = new Date()
        return formatAMPM(d)

    }


    function updateTime(inTime, updateValue) {
        //updates the in or out time for the specified student 
        const updatedStudents = props.students.map(student => {
            //maps over array of students replacing the current student with a copy containing updated time
            if (student.date === props.student.date && student.id === props.student.id) {
                const copy = { ...student }
                if (inTime) {
                    copy.In = updateValue
                } else {
                    copy.Out = updateValue
                }
                return copy
            }
            return student
        })
        props.updateStudents(updatedStudents)
    }

    //function that displays timer icon or timestamp
    const inTimeDisplay = () => {
        if (props.student.In) {
            return (
                <span onClick={() => {
                    setEditingInTime(true)
                }}>
                    {props.student.In}
                    <Icon style={{ fontSize: 16, color: 'rgb(25, 152, 255)' }} >edit</Icon>
                </span>
            )
        }

        return (
            <span onClick={() => {
                updateTime(true, getTime())
            }}>
                <Icon style={{ fontSize: 50, color: 'rgb(164, 161, 192)' }} >timer</Icon>
            </span>
        )
    }

    //function that displays sign out timer icon or timestamp
    const outTimeDisplay = () => {
        if (props.student.Out) {
            return (
                <span onClick={() => {
                    setEditingInTime(false)
                }}>
                    {props.student.Out}
                    <Icon style={{ fontSize: 16, color: 'rgb(25, 152, 255)' }} >edit</Icon>
                </span>
            )
        }

        if (inTimerClicked) {
            return (
                <span onClick={() => {
                    updateTime(false, getTime())
                }}>
                    <Icon style={{ fontSize: 50, color: 'rgb(164, 161, 192)' }} >timer_off</Icon>
                </span>
            )
        }

    }


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

                <div className="time-column">
                    <span style={{ fontSize: '12px', fontWeight: '1000' }}>
                        {inTimerClicked ? "Time In " : null} 
                    </span>
                    <br></br>
                    <span style={{ fontSize: '16px', fontWeight: '400' }}>
                        {inTimeDisplay()}
                    </span>
                </div>

                <div className="time-column">
                    <span style={{ fontSize: '12px', fontWeight: '800' }}>
                        {outTimerClicked ? "Time Out " : null}
                    </span>
                    <br></br>
                    <span style={{ fontSize: '16px', fontWeight: '400' }}>
                        {outTimeDisplay()}
                    </span>
                </div>

            </div>
            {editingInTime !== undefined ? <EditModal updateTime={updateTime} editingInTime={editingInTime} setEditingInTime={setEditingInTime} student={props.student} /> : null}
        </div>
    )
}

function mdp(dispatch) {
    return {
        updateStudents: (studentsArray) => dispatch(updateStudents(studentsArray))
    }
}

function msp(state) {
    return {
        students: state.students
    }
}

export default connect(msp, mdp)(Student)


// From https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}