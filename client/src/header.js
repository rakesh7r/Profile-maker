import React, { Component } from "react"
import Main from "./Main/main"
import "./header.css"
import Profile from "./Main/profile"

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom"
class Header extends Component {
    render() {
        return (
            <div className="header-outer">
                <Router>
                    <div className="header-ul">
                        <div className="header-title">
                            <nav>
                                <ul className="header-ul1">
                                    <Link
                                        className="header-link-title"
                                        to="/home"
                                    >
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
                            </nav>
                        </div>
                        <div className="header-links">
                            <nav className="header-nav-links">
                                <ul className="header-ul2">
                                    <Link
                                        className="header-link-links"
                                        to="/explore"
                                    >
                                        Explore
                                    </Link>
                                    <Link
                                        className="header-link-links"
                                        to="/addpost"
                                    >
                                        Add post
                                    </Link>
                                    <Link
                                        className="header-link-links"
                                        to="/notifiactions"
                                    >
                                        Notifications
                                    </Link>
                                    <Link
                                        className="header-link-links"
                                        to="/profile"
                                    >
                                        Profile
                                    </Link>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <Switch>
                        <Route path="/profile">
                            <Profile handleLogout={this.props.handleLogout} />
                        </Route>
                        <Route path="/notifications">Notifications</Route>
                        <Route path="/addpost">Addpost</Route>
                        <Route path="/explore">Explore</Route>
                        <Route
                            path="/home"
                            exact
                            render={() => <Main />}
                        ></Route>
                        <Route path="/" exact>
                            <Main />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default Header
