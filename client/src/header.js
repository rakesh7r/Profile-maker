import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import "./header.css"
import { Link } from "react-router-dom"
import $ from "jquery"
const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
}))

function Header() {
    const classes = useStyles()
    const [searchValue, setSearchValue] = useState("")
    return (
        <div className="header-outer">
            <div className="header-left">
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                    <h1>Profile Crafter</h1>
                </Link>
                <input
                    type="text"
                    className="header-search-field"
                    placeholder="Enter Username"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                {searchValue ? (
                    <Link to={`/user/${searchValue}`}>
                        <button className="header-search-btn">GO</button>
                    </Link>
                ) : null}
            </div>
            <div className="header-right">
                <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/home"
                >
                    <h3>Home</h3>
                </Link>
                <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/addpost"
                >
                    <h3>Add Post</h3>
                </Link>
                <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/notifications"
                >
                    <h3>Notifications</h3>
                </Link>
                <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/profile"
                >
                    <h3>profile</h3>
                </Link>
            </div>
        </div>
    )
}

export default Header
