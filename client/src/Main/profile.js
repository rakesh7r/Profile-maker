import React, { useEffect, useState } from "react"
import Avatar from "@material-ui/core/avatar"
import $ from "jquery"
import fire from "../Configurations/fire.js"
import "./profile.css"
import { makeStyles } from "@material-ui/core/styles"
import EditData from "./EditData.js"
import { Button, CircularProgress } from "@material-ui/core"
import ProfileMain from "./ProfileMain.js"

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
    root: {
        display: "flex",
        "& > * + *": {
            marginLeft: theme.spacing(2),
        },
    },
}))

const Profile = (props) => {
    const classes = useStyles()
    const { displayName } = fire.auth().currentUser
    const { user } = props
    const firestore = fire.firestore()
    const [data, setData] = useState({})
    const [gender, setGender] = useState("")
    const [name, setName] = useState("")
    const [bio, setBio] = useState("")
    const [xname, setXnmae] = useState("")
    const [xgpa, setXgpa] = useState(null)
    const [collegename, setCollegename] = useState("")
    const [collegegpa, setCollegegpa] = useState(null)
    const [gradname, setGradname] = useState("")
    const [gradgpa, setGradgpa] = useState(null)
    const [sepcializationname, setSpecializationname] = useState("")
    const [specializationgpa, setSpecializationgpa] = useState(null)
    const [interest, setInterest] = useState("")
    const [interests, setInterests] = useState([])
    const [editSetter, setEditSetter] = useState(false)
    const fetchData = () => {
        firestore
            .collection("users")
            .doc(displayName)
            .get()
            .then((doc) => {
                setData(doc.data())
                // console.log(data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchData()
        // console.log(data)
        $(".profile-main").css("width", window.innerWidth)
    }, [displayName, data])

    const validateAndSave = () => {
        if (
            (data.dataAdded === false ||
                data.displayName === "" ||
                data.displayName.trim().length < 2) &&
            name.length === 0
        ) {
            return alert("Enter your name first!")
        }
        if (gender === "" && data.dataAdded === false) {
            return alert("Choose your gender")
        }
        if ((xname === "" || xgpa === "") && data.dataAdded === false)
            return alert("Enter Your Schooling details Correctly")
        if (
            (collegename === "" || collegegpa === "") &&
            data.dataAdded === false
        )
            return alert("Enter College details Corrctly")
        if ((gradname === "" || gradgpa === "") && data.dataAdded === false)
            return alert("Enter Your graduation details")
        if (isNaN(xgpa) || isNaN(collegegpa) || isNaN(gradgpa))
            return alert(
                "GPA must be a number (Remove if any special character is included(%))"
            )
        save()
    }
    const save = () => {
        firestore
            .collection("users")
            .doc(displayName)
            .update({
                dataAdded: true,
                bio: bio || data.bio,
                displayName: name || data.displayName,
                gender: data.gender || gender,
                "education.school.name": xname || data.education.school.name,
                "education.school.gpa": xgpa || data.education.school.gpa,
                "education.college.name":
                    collegename || data.education.college.name,
                "education.college.gpa":
                    collegegpa || data.education.college.gpa,
                "education.graduation.name":
                    gradname || data.education.graduation.name,
                "education.graduation.gpa":
                    gradgpa || data.education.graduation.gpa,
                "education.specialization.name":
                    sepcializationname || data.education.specialization.name,
                "education.specialization.gpa":
                    specializationgpa || data.education.specialization.gpa,
            })
        setEditSetter(!editSetter)
    }

    return (
        <div className="profile-main" style={{ minHeight: "85vh" }}>
            {user ? (
                <div className="profile-left" style={{ maxHeight: "100vh" }}>
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
                        <h2
                            className="text"
                            style={{
                                margin: "0",
                                padding: "0",
                                marginBottom: "-15px",
                                marginTop: "10px",
                            }}
                        >
                            {data.displayName}
                        </h2>
                        <h3
                            className="text  profile-left-username"
                            style={{ padding: "20px", marginBottom: "-10px" }}
                        >
                            @{displayName}
                        </h3>
                        {data ? (
                            <p
                                className="text"
                                style={{
                                    width: "100%",
                                    wordBreak: "break-word",
                                    marginBottom: "10px",
                                }}
                            >
                                {data.bio}
                            </p>
                        ) : null}
                        <div style={{ padding: " 10px" }}>
                            {data.education ? (
                                data.education.specialization ? (
                                    <div>
                                        <p>
                                            {data.education.specialization.name}
                                        </p>
                                    </div>
                                ) : data.education.graduation ? (
                                    <p>{data.education.graduation.name}</p>
                                ) : data.education.college ? (
                                    <p>{data.education.college.name}</p>
                                ) : data.education.school ? (
                                    <p>{data.education.school.name}</p>
                                ) : null
                            ) : null}
                        </div>

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
                            onClick={() => {
                                setEditSetter(!editSetter)
                            }}
                        >
                            {editSetter ? (
                                <span>Cancel</span>
                            ) : (
                                <span>Edit profile</span>
                            )}
                        </Button>
                    </center>
                </div>
            ) : (
                <CircularProgress color="secondary" />
            )}

            {data ? (
                <div className="profile-right">
                    {data.dataAdded === false || editSetter ? (
                        <EditData
                            validateAndSave={validateAndSave}
                            gender={gender}
                            data={data}
                            name={name}
                            bio={bio}
                            xname={xname}
                            xgpa={xgpa}
                            collegename={collegename}
                            collegegpa={collegegpa}
                            gradname={gradname}
                            gradgpa={gradgpa}
                            interest={interest}
                            interests={interests}
                            setData={setData}
                            setGender={setGender}
                            setName={setName}
                            setBio={setBio}
                            setXnmae={setXnmae}
                            setXgpa={setXgpa}
                            setCollegename={setCollegename}
                            setCollegegpa={setCollegegpa}
                            setGradname={setGradname}
                            setGradgpa={setGradgpa}
                            setInterest={setInterest}
                            setInterests={setInterests}
                            editSetter={editSetter}
                            setEditSetter={setEditSetter}
                            specializationname={sepcializationname}
                            setSepcializationname={setSpecializationname}
                            specializationgpa={specializationgpa}
                            setSpecializationgpa={setSpecializationgpa}
                        />
                    ) : (
                        <div
                            // className="profile-right-bio-cont"
                            style={{ padding: "30px" }}
                        >
                            <ProfileMain
                                username={displayName}
                                data={data}
                                user={user}
                            />
                        </div>
                    )}
                </div>
            ) : null}
        </div>
    )
}
export default Profile
