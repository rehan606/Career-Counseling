import React from 'react';

const NewsLetter = () => {
    return (
        <div className="py-10 bg-[#01292a] flex items-center justify-center px-4">
            <div className="w-full bg-[#011b1c] py-8 px-10 rounded-lg shadow-lg max-w-5xl">
                <h1 className="text-3xl font-extrabold text-orange-400 text-center mb-6">
                    Subscribe to Our Newsletter
                </h1>
                <p className="text-gray-600 text-center mb-8">
                    Get the latest updates, news, and exclusive offers directly in your inbox!
                </p>
                <form className="flex flex-col md:flex-row items-center w-full gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <button
                        type="submit"
                        className="w-full md:w-auto bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;
