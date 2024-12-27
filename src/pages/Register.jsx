import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import {  getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';
const auth = getAuth(app);

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { createUser, setUser, updateUserProfile } = useContext(AuthContext);

    // Form validation states
    const [error, setError] = useState({});
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState("");

    const evaluatePasswordStrength = (value) => {
        setPassword(value);

        const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

        if (strongRegex.test(value)) {
            setStrength("Strong");
        } else if (mediumRegex.test(value)) {
            setStrength("Medium");
        } else if (value.length > 0) {
            setStrength("Weak");
        } else {
            setStrength("");
        }
    };

    const handleCreateUser = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        if (name.length < 5) {
            setError({ ...error, name: "Name must be more than 5 characters long" });
            return;
        }

        if (!agreeToTerms) {
            setError({ ...error, terms: "You must agree to the Terms and Conditions" });
            return;
        }

        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/");
                    })
                    .catch((error) => console.error(error));

                Swal.fire({
                    title: "Congratulations!",
                    text: "Account created successfully!",
                    icon: "success",
                });
            })
            .catch((error) => console.error("ERROR", error.message));
    };


    // Login with google 

    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
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
    }

    return (

        <div>
            <Helmet>
                <title>Register - Career Counseling</title>
                <meta name="description" content="Register Account" />
            </Helmet>

            <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-5">
                <div className="bg-white p-8 rounded-md shadow-md md:w-6/12 lg:w-4/12 border ">
                    <h2 className="text-2xl font-bold text-center mb-6">Create an account</h2>

                    <form onSubmit={handleCreateUser}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                            {error.name && (
                                <label className="block text-red-500 text-xs mt-1">{error.name}</label>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="photo">
                                Photo URL
                            </label>
                            <input
                                type="text"
                                name="photo"
                                id="photo"
                                placeholder="Enter your photo URL"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="email">
                                Username or Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <div className="mb-4 relative">
                            <label className="block text-gray-700 mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => evaluatePasswordStrength(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                            {strength && (
                                <div
                                    className={`mt-2 text-sm font-semibold ${strength === "Strong"
                                        ? "text-green-600"
                                        : strength === "Medium"
                                            ? "text-yellow-600"
                                            : "text-red-600"
                                        }`}
                                >
                                    {strength} Password
                                </div>
                            )}
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-10 right-4 text-2xl"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        <div className="mb-4 flex items-center">
                            <input
                                type="checkbox"
                                id="agreeToTerms"
                                name="agreeToTerms"
                                checked={agreeToTerms}
                                onChange={() => setAgreeToTerms(!agreeToTerms)}
                                className="mr-2"
                            />
                            <label htmlFor="agreeToTerms" className="text-gray-700">
                                I agree to the{" "}
                                <a
                                    href="/terms"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline"
                                >
                                    Terms and Conditions
                                </a>
                            </label>
                        </div>
                        {error.terms && (
                            <p className="text-red-500 text-xs mb-4">{error.terms}</p>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
                        >
                            Create an account
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-700 mt-4">
                        Already have an account?{" "}
                        <Link to="/auth/login" className="text-orange-500 hover:underline">
                            Login
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

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
