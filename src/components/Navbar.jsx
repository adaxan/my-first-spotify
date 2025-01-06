import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-full flex justify-between items-center font-semibold py-4 px-6 bg-gradient-to-r from-purple-500 to-indigo-500 shadow-md">
                <div className="flex items-center gap-3">
                    <img
                        onClick={() => navigate(-1)}
                        className="w-10 h-10 bg-black p-2 rounded-full cursor-pointer hover:bg-gray-700 transition-all duration-300"
                        src={assets.arrow_left}
                        alt="Go Back"
                    />
                    <img
                        onClick={() => navigate(1)}
                        className="w-10 h-10 bg-black p-2 rounded-full cursor-pointer hover:bg-gray-700 transition-all duration-300"
                        src={assets.arrow_right}
                        alt="Go Forward"
                    />
                </div>
                <div className="flex items-center gap-6">
                    <p className="bg-white text-black text-sm px-5 py-2 rounded-full hidden md:block cursor-pointer hover:shadow-lg transition-all duration-300">
                        Explore Premium
                    </p>
                    
                    <p className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
                        A
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-3 mt-4 px-6">
                <p className="bg-white text-black px-5 py-2 rounded-full cursor-pointer hover:shadow-lg transition-all duration-300">
                    All
                </p>
                <p className="bg-black text-white px-5 py-2 rounded-full cursor-pointer hover:bg-gray-800 transition-all duration-300">
                    Music
                </p>
                <p className="bg-black text-white px-5 py-2 rounded-full cursor-pointer hover:bg-gray-800 transition-all duration-300">
                    Podcasts
                </p>
            </div>
        </>
    );
}

export default Navbar;