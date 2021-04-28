import React from "react"
import Header from "./header"
import Routing from "./Routing"

const App = (props) => {
    const { handleLogout } = props
    return (
        <div className="App">
            <Routing
                user={props.user}
                handleLogout={handleLogout}
            />
        </div>
    )
}

export default App
