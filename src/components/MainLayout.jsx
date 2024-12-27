import React, { useContext } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Services from './Services';
import PricingCard from './PricingCard';
import FeedbackCard from './FeedbackCard';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../provider/AuthProvider';
import Loading from './Loading';
import Slide from './Slide';
import NewsLetter from './NewsLetter';

const MainLayout = () => {

    const {loading } = useContext(AuthContext);

    if(loading){
        return <Loading></Loading>
    };

    return (
        <div>
            <Helmet>
                <title>Home - Career Counseling</title> 
                <meta name="description" content="Welcome to Career Counseling" /> 
            </Helmet>
            <div>
                <header className='bg-[#011b1c]  py-2 sticky top-0 z-50 '>
                    <Navbar></Navbar>
                </header>

                <section className='bg-[#011b1c] pt-10 md:pb-10 lg:pb-0 '>
                    {/* <Slider></Slider> */}
                    <Slide></Slide>
                </section>

                <section id="services" className='bg-[#01292a]'>
                    <Services></Services>
                </section>

                <section id="pricing">
                    <PricingCard></PricingCard>
                </section>

                <section className='bg-gray-600'>
                    <FeedbackCard></FeedbackCard>
                </section>

                <section className=''>
                    <NewsLetter></NewsLetter>
                </section>


                <footer className='bg-[#011b1c]'>
                    <Footer></Footer>
                </footer>

            </div>
        </div>
    );
};

export default MainLayout;