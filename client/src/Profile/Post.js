import { Avatar, Button } from "@material-ui/core"
import React, { useState } from "react"
import fire from "../Configurations/fire"
import { Link } from "react-router-dom"
import "./Post.css"
function Post(props) {
    const { post, username, user } = props
    const [postData, setPostData] = useState({})
    useState(() => {
        fire.firestore()
            .collection("posts")
            .doc(post)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setPostData(doc.data())
                }
            })
            .catch((err) => console.log(err.message))
    }, [])
    return (
        <div>
            {postData ? (
                postData.mediaURL && postData.username ? (
                    <center>
                        <div className="post">
                            <div className="post-header">
                                <Link
                                    to={`/user/${postData.username}`}
                                    style={{
                                        textDecoration: "none",
                                        color: "black",
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    <Avatar
                                        alt={postData.username}
                                        src={user.photoURL}
                                    />

                                    <h3 className="post-username">
                                        {postData.username}
                                    </h3>
                                </Link>
                            </div>
                            <div className="post-image-cont">
                                <img
                                    alt={postData.username}
                                    src={postData.mediaURL}
                                    loading="lazy"
                                    className="post-image"
                                />
                            </div>
                            <div className="post-buttons">
                                <Button>Like</Button>
                                <Button>Comment</Button>
                                <Button>Save</Button>
                            </div>
                            <div className="post-caption-cont">
                                <p>{postData.caption}</p>
                            </div>
                        </div>
                    </center>
                ) : null
            ) : (
                post
            )}
        </div>
    )
}

export default Post
