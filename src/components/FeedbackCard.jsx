import React from "react";

const FeedbackCard = () => {
    const feedbacks = [
        {
            id: 1,
            name: "Alice Johnson",
            image: "https://i.ibb.co.com/cvQSq3B/360-F-640070383-9-LJ3e-TRSv-Oiw-Kyrm-BYgcjh-Slck-Dn-Ncxl.jpg" ,
            feedback:
                "Career Counseling has been a game-changer for me. Their advice helped me land my dream job!",
            rating: 5,
        },
        {
            id: 2,
            name: "Rabina Rabi",
            image: "https://i.ibb.co.com/0VbsYQr/360-F-186401650-6t-Xxwc5x3pwu-A9b-Yj-JG65l9p-CFRIAu06.jpg",
            feedback:
                "Excellent service! The personalized career guidance was incredibly helpful.",
            rating: 4.5,
        },
        
        {
            id: 3,
            name: "David Smith",
            image: "https://i.ibb.co.com/7RJ4xNv/man-wearing-t-shirt-gesturing-23-2149393650.jpg",
            feedback:
                "Very professional and insightful. Highly recommended for career planning.",
            rating: 5,
        },
    ];

    return (
        <div className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-[#20ad95] mb-10">
                    Client <span className="text-[#ff7029]">Feedback</span>
                </h2>

                {/* Feedback Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                    {feedbacks.map((feedback) => (
                        <div
                            key={feedback.id}
                            className="bg-white shadow-md rounded-lg p-6 text-center border"
                        >
                            {/* User Image */}
                            <img
                                src={feedback.image}
                                alt={feedback.name}
                                className="w-24 h-24 rounded-full mx-auto border-4 border-[#ff7029]"
                            />
                            
                            {/* User Name */}
                            <h3 className="text-xl font-bold mt-4 text-[#011b1c]">
                                {feedback.name}
                            </h3>
                            {/* Feedback */}
                            <p className="text-gray-700 mt-3">{feedback.feedback}</p>
                            {/* Rating */}
                            <p className="mt-4 text-[#ff7029] font-semibold">
                                Rating: {feedback.rating} ⭐
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;
