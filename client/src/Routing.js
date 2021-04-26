import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom"
import Header from "./header"
import Main from "./Main/main"
import Profile from "./Main/profile"
import "./Routing.css"
import $ from "jquery"
function Routing(props) {
    const [searchUsername, setSearchUsername] = useState(null)
    return (
        <div className="routing-outer">
            <Router>
                <Header
                    searchUsername={searchUsername}
                    setSearchUsername={setSearchUsername}
                />
                <Switch>
                    <Route path="/profile" exact>
                        <Profile
                            user={props.user}
                            handleLogout={props.handleLogout}
                        />
                    </Route>
                    <Route path="/user/:username">hello</Route>
                    <Route path="/notifications">Notifications</Route>
                    <Route path="/addpost">Addpost</Route>
                    <Route path="/explore">Explore</Route>
                    <Route path="/home" exact render={() => <Main />}></Route>
                    <Route path="/" exact>
                        <Main />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routing
