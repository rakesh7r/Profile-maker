import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}))

const LoginTwo = (props) => {
    const classes = useStyles()
    const [open, setOpen] = useState(true)
    const {
        email,
        password,
        setEmail,
        setPassword,
        handleSignup,
        handleLogin,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
        handleGoogleLogin,
        username,
        setUsername,
        name,
        setName,
    } = props

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            disableBackdropClick
            BackdropProps={{
                timeout: 500,
            }}
            style={{ width: "100%", height: "100%" }}
        >
            <div
                className="login-modal-cont"
                style={{
                    width: "30%",
                    backgroundColor: "white",
                    padding: "80px",
                    paddingTop: "30px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <center>
                    <span className="span-bold">
                        {hasAccount ? <h1>Signin</h1> : <h1>Signup</h1>}
                    </span>
                </center>
                {hasAccount ? null : (
                    <TextField
                        id="outlined-basic"
                        label="username"
                        variant="outlined"
                        style={{
                            marginBottom: "15px",
                        }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                )}
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    style={{
                        marginBottom: "15px",
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* {hasAccount ? null : (
                    <TextField
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                        style={{
                            marginBottom: "15px",
                        }}
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                    />
                )} */}
                <TextField
                    type="password"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    style={{
                        marginBottom: "15px",
                    }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {emailError || passwordError ? (
                    <span className="login-error error-message">
                        {emailError || passwordError}
                    </span>
                ) : null}
                {hasAccount ? (
                    <Button
                        variant="contained"
                        color="primary"
                        style={{
                            marginBottom: "15px",
                            height: "49px",
                        }}
                        onClick={handleLogin}
                    >
                        Signin
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        color="primary"
                        style={{
                            marginBottom: "15px",
                            height: "49px",
                        }}
                        onClick={handleSignup}
                    >
                        Signup
                    </Button>
                )}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setHasAccount(!hasAccount)}
                    style={{
                        backgroundcolor: "white",
                        height: "49px",
                    }}
                >
                    {hasAccount ? (
                        <span>New User?</span>
                    ) : (
                        <span>Already a User?</span>
                    )}
                </Button>
            </div>
        </Modal>
    )
}
export default LoginTwo
