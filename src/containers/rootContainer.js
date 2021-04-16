import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Modal from '../components/modal.js'
import Header from '../components/header.js'
import { getStudents } from '../redux/actions'

function RootContainer(props){

    //use state to toggle the modal. initializes at false to hide the modal by default.
    const [ showModal, setShowModal] = useState(false)


    //fetches student list from a json server
    useEffect(() => {
        props.getStudents()
        console.log("TEST in use effect")
    }, [props])


    return(
        <>
        <Header/>
        {/* Attendance button toggles state and shows modal */}
        <button className="attendance-button" onClick={() => setShowModal(currentShowModal => !showModal)}> Take Attendance</button>

        {/* Ternary Logic to show/hide the modal */}
        {showModal? <Modal setShowModal={setShowModal} showModal={showModal} /> : null}
        </>
    )
}

function mdp(dispatch) {
    return {
        getStudents: () => dispatch(getStudents())
    }
}


export default connect(null, mdp)(RootContainer)