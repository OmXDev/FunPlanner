import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Topbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const createEventHandler = () => {
        navigate("/create-event");
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const logoutHandler = async () => {
    try {
        navigate('/login');
        const res = await axios.get('http://localhost:8000/api/v1/user/logout', {
            withCredentials: true
        });
        
        console.log(res.data); // Log the response to check its structure

        if (res.data.success) {
            dispatch(setAuthUser(null)); // Reset the authentication state
            navigate('/login'); // Redirect to login
        } else {
            console.error('Logout failed:', res.data.message); // Handle failure
        }
    } catch (error) {
        console.error('Logout error:', error.response ? error.response.data : error.message); // Log errors
    }
}
    // Sample user name
    const userName = "John Doe"; // Replace with actual user data
    const userInitials = userName.split(" ").map(name => name.charAt(0)).join("").toUpperCase();

    return (
        <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-white text-3xl font-bold">
                    EventPlanner
                </Link>

                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link to="#events" className="text-white hover:text-gray-300" onClick={() => scrollToSection('events')}>Events</Link>
                    <Link to="#about" className="text-white hover:text-gray-300" onClick={() => scrollToSection('about')}>About</Link>
                    <Link to="#contact" className="text-white hover:text-gray-300" onClick={() => scrollToSection('contact')}>Contact</Link>
                </nav>

                <button
                    onClick={createEventHandler}
                    className="hidden md:block bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-gray-200"
                >
                    Create Event
                </button>

                {/* User Profile Dropdown */}
                <div className="relative inline-block text-left">
    <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center justify-center h-10 w-10 bg-white rounded-full text-purple-700 hover:bg-gray-200 transition duration-200 ease-in-out shadow-lg"
    >
        {userInitials}
    </button>

    {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 border border-gray-200">
            <div className="py-1">
                <button 
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none transition duration-200 ease-in-out"
                    onClick={logoutHandler}
                >
                    Logout
                </button>
            </div>
        </div>
    )}
</div>

            </div>

            {/* Mobile Menu */}
            <div className="md:hidden px-4 py-3">
                <div className="flex justify-between items-center">
                    <button className="text-white">Menu</button>
                </div>
            </div>
        </header>
    );
};

export default Topbar;
