import React from "react"
import "../Signin/Login.css"
const Login = (props) => {
    const {
        email,
        password,
        setEmail,
        setPassword,
        handleSignup,
        handleLogin,
        clearErrors,
        clearInputs,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props
    return (
        <div className="login-outer">
            <input
                type="email"
                className="login-email"
                autofocus
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <span className="login-error error-message">{emailError}</span>
            <input
                type="password"
                className="login-password"
                required
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <span className="login-error error-message">{passwordError}</span>
            <span
                onClick={() => {
                    setHasAccount(!hasAccount)
                }}
            >
                {" "}
                already has an account
            </span>
            {hasAccount ? (
                <button className="profile-login-button" onClick={handleLogin}>
                    Login
                </button>
            ) : (
                <button className="profile-login-button" onClick={handleSignup}>
                    Signup
                </button>
                
            )}
            
        </div>
    )
}

export default Login
