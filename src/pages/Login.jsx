import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { Helmet } from 'react-helmet-async';

const auth = getAuth(app);

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState(''); // State for email
    const { loginUser, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation()
    

    const handleLogin = (e) => {
        e.preventDefault();

        const password = e.target.password.value;

        if (!email || !password) {
            Swal.fire({
                title: "Error",
                text: "Please enter both email and password.",
                icon: "warning",
            });
            return;
        }

        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                navigate(location?.state ? location.state : "/");
                setUser(user);

                // Sweet Alert
                Swal.fire({
                    title: "Congratulations!",
                    text: "You Successfully Logged in!",
                    icon: "success",
                });
            })
            .catch((error) => {
                let errorMessage = "Please Enter valid email and password. and try again.";
                if (error.code === "auth/user-not-found") {
                    errorMessage = "No user found with this email.";
                } else if (error.code === "auth/wrong-password") {
                    errorMessage = "Incorrect password.";
                } else if (error.code === "auth/invalid-email") {
                    errorMessage = "Invalid email address.";
                }

                Swal.fire({
                    title: "Login Failed",
                    text: errorMessage,
                    icon: "error",
                });
            });
    };

    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate('/');

                Swal.fire({
                    title: "Congratulations!",
                    text: "Google Login Successful!",
                    icon: "success",
                });
            })
            .catch((error) => {
                Swal.fire({
                    title: "Error",
                    text: "Google Login Failed: " + error.message,
                    icon: "error",
                });
                setUser(null);
            });
    };

    return (
        <div>
            <Helmet>
                <title>Login - Career Counseling</title>
                <meta name="description" content="Login" />
            </Helmet>

            <div className="container mx-auto flex items-center justify-center min-h-screen pt-5 lg:pt-0">
                <div className="bg-white p-8 rounded-md shadow-md md:w-6/12 lg:w-4/12 border">
                    <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="email">
                                Username or Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                        <div className="mb-4 relative">
                            <label className="block text-gray-700 mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="text-2xl absolute top-10 right-4"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span className="text-sm text-gray-700">Remember Me</span>
                            </label>
                            <Link
                                to="/auth/forgetPassword"
                                state={{ email }}
                                className="text-sm text-orange-500 hover:underline"
                            >
                                Forgot Password
                            </Link>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-700 mt-4">
                        Don't have an account?{" "}
                        <Link
                            to="/auth/register"
                            className="text-orange-500 hover:underline"
                        >
                            Create an account
                        </Link>
                    </p>

                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-2 text-gray-500">Or</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    <div className="flex flex-col space-y-4">
                        <button
                            onClick={handleGoogleLogin}
                            className="flex items-center justify-center bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
                        >
                            <FaGoogle className="mr-2" /> Continue with Google
                        </button>

                        <button className="flex items-center justify-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                            <FaFacebook className="mr-2" /> Continue with Facebook
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
