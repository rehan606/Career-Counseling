import React from "react";

const PricingCard = () => {
    return (
        <div className="bg-[#011b1c] py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-10">
                    Our <span className="text-[#ff7029]">Pricing Plans</span>
                </h2>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Basic Plan */}
                    <div className="bg-[#01292a] shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-2xl font-bold text-[#ff7029] mb-4">
                            Basic Plan
                        </h3>
                        <p className="text-gray-100 mb-6">
                            Perfect for those just starting their career journey.
                        </p>
                        <p className="text-4xl font-bold text-[#ff7029] mb-4">$49</p>
                        <ul className="space-y-3 text-gray-300 mb-6">
                            <li>1 Counseling Session</li>
                            <li>Email Support</li>
                            <li>Basic Career Guide</li>
                        </ul>
                        <button className="bg-[#ff7029] text-white py-2 px-4 rounded hover:bg-[#e66924] transition">
                            Get Started
                        </button>
                    </div>

                    {/* Standard Plan */}
                    <div className="bg-[#01292a] shadow-lg rounded-lg p-6 text-center border-2 border-[#ff7029]">
                        <h3 className="text-2xl font-bold text-[#ff7029] mb-4">
                            Standard Plan
                        </h3>
                        <p className="text-gray-100 mb-6">
                            Best for those looking to advance their career.
                        </p>
                        <p className="text-4xl font-bold text-[#ff7029] mb-4">$99</p>
                        <ul className="space-y-3 text-gray-300 mb-6">
                            <li>3 Counseling Sessions</li>
                            <li>Email & Phone Support</li>
                            <li>Personalized Career Guide</li>
                        </ul>
                        <button className="bg-[#ff7029] text-white py-2 px-4 rounded hover:bg-[#e66924] transition">
                            Choose Plan
                        </button>
                    </div>

                    {/* Premium Plan */}
                    <div className="bg-[#01292a]  shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-2xl font-bold text-[#ff7029] mb-4">
                            Premium Plan
                        </h3>
                        <p className="text-gray-100  mb-6 ">
                            Comprehensive support for long-term career goals.
                        </p>
                        <p className="text-4xl font-bold mb-4 text-[#ff7029]">$199</p>
                        <ul className="space-y-3 text-gray-300 mb-6">
                            <li>Unlimited Counseling Sessions</li>
                            <li>24/7 Support</li>
                            <li>Advanced Career Planning</li>
                        </ul>
                        <button className="bg-[#ff7029] text-white py-2 px-4 rounded hover:bg-[#e66924] transition">
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;
