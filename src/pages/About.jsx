import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';


const About = () => {
  return (
    <div>
      <Helmet>
        <title>About - Career Counseling</title>
        <meta name="description" content="Learn more about Career Counseling" />
      </Helmet>

      {/* Navbar */}
      <div className="bg-[#011b1c] py-2 sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Banner */}
      <div
        className="w-full h-48 lg:h-64 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2016/09/19/11/39/flat-1680090_640.png')",
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center px-5">
          <h1 className="text-2xl lg:text-4xl text-white font-bold text-center">
            About <span className="text-[#ff7029]">Career Counseling</span>
          </h1>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container mx-auto py-10 px-4">
        <div className="space-y-6">
          {/* Introduction */}
          <h2 className="text-3xl font-bold text-[#ff7029] text-center mb-6">
            Welcome to Career Counseling
          </h2>
          <p className="text-gray-700 text-center md:text-lg">
            At Career Counseling, we are dedicated to guiding individuals
            towards fulfilling careers. Our mission is to empower students,
            professionals, and career changers with the right tools and
            personalized advice to achieve their professional aspirations.
          </p>

          {/* Purpose Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src="https://i.ibb.co.com/H2gnrxF/5b51e28ab1dd6.jpg"
              alt="Purpose"
              className="rounded-lg shadow-md"
            />

            <div>
              <h3 className="text-2xl font-bold text-[#ff7029] mb-4">
                Why We Exist
              </h3>
              <p className="text-gray-700">
                Our purpose is simple yet powerful: to provide meaningful
                career counseling that transforms lives. Whether you're a
                student exploring career paths, a professional seeking growth,
                or someone considering a career change, we’re here to help you
                navigate your journey.
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="bg-[#011b1c] text-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-center text-[#ff7029] mb-6">
              What We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-[#ff7029]">
                  Personalized Counseling
                </h4>
                <p>
                  Get one-on-one guidance tailored to your unique career goals
                  and aspirations.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#ff7029]">
                  Career Workshops
                </h4>
                <p>
                  Participate in workshops that equip you with essential career
                  skills and knowledge.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#ff7029]">
                  Resume & Interview Prep
                </h4>
                <p>
                  Create standout resumes and ace interviews with professional
                  guidance.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#ff7029] mb-4">
                Our Achievements
              </h3>
              <p className="text-gray-700">
                We take pride in helping thousands of individuals realize their
                potential and achieve career success. Our testimonials and
                success stories are a testament to the impact we've made.
              </p>
            </div>
            <img
              src="https://i.ibb.co.com/g9rvC2t/79cd9012b6feb5781d6fea8afe4788e1.png"
              alt="Achievements"
              className="rounded-lg shadow-md"
            />


          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-[#011b1c]">
        <Footer></Footer>
      </div>

    </div>
  );
};

export default About;
