import React from "react"
import "./Login.css"
const LoginTow = (props) => {
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
    } = props
    return (
        <div className="login-outer-container">
            <div className="login-left-container">
                <h1 className="login-left-h1">
                    Design And Showcase Your Profile Here
                </h1>
            </div>
            <div className="login-right-container">
                <div className="login-right-intermediate">
                    <div className="login-header-h2">
                        <span className="span-bold">
                            {hasAccount ? <h2>Signin</h2> : <h2>Signup</h2>}
                        </span>
                    </div>
                    <input
                        type="email"
                        className="login-email login-text-feild"
                        autoFocus
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <input
                        type="password"
                        className="login-password login-text-feild"
                        required
                        value={password}
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    {emailError || passwordError ? (
                        <span className="login-error error-message">
                            {emailError || passwordError}
                        </span>
                    ) : null}
                    <br />
                    {hasAccount ? (
                        <button className="login-button" onClick={handleLogin}>
                            Signin
                        </button>
                    ) : (
                        <button className="login-button" onClick={handleSignup}>
                            Signup
                        </button>
                    )}
                    <br />
                    <span
                        className="span-bold login-span"
                        onClick={() => setHasAccount(!hasAccount)}
                    >
                        Already a User?
                    </span>
                    <br />
                    <button
                        className="login-button sign-in-with-google"
                        onClick={handleGoogleLogin}
                    >
                        Signin with Google
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginTow
