import React, { useState } from 'react'

function EditModal(props) {

    //Exits the modal when the user clicks outside of the modal
    window.onclick = function (event) {
        if (event.target.className === "edit-modal") {
            props.setEditingInTime(undefined)
        }
    }

    const { updateTime } = props
    //Time in state for controlled form
    const [editTime, setEditTime] = useState(props.editingInTime ? props.student.In : props.student.Out)

    return (
        <div className="edit-modal">
            <div className="edit-modal-content">
                <div className="edit-form">
                    <h3>Edit Time</h3>

                    {/* controlled edit form */}
                    <form onSubmit={(event) => {
                        event.preventDefault()
                        updateTime(props.editingInTime, editTime)
                        props.setEditingInTime(undefined)
                    }}>
                        <input
                            value={editTime}
                            onChange={e => setEditTime(e.target.value)}
                        />
                        <br></br>
                        <button>Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditModal