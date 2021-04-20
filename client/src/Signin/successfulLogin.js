import React from "react"

function SuccessfulLogin(props) {
    const { handleLogout } = props
    return (
        <div>
            <h1>Welcome</h1>
            <button onClick={handleLogout}>logout</button>
        </div>
    )
}

export default SuccessfulLogin
