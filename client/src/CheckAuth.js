import React, { useState, useEffect } from "react"
import fire from "./Configurations/fire"
import firebase from "firebase"
import Login from "./Signin/Login"

import App from "./App"
import LoginTwo from "./Signin/LoginTwo"
const CheckAuth = () => {
    const [user, setUser] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    const [hasAccount, setHasAccount] = useState(true)
    const [username, setUsername] = useState(null)
    const [name, setName] = useState(null)

    const handleLogin = () => {
        clearErrors()
        fire.auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-defined":
                        setEmailError(err.message)
                        break
                    case "auth/wrong-password":
                        setPasswordError(err.message)
                        break
                    default:
                        break
                }
            })
    }

    const handleSignup = () => {
        clearErrors()
        fire.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user =>
            {
                var u = fire.auth().currentUser
                u.updateProfile({
                    displayName: name,
                    username: name,
                })
                    .then(() => console.log("data updated successfully"))
                    .catch((err) => console.log("error updating profile"))
                })
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message)
                        break
                    case "auth/weak-password":
                        setPasswordError(err.message)
                        break
                    default:
                        break
                }
            })
    }
    const handleLogout = () => {
        fire.auth().signOut()
    }

    const handleGoogleLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider()
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential
                var token = credential.accessToken
                var user = result.user
                console.log("token : " + token)
                console.log("user : " + user)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const authListner = () => {}

    useEffect(() => {
        const unsubscribe = fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs()
                console.log(user)
                setUser(user)
            } else setUser(null)
        })
        // return () => {
        //     unsubscribe()
        // }
    }, [])

    const clearInputs = () => {
        setUser("")
        setPassword("")
    }
    const clearErrors = () => {
        setEmailError("")
        setPasswordError("")
    }
    return (
        <div>
            {!user ? (
                <LoginTwo
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    handleSignup={handleSignup}
                    handleLogin={handleLogin}
                    clearErrors={clearErrors}
                    clearInputs={clearInputs}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}
                    handleGoogleLogin={handleGoogleLogin}
                    username={username}
                    setUsername={setUsername}
                    name={name}
                    setName={setName}
                />
            ) : (
                <div>
                    <App user={user} handleLogout={handleLogout}></App>
                    {console.log(name, username)}
                </div>
            )}
        </div>
    )
}

export default CheckAuth
