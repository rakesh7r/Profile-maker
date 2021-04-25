import React, { useEffect } from "react"
import Avatar from "@material-ui/core/avatar"
import $ from "jquery"
import fire from "../Configurations/fire.js"
import "./profile.css"
import { makeStyles } from "@material-ui/core/styles"
import { Button } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}))

const Profile = (props) => {
    const { displayName, email, profileURL } = fire.auth().currentUser
    const classes = useStyles()

    useEffect(() => {
        $(".profile-main").css("width", window.innerWidth)
        $(".profile-main").css("height", window.innerHeight)
    }, [])
    return (
        <div className="profile-main">
            <div className="profile-left">
                <center>
                    <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        className={classes.large}
                        style={{
                            width: "200px",
                            height: "200px",
                            fontSize: "100px",
                        }}
                    />
                    <h2 className="text  profile-left-username">
                        @{displayName}
                    </h2>
                    <Button
                        onClick={props.handleLogout}
                        style={{
                            backgroundColor: "#24292E",
                            color: "white",
                            width: "90%",
                            marginBottom: "15px",
                        }}
                    >
                        SignOut
                    </Button>
                    <Button
                        style={{
                            backgroundColor: "#24292E",
                            color: "white",
                            width: "90%",
                        }}
                    >
                        Edit profile
                    </Button>
                </center>
            </div>
            <div className="profile-right">
                <div className="profile-right-bio-cont">
                    <h1 className="text">I am Rakesh Gandla</h1>
                    <p className="text-two profile-right-bio">
                        This is bio akfj alkjdf lakdf aldkfj adflkja dfladkf j
                        lorem ipsummary lakdf aldkfj adflkja dfladkf j
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Profile
