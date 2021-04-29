import { Avatar, Button, IconButton } from "@material-ui/core"
import React from "react"
import { Link } from "react-router-dom"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
function HomePost(props) {
    const { post, photoURL } = props
    return (
        <center>
            <div className="post">
                <div className="post-header">
                    <Link
                        to={`/user/${post.username}`}
                        style={{
                            textDecoration: "none",
                            color: "black",
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        <Avatar alt={post.username} src={photoURL} />
                        <h3 className="post-username">{post.username}</h3>
                    </Link>
                </div>
                <div className="post-image-cont">
                    <img
                        alt={post.username}
                        src={post.mediaURL}
                        loading="lazy"
                        className="post-image"
                    />
                </div>
                <div className="post-buttons">
                    <IconButton>
                        <FavoriteBorderIcon />
                    </IconButton>
                    <IconButton>Comment</IconButton>
                    <IconButton>Save</IconButton>
                </div>
                <div className="post-caption-cont">
                    <p>{post.caption}</p>
                </div>
            </div>
        </center>
    )
}

export default HomePost
