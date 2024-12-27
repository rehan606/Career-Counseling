import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            <header className='bg-[#011b1c] h-22'>
                <Navbar></Navbar>
            </header>

            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;