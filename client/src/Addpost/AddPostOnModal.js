import { Button, IconButton } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { TextArea } from "semantic-ui-react"
// import "./AddPost.css"
import Paperclip from "../icons/paperclip"
import fire from "../Configurations/fire.js"
import PropTypes from "prop-types"
import CircularProgress from "@material-ui/core/CircularProgress"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import firebase from "firebase"
import { Link } from "react-router-dom"

function CircularProgressWithLabel(props) {
    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress variant="determinate" {...props} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="textSecondary"
                >{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    )
}
CircularProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
}

function AddPostOnModal(props) {
    const [caption, setCaption] = useState("")
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)
    const [reload, setReload] = useState(true)
    const [loadingAnimation, setLoadingAnimation] = useState(false)
    const { username, data, user } = props
    const storage = fire.storage()

    const validateAndPost = () => {
        if (image === null && caption === "") {
            return alert("You cannot share an empty post!!")
        }
        setLoadingAnimation(true)
        handleUpload()
    }
    const handleUpload = () => {
        const imageName =
            fire.auth().currentUser.displayName + Date.now() + image.name
        var uploadTask = storage.ref(`posts/${imageName}`).put(image)
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                var progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
                setProgress(progress)
            },
            (error) => {
                alert(error.message)
            },
            () => {
                storage
                    .ref(`posts`)
                    .child(imageName)
                    .getDownloadURL()
                    .then((downloadURL) => {
                        fire.firestore()
                            .collection("posts")
                            .add({
                                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                mediaURL: downloadURL,
                                caption: caption,
                                username: fire.auth().currentUser.displayName,
                                likes: 0,
                                comments: null,
                                saved: null,
                            })
                            .then((docRef) => {
                                fire.firestore()
                                    .collection("users")
                                    .doc(fire.auth().currentUser.displayName)
                                    .update({
                                        posts: firebase.firestore.FieldValue.arrayUnion(
                                            docRef.id
                                        ),
                                    })
                            })
                            .catch((err) => {
                                console.log(err.messsage)
                            })
                    })
                    .catch((err) => alert(err.message))
            }
        )
        setReload(!reload)
    }
    return (
        <center>
            <div className="Addpost-container" style={{ minWidth: "50vw" }}>
                <TextArea
                    rows={3}
                    placeholder="Post Something..."
                    style={{
                        width: "90%",
                        fontSize: "15px",
                        padding: "15px",
                        height: "80px",
                        fontFamily: "Lato, sans-serif",
                    }}
                    className="addpost-textarea"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                />
                <div className="addpost-buttons">
                    {image ? (
                        image.name ? (
                            <span
                                className="image-selected"
                                style={{
                                    fontFamily: "Lato , sans-serif",
                                    padding: "10px",
                                }}
                            >
                                {image.name} Selected
                            </span>
                        ) : null
                    ) : null}
                    {loadingAnimation ? (
                        <CircularProgressWithLabel value={progress} />
                    ) : null}
                    <IconButton
                        component="label"
                        style={{
                            borderRadius: "300px",
                            padding: "10px",
                        }}
                    >
                        <Paperclip className="loading-animation" />
                        <input
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={(event) => {
                                setImage(event.target.files[0])
                            }}
                        />
                    </IconButton>
                    <Link
                        to="/home"
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: "#007bff",
                                color: " white",
                                marginLeft: "15px",
                            }}
                            onClick={() => {
                                setCaption("")
                                setImage(null)
                            }}
                        >
                            Discard
                        </Button>
                    </Link>

                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: "#007bff",
                            color: " white",
                            marginLeft: "15px",
                        }}
                        onClick={validateAndPost}
                    >
                        Post
                    </Button>
                </div>
            </div>
        </center>
    )
}

export default AddPostOnModal
