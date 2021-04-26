import React, { useEffect, useState } from "react"
import Avatar from "@material-ui/core/avatar"
import $ from "jquery"
import fire from "../Configurations/fire.js"
import "./profile.css"
import { makeStyles } from "@material-ui/core/styles"
import { Button, FormControl, Input, TextField } from "@material-ui/core"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormHelperText from "@material-ui/core/FormHelperText"
import Select from "@material-ui/core/Select"

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}))

const Profile = (props) => {
    const { displayName, email, profileURL } = fire.auth().currentUser
    const { user } = props
    const classes = useStyles()
    const firestore = fire.firestore()
    const [data, setData] = useState(null)
    const [gender, setGender] = useState(null)

    const fetchData = () => {
        firestore
            .collection("users")
            .doc(displayName)
            .get()
            .then((doc) => {
                setData(doc.data())
                console.log(data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchData()
        $(".profile-main").css("width", window.innerWidth)
        $(".profile-main").css("height", window.innerHeight)
    }, [])
    return (
        <div className="profile-main">
            {user ? (
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
            ) : null}
            {data ? (
                <div className="profile-right">
                    {console.log(data)}
                    {data.dataAdded === false ? (
                        <div className="profile-right-getData">
                            <div>
                                <h1>Personal Information</h1>
                                <TextField
                                    id="outlined-basic"
                                    label="Enter Your name"
                                    variant="outlined"
                                    required
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Add about"
                                    variant="outlined"
                                />
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">
                                        Gender
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={gender}
                                        onChange={(event) => {
                                            setGender(event.target.value)
                                        }}
                                    >
                                        <MenuItem value={"Female"}>
                                            Female
                                        </MenuItem>
                                        <MenuItem value={"Male"}>Male</MenuItem>
                                        <MenuItem value={"Other"}>
                                            Other
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <h1 className="text">Educational Information</h1>
                            <div>
                                <h2 className="text">X Class Details</h2>
                                <TextField
                                    id="outlined-basic"
                                    label="School Name"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="GPA/Percentage"
                                    variant="outlined"
                                />
                            </div>
                            <div>
                                <h2 className="text">X Class Details</h2>
                                <TextField
                                    id="outlined-basic"
                                    label="School Name"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="GPA/Percentage"
                                    variant="outlined"
                                />
                            </div>
                            <div>
                                <h2 className="text">X Class Details</h2>
                                <TextField
                                    id="outlined-basic"
                                    label="School Name"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="GPA/Percentage"
                                    variant="outlined"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="profile-right-bio-cont">
                            <h1 className="text">{data.displayName}</h1>
                            <p className="text-two profile-right-bio">
                                {data.bio}
                            </p>
                        </div>
                    )}
                </div>
            ) : null}
        </div>
    )
}
export default Profile
