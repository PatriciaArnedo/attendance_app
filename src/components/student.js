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
        console.log(d, "original")

        //gets only the time from datetime
        let timeArray = d.toLocaleTimeString().split(" ")
        console.log(timeArray, "array")

        //removes milliseconds from time
        timeArray[0] = timeArray[0].slice(0, 4)
        console.log(timeArray, "sliced array")

        //adds space between the time and am/pm
        timeArray.splice(1, 0, ' ')
        console.log(timeArray, "spliced array")

        return timeArray
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
                if (inTimerClicked){
                    return(
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
                {inTimerClicked ? "Time In " : null}
                {inTimeDisplay()}
                {outTimerClicked ? "Time Out " : null}
                {outTimeDisplay()}
            </div>
        </div>
    )
}

export default Student