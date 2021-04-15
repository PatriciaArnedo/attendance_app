import React, { useState } from 'react'
import Modal from './modal.js'

function Header() {

    const [ showModal, setShowModal] = useState(false)


    return (
        <div className="App">
            <header className="App-header">
                <img className="logo" src="/doclogo.png" alt="logo" />
                <h1>DOC Preschool</h1>
            </header>

            <button onClick={() => setShowModal(currentShowModal => !showModal)}>Take Attendance</button>

            {showModal? <Modal setShowModal={setShowModal} showModal={showModal} /> : null}
        </div>
    )
}

export default Header