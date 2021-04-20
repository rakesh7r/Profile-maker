import React, { Component } from "react"
import "./profile.css"
class Profile extends Component {
    render() {
        return (
            <div className="profile-outer-container">
                <div className="profile-left-container">
                    <img
                        src="lock_w (2).jpg"
                        alt="profile"
                        className="profile-img"
                    />
                    <div className="profile-left-user-details">
                        <h3 className="profile-name">Rakesh Gandla</h3>
                        <span className="profile-username">@rakesh7r</span>
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
