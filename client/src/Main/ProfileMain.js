import React from "react"
import AddPost from "./AddPost"
import "./ProfileMain.css"
function ProfileMain(props) {
    const { username, data, user } = props
    return (
        <div>
            <div className="post-handler">
                <AddPost username={username} data={data} user={user} />
            </div>
        </div>
    )
}

export default ProfileMain
