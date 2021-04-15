import React, { useState } from 'react'
import Modal from '../components/modal.js'
import Header from '../components/header.js'

function RootContainer(){

    //use state to toggle the modal. initializes at false to hide the modal by default.
    const [ showModal, setShowModal] = useState(false)

    return(
        <>
        <Header/>
        {/* Attendance button toggles state and shows modal */}
        <button onClick={() => setShowModal(currentShowModal => !showModal)}> Take Attendance</button>

        {/* Ternary Logic to show/hide the modal */}
        {showModal? <Modal setShowModal={setShowModal} showModal={showModal} /> : null}
        </>
    )
}

export default RootContainer