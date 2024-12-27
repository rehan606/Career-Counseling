import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ForgetPassword = () => {
    const location = useLocation();
    const [email, setEmail] = useState(location.state?.email || ''); // Get passed email

    const handleResetPassword = (e) => {
        e.preventDefault();
        console.log("Reset password for:", email);
        
        window.location.href = 'https://mail.google.com';
    };

    return (
        <div className="container mx-auto flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-md shadow-md w-8/12 lg:w-4/12 border">

                <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
                <form onSubmit={handleResetPassword}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">
                            Email Address
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
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;
