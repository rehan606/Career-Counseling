

const ErrorPage = () => {
    
    return (
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center min-h-screen">
            <div className="text-center px-8 py-12 bg-white rounded-lg shadow-lg max-w-md w-full">
                {/* Animated Icon */}
                <div className="relative mb-6 animate-pulse">
                    <div className="w-36 h-36 bg-gradient-to-br from-red-400 via-red-500 to-red-600 rounded-full mx-auto flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-16 h-16 text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.172 9.172a4 4 0 015.656 0L20.485 15H3.514l5.657-5.828z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Error Text */}
                <h1 className="text-5xl font-extrabold text-gray-800 mb-4 tracking-wide">
                    Oops!
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                    The page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Back to Home Button */}
                <a
                    href="/"
                    className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition transform hover:scale-105 duration-300"
                >
                    Go Back to Home
                </a>
            </div>
        </div>
    );
};

export default ErrorPage;