import React, { useEffect, useState } from "react"
import fire from "../Configurations/fire"
import Post from "../Profile/Post"

function Home(props) {
    const { displayName, user, username } = props
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fire.firestore()
            .collection("posts")
            .onSnapshot((snapshot) => {
                setPosts(snapshot.docs.map((doc) => doc.data()))
            })
    }, [])
    return (
        <div className="home">
            {posts ? (
                posts.map((post) => {
                    console.log(post.caption)
                    return <p>{post.mediaURL}</p>
                })
            ) : (
                <p>unavailable</p>
            )}
        </div>
    )
}

export default Home
