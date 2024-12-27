import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';

const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <Helmet>
                <title>My Profile - Career Counseling</title>
                <meta name="description" content="Login" />
            </Helmet>

            {/* Navbar */}
            <div className="bg-[#011b1c] py-2 sticky top-0 z-50">
                <Navbar />
            </div>

            {/* Profile Banner */}
            <div
                className="w-full h-48 lg:h-64 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://cdn.pixabay.com/photo/2016/09/19/11/39/flat-1680090_640.png')",
                }}
            >
                <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-2xl lg:text-4xl font-bold text-center text-white">My Profile</h1>
                </div>
            </div>

            {/* Profile Section */}
            <div className="container mx-auto py-10 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Profile Card */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="text-center">
                            <img
                                src={ user && user.photoURL || "https://i.ibb.co/7Rzq3v5/profile-pic.jpg"}
                                alt="Profile"
                                className="w-32 h-32 rounded-full mx-auto border-4 p-1 border-[#ff7029]"
                            />
                            <h2 className="text-2xl font-bold mt-4">{user?.displayName}</h2>
                            <p className="text-gray-600">Developer</p>
                        </div>
                        <div className="mt-6 space-y-4">
                            <p>
                                <span className="font-semibold">Email:</span>{' '}
                                <span className="text-gray-700">{user?.email}</span>
                            </p>
                            <p>
                                <span className="font-semibold">Phone:</span>{' '}
                                <span className="text-gray-700">{user && user?.phone || "+123-456-7890" }</span>
                            </p>
                            <p>
                                <span className="font-semibold">Location:</span>{' '}
                                <span className="text-gray-700">New York, USA</span>
                            </p>
                        </div>
                    </div>

                    {/* Profile Details */}
                    <div className="md:col-span-2 bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4 text-[#ff7029]">
                            About Me
                        </h2>
                        <p className="text-gray-700 mb-6">
                            I am a passionate Career Counselor with over 5 years of
                            experience guiding individuals toward their dream careers. I
                            specialize in personalized counseling, skill assessments, and
                            career path planning. I believe in empowering individuals to
                            reach their full potential.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 text-[#ff7029]">
                            Recent Activities
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>
                                Conducted a workshop on "Resume Building" for 50+ participants.
                            </li>
                            <li>Guided 30 students in selecting suitable career paths.</li>
                            <li>
                                Organized a career counseling event in collaboration with XYZ
                                University.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* FOoter */}
            <div className="bg-[#011b1c]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Profile;
