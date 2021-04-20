import React from "react"
import Header from "./header"

class App extends React.Component {
    render() {
        const { handleLogout } = this.props
        return (
            <div className="App">
                <Header handleLogout={handleLogout} />
            </div>
        )
    }
}
export default App
