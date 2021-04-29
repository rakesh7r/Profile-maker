import React, { useEffect, useState } from "react"
import fire from "../Configurations/fire"
import HomePost from "./HomePost"
function Home(props) {
    const { user, username } = props
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fire.firestore()
            .collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                setPosts(snapshot.docs.map((doc) => doc.data()))
            })
        const temp = posts.reverse()
        setPosts(temp.reverse())
    }, [])
    return (
        <div className="home">
            {posts ? (
                posts.map((post) => (
                    <HomePost
                        post={post}
                        id={post.id}
                        profileURL={user.photoURL}
                    />
                ))
            ) : (
                <p>unavailable</p>
            )}
        </div>
    )
}

export default Home
