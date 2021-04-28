import React, { useEffect, useState } from "react"
import fire from "../Configurations/fire"
import "./GetProfile.css"
function GetProfile({ match }) {
    // console.log(match)
    const uname = match.params.username.toLowerCase()
    const firestore = fire.firestore()
    const [userdata, setUserdata] = useState({})
    useEffect(() => {
        firestore
            .collection("users")
            .doc(uname)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    // console.log(doc.data())
                    setUserdata(doc.data())
                } else {
                    alert("user not found")
                }
            })
            .catch((err) => console.log(err))
        // firestore
        //     .collection("users")
        //     .where("username", "in", [uname])
        //     .get()
        //     .then((querySnapshot) => {
        //         querySnapshot.forEach((doc) => {
        //             console.log(doc.id + " " + doc.data())
        //         })
        //     })
        //     .catch((err) => console.log(err))
    }, [uname])
    return (
        <div className="getprofile-outer">
            {userdata ? <p>{userdata.email}</p> : <p>user not found</p>}
        </div>
    )
}

export default GetProfile
