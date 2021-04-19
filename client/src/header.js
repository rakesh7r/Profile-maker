import React, { Component } from "react"
import "./header.css"

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom"
class Header extends Component {
    render() {
        return (
            <div className="header-outer">
                <Router>
                    <div className="header-ul">
                        <div className="header-title">
                            <ul className="header-ul1">
                                <Link className="header-link-title" to="/home">
                                    <h2 className="header-h2">
                                        Profile Crafter
                                    </h2>
                                </Link>
                                <form method="POST" action="#">
                                    <input
                                        type="text"
                                        className="header-search"
                                        id="header-search"
                                        placeholder="Enter username"
                                    />
                                </form>
                            </ul>
                        </div>
                        <div className="header-links">
                            <ul className="header-ul2">
                                <Link
                                    className="header-link-links"
                                    to="/explore"
                                >
                                    explore
                                </Link>
                                <Link
                                    className="header-link-links"
                                    to="/addpost"
                                >
                                    add post
                                </Link>
                                <Link
                                    className="header-link-links"
                                    to="/notifiactions"
                                >
                                    notifications
                                </Link>
                                <Link
                                    className="header-link-links"
                                    to="/profile"
                                >
                                    profile
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <Switch>
                        <Route path="/profile">Profile</Route>
                        <Route path="/notifications">Notifications</Route>
                        <Route path="/addpost">Addpost</Route>
                        <Route path="/explore">Explore</Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default Header
