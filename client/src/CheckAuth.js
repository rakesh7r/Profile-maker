import React, { useState, useEffect } from "react"
import fire from "./Configurations/fire"
import firebase from "firebase"
import Login from "./Signin/Login"

import App from "./App"
import LoginTwo from "./Signin/LoginTwo"
const CheckAuth = () => {
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [hasAccount, setHasAccount] = useState(true)
    const [username, setUsername] = useState("")

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
    const authListner = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs()
                console.log(user)
                setUser(user)
            } else setUser("")
        })
    }

    useEffect(() => {
        authListner()
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
                />
            ) : (
                <div>
                    <App handleLogout={handleLogout}></App>
                </div>
            )}
        </div>
    )
}

export default CheckAuth
