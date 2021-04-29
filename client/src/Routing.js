import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./header"
import Home from "./Home/Home"
import GetProfile from "./Profile/GetProfile"
import Profile from "./Profile/profile"
import AddPostModal from "./Addpost/AddPostModal"
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
                    <Route path="/addpost">
                        <AddPostModal user={props.user} />
                    </Route>
                    <Route path="/explore">Explore</Route>
                    <Route
                        path="/"
                        exact
                        render={() => (
                            <Home
                                username={props.user.displayName}
                                user={props.user}
                            />
                        )}
                    ></Route>
                    <Route
                        path="/home"
                        exact
                        render={() => (
                            <Home
                                username={props.user.displayName}
                                user={props.user}
                            />
                        )}
                    ></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routing
