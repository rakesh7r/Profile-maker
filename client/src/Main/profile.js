import React, { Component } from "react"
import Avatar from "@material-ui/core/avatar"
import fire from "../Configurations/fire.js"
import "./profile.css"
class Profile extends Component {
    render() {
        const { displayName, email } = fire.auth().currentUser
        return (
            <div className="profile-outer-container">
                <div className="profile-left-container">
                    <Avatar
                        alt={displayName}
                        src="lock_w (2).jpg"
                        style={{
                            width: "250px",
                            height: "250px",
                            fontSize: "80px",
                        }}
                    ></Avatar>
                    <div className="profile-left-user-details">
                        <h3 className="profile-name">@{displayName}</h3>
                    </div>
                    <button className="profile-edit-profile">
                        <span className="span-bold">Edit profile</span>
                    </button>
                    <button className="profile-edit-profile">
                        <span
                            className="span-bold"
                            onClick={this.props.handleLogout}
                        >
                            Sign out
                        </span>
                    </button>
                </div>
                <div className="profile-main"></div>
            </div>
        )
    }
}
export default Profile
