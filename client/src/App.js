import React from "react"
import Header from "./header"

const App = (props) => {
    const { handleLogout } = props
    return (
        <div className="App">
            <Header user={props.user} handleLogout={handleLogout} />
        </div>
    )
}

export default App
