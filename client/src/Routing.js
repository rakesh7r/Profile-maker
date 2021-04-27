import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./header"
import GetProfile from "./Main/GetProfile"
import Profile from "./Main/profile"
import "./Routing.css"
function Routing(props) {
    return (
        <div className="routing-outer">
            <Router>
                <Header />
                <Switch>
                    <Route path="/profile" exact>
                        <Profile
                            user={props.user}
                            handleLogout={props.handleLogout}
                        />
                    </Route>
                    <Route path="/user/:username" component={GetProfile} />
                    <Route path="/notifications">Notifications</Route>
                    <Route path="/addpost">Addpost</Route>
                    <Route path="/explore">Explore</Route>
                    <Route
                        path="/home"
                        exact
                        render={() => <h2>home</h2>}
                    ></Route>
                    <Route path="/" exact>
                        Home
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routing
