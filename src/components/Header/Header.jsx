import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="text-white">
            <div className="wrapper">
                <div className="header_con flex justify-between items-center py-4">
                    <div className="header_logo text-4xl font-bold">vb.dev</div>

                    {/* Hamburger Menu Button */}
                    <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>

                    {/* Desktop Navigation Menu */}
                    <nav className={`hidden md:flex`}>
                        <ul className="flex space-x-4">
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? "text-red-500" : "hover:text-red-600"} > Home </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-500" : "hover:text-red-600"} > About Me </NavLink>
                            </li>
                            <li>
                                <NavLink to="/work" className={({ isActive }) => isActive ? "text-red-500" : "hover:text-red-600"} > Work </NavLink>
                            </li>
                            <li>
                                <NavLink to="/project" className={({ isActive }) => isActive ? "text-red-500" : "hover:text-red-600"} > Projects </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-500" : "hover:text-red-600"} > Contact </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div id="mobile-menu" className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col space-y-2 p-5 bg-gray-950 absolute right-4 w-[150px] z-10 text-right">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-red-600" : "hover:text-red-500"} > Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-600" : "hover:text-red-500"} > About Me </NavLink>
                    </li>
                    <li>
                        <NavLink to="/work" className={({ isActive }) => isActive ? "text-red-600" : "hover:text-red-500"} > Work </NavLink>
                    </li>
                    <li>
                        <NavLink to="/project" className={({ isActive }) => isActive ? "text-red-500" : "hover:text-red-600"} > Projects </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-600" : "hover:text-red-500"} > Contact </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
