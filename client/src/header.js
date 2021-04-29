import React, { useState } from "react"
import "./header.css"
import { Link } from "react-router-dom"
import PersonOutlineIcon from "@material-ui/icons/PersonOutline"
import { IconButton } from "@material-ui/core"
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined"
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"

function Header() {
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
                    {/* <h3>Home</h3> */}
                    <IconButton color="inherit" size="30px">
                        <HomeOutlinedIcon />
                    </IconButton>
                </Link>
                {/* <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/addpost"
                >
                    <h3>Add Post</h3>
                </Link> */}
                <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/notifications"
                >
                    {/* <h3>Notifications</h3> */}
                    <IconButton color="inherit">
                        <NotificationsNoneOutlinedIcon />
                    </IconButton>
                </Link>
                <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/profile"
                >
                    {/* <h3>Profile</h3> */}
                    <IconButton color="inherit">
                        <PersonOutlineIcon />
                    </IconButton>
                </Link>
            </div>
        </div>
    )
}

export default Header
