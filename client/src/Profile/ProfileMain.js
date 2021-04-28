import React, { useEffect, useState } from "react"
import fire from "../Configurations/fire"
import AddPost from "./AddPost"
import Post from "./Post"
import "./ProfileMain.css"
function ProfileMain(props) {
    const { username, user } = props
    const [data, setData] = useState(null)
    useEffect(() => {
        fire.firestore()
            .collection("users")
            .doc(username)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setData(doc.data())
                }
            })
            .catch((err) => console.error(err.message))
    }, [data])
    return (
        <div className="post-handler">
            <AddPost username={username} data={data} user={user} />
            {data
                ? data.posts
                    ? data.posts
                          .reverse()
                          .map((post) => (
                              <Post
                                  post={post}
                                  username={username}
                                  user={user}
                              />
                          ))
                    : null
                : null}
        </div>
    )
}
export default ProfileMain
