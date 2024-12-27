import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Button } from 'react-scroll';


const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext);



    const links = <>
        <li className='mr-3 text-white font-semibold font-Roboto tracking-widest hover:text-[#ff7029]'> <NavLink to="/">Home</NavLink> </li>

        <li className='mr-3 text-white font-semibold font-Roboto tracking-widest hover:text-[#ff7029]'>
            <Button to="services" activeClass="active "  smooth={true} duration={500} offset={-50} > Services </Button>
        </li>

        <li className='mr-3 text-white font-semibold font-Roboto tracking-widest hover:text-[#ff7029]'>
            <Button to="pricing" activeClass="active " smooth={true} duration={500} offset={-50} > Pricing </Button>
        </li>

        <li className='mr-3 text-white font-semibold font-Roboto tracking-widest hover:text-[#ff7029]'> <NavLink to="/about">About</NavLink> </li>
        <li className='mr-3 text-white font-semibold font-Roboto tracking-widest hover:text-[#ff7029]'> <NavLink to="/contact">Contact</NavLink> </li>
        {
            user && <li className='mr-3 text-white font-semibold font-Roboto tracking-widest hover:text-[#ff7029]'> <NavLink to="/profile">My Profile</NavLink> </li>
        }
        {
            user && <li className='mr-3 text-white font-semibold font-Roboto tracking-widest hover:text-[#ff7029]'> <NavLink to="/serviceList">My Courses</NavLink> </li>
        }
    </>



    return (
        <div className='w-11/12 mx-auto '>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown mr-2">
                        <div tabIndex={0} role="button" className="btn text-orange-400 lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#011b1c] border-orange-400 border text-orange-400 rounded-box z-[1] mt-3 w-52 p-2 shadow ">

                            {links}
                        </ul>
                    </div>

                    {/* Logo  */}

                    <Link to="/" className="md:ml-40 lg:ml-0"> <img className='w-40' src="https://i.ibb.co.com/qF6XSr0/Logo-1-removebg-preview.png" alt="logo" border="0"></img>
                    </Link>




                </div>
                <div className="navbar-center hidden lg:flex items-center ">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user && user?.email ?
                            (<div className="dropdown dropdown-end flex items-center gap-3">
                                {/* <h2 className='text-white'>{user.displayName}</h2> */}
                                <div tabIndex={0} role="button" className="btn  btn-circle avatar ">

                                    <div className="w-10 rounded-full">

                                        <img
                                            alt="User Profile"
                                            src={user?.photoURL || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}
                                            className="object-cover w-full h-full"
                                        />


                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-56 w-52 p-2 shadow">

                                    <div className=' border-b px-4 '>

                                        {/* <div className="w-10 h-10 border rounded-full border-orange-400 p-1">

                                            <img
                                                alt="User Profile"
                                                src={user?.photoURL || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}
                                                className="object-cover w-full h-full rounded-full"
                                            />


                                        </div> */}

                                        <div >
                                            <h2 className='text-orange-400 pt-3 font-bold rounded-lg text-center text-md  '>{user.displayName}</h2>
                                            <h2 className='text-orange-400   rounded-lg text-center text-xs mb-3  '>{user.email}</h2>
                                        </div>

                                        
                                    </div>
                                    <li>
                                        <Link to="/profile" className="justify-between text-green-500  font-semibold">
                                            Profile
                                            <span className="badge bg-green-500 text-white">New</span>
                                        </Link>
                                    </li>
                                    <li className='font-semibold text-blue-500'><a>Settings</a></li>


                                    <li
                                        onClick={() => {
                                            if (window.confirm('Are you sure you want to log out?')) {
                                                logOutUser();
                                            }
                                        }}
                                        className="text-red-500 font-semibold"
                                    >
                                        <Link to="/">Logout</Link>
                                    </li>
                                </ul>
                            </div>)

                            :

                            (<Link to='/auth/login' className="bg-[#ff7029] px-10 py-4 text-white font-semibold rounded-md cursor-pointer">  Login </Link>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;