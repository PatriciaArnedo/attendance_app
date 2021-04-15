import React from 'react'

function Modal(props) {

    window.onclick = function (event) {
        if (event.target.className === "modal") {
            props.setShowModal(currentShowModal => !props.showModal)
        }
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <p>Attendance</p>
                </div>
                <button onClick={() => props.setShowModal(currentShowModal => !props.showModal)}>Close</button>
            </div>
        </div>
    )

}

export default Modal