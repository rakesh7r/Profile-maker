import React, { Component } from "react"
import Header from "./header"
import Signup from "./Signin/SignupApp"
import Login from "./Signin/Login"
class App extends React.Component {
    render() {
        return (
            <div className="App">
                {/* <Header /> */}
                <Signup />
            </div>
        )
    }
}
export default App
