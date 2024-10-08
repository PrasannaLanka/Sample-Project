import React, { useState } from "react";
import "./App.css";

function App() {
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and sign-up
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if user is logged in

    // Function to handle form submission for login
    const handleLogin = async e => {
        e.preventDefault();

        // Get values from form fields
        const username = e.target.username.value;
        const password = e.target.password.value;

        const user = {
            username: username,
            password: password,
        };

        try {
            // Send login request to the backend
            const response = await fetch(
                "http://localhost:8080/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                }
            );


            if (response.ok) {
                const data = await response.json();
                setErrorMessage(""); // Clear error messages
                setSuccessMessage("Login successful!"); // Display success message
                setIsLoggedIn(true); // Set logged in state
                console.log("User data:", data); // Handle further actions like storing user data
            } 
            else {
                const error = await response.text(); // Capture error message from the backend
                setSuccessMessage(""); // Clear success messages
                setErrorMessage(error); // Display error message
            }
        } catch (error) {
            // Catch network or unexpected errors
            setSuccessMessage("");
            setErrorMessage(
                "An error occurred during login. Please try again."
            );
            console.error("Login error:", error);
        }
    };

    // Function to handle form submission for sign-up
    const handleSignUp = async e => {
        e.preventDefault();

        // Get values from form fields
        const username = e.target.username.value;
        const password = e.target.password.value;

        const user = {
            username: username,
            password: password,
        };

        try {
            // Send sign-up request to the backend
            const response = await fetch(
                "http://localhost:8080/api/auth/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                }
            );

            if (response.ok) {
                setErrorMessage(""); // Clear error messages
                setSuccessMessage("Account created successfully!"); // Show success message
            } else {
                const error = await response.text(); // Capture error message from the backend
                setSuccessMessage(""); // Clear success messages
                setErrorMessage(error); // Display error message
            }
        } catch (error) {
            // Catch network or unexpected errors
            setSuccessMessage("");
            setErrorMessage(
                "An error occurred during sign-up. Please try again."
            );
            console.error("Sign-up error:", error);
        }
    };

    // Toggle between login and sign-up forms
    const toggleForm = () => {
        setIsLogin(!isLogin);
        setErrorMessage("");
        setSuccessMessage("");
    };

    // Handle logout
    const handleLogout = () => {
        setIsLoggedIn(false); // Update logged in state
        setSuccessMessage("Logout successful!"); // Show success message
        // Optionally, clear any other user data here
    };

    return (
        <div className="login-container">
            {isLoggedIn ? (
                <>
                    <h2>Welcome back!</h2>
                    <button onClick={handleLogout}>Logout</button>
                    {/* Optionally, display user-specific information here */}
                </>
            ) : (
                <form
                    className="login-form"
                    onSubmit={isLogin ? handleLogin : handleSignUp}
                >
                    <div className="form-header">
                        <h2>
                            {isLogin ? "Welcome back!" : "Create an account"}
                        </h2>
                    </div>

                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        autoComplete="username"
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                    />

                    <button type="submit">
                        {isLogin ? "Login" : "Sign Up"}
                    </button>

                    {/* Display error message if there's an error */}
                    {errorMessage && (
                        <p className="error-message">{errorMessage}</p>
                    )}

                    {/* Display success message if operation is successful */}
                    {successMessage && (
                        <p className="success-message">{successMessage}</p>
                    )}

                    {/* Toggle between Login and Sign-Up */}
                    <p className="toggle-text">
                        {isLogin
                            ? "Don't have an account yet? "
                            : "Already have an account? "}
                        <button type="button" onClick={toggleForm}>
                            {isLogin ? "Sign Up" : "Login"}
                        </button>
                    </p>
                </form>
            )}
        </div>
    );
}

export default App;
