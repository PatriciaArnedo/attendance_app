import React, { useState } from 'react'
import { Icon } from '@material-ui/core'


function Student(props) {

    //state for whether the sign in timer icon has been clicked. defaults to false. 
    const [inTimerClicked, setInTimerClicked] = useState(false)

    //state for whether the sign out timer icon has been clicked. defaults to false. 
    const [outTimerClicked, setOutTimerClicked] = useState(false)

    //function for getting the current time
    const getTime = () => {

        //gets current datetime
        let d = new Date()
        return formatAMPM(d)
    
    }

    //function that displays timer icon or timestamp
    const inTimeDisplay = () => {
        if (inTimerClicked) {
            return getTime()
        } else {
            return (
                <span onClick={() => setInTimerClicked(currentInTimerClicked => !inTimerClicked)}>
                    <Icon style={{ fontSize: 50, color: 'rgb(164, 161, 192)' }} >timer</Icon>
                </span>
            )
        }
    }

    //function that displays sign out timer icon or timestamp
    const outTimeDisplay = () => {
        if (outTimerClicked) {
            return getTime()
        } else {
            if (inTimerClicked) {
                return (
                    <span onClick={() => setOutTimerClicked(currentOutTimerClicked => !outTimerClicked)}>
                        <Icon style={{ fontSize: 50, color: 'rgb(164, 161, 192)' }} >timer_off</Icon>
                    </span>
                )
            }
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
                    <span style={{fontSize:'12px', fontWeight: '1000' }}>
                        {inTimerClicked ? "Time In " : null}
                    </span>
                    <span style={{fontSize:'16px', fontWeight: '400' }}>
                    {inTimeDisplay()}
                    </span>
                </div>

                <div className="time-column">
                    <span style={{fontSize:'12px', fontWeight: '800' }}>
                        {outTimerClicked ? "Time Out " : null}
                    </span>
                    <span style={{fontSize:'16px', fontWeight: '400' }}>
                    {outTimeDisplay()}
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Student


// From https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }