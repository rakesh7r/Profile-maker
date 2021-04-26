import React, { useState, useEffect } from "react"
import fire from "../Configurations/fire"

function Test() {
    const firestore = fire.firestore()
    const [data, setData] = useState(null)

    useEffect(() => {
        firestore
            .collection("users")
            .doc("rakeshraki2453@gmail.com")
            .get()
            .then((doc) => {
                if (doc.exists) {
                    console.log(doc.data())
                    setData(doc.data())
                }
            })
            .catch((err) => console.log(err))
    },[])

    return (
        <div>
            {data ? <p>{ data.email}</p> :null}
        </div>
    )
}

export default Test
