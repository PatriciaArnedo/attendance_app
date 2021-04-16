import React from 'react'
import { connect } from 'react-redux'


function Day(props) {

    //displays day of the week
    function weekDay() {
        switch (props.id) {
            case 0:
                return "M"
            case 1:
                return "T"
            case 2:
                return "W"
            case 3:
                return "TH"
            case 4:
                return "F"
            default:
                return null
        }
    }

    //displays the day of the week and date
    return (
        <div onClick={()=>{props.onClick()}} className="calendar-day">
            {weekDay() + " "}
            <br></br><br></br>
            {props.date.slice(8)}
        </div>
    )
}

//map state to props
function msp(state) {
    return {
        students: state.students
    }
}


export default connect(msp)(Day)