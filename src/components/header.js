import React from 'react'

function Header() {

    //Simple header component that displays a title and logo
    return (
        <div className="App">
            <header className="App-header">
                <img className="logo" src="/doclogo.png" alt="logo" />
                <h1>DOC Preschool</h1>
            </header>
        </div>
    )
}

export default Header