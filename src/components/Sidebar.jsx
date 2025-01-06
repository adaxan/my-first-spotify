import React from 'react';
import { assets } from "../assets/assets";
import { useNavigate } from 'react-router-dom';

function Sidebar() {

    const navigate = useNavigate();

    return (
        <div className='w-[20%] h-full p-4 flex flex-col text-white bg-[#181818] lg:flex'>
            <div className='mb-6'>
                <div 
                    onClick={() => navigate("/")} 
                    className='flex items-center gap-4 p-3 rounded-md hover:bg-[#282828] cursor-pointer'>
                    <img className='w-6' src={assets.home_icon} alt="Home Icon" />
                    <p className='font-medium'>Home</p>
                </div>
                <div 
                    onClick={() => navigate("/search")} 
                    className='flex items-center gap-4 p-3 rounded-md hover:bg-[#282828] cursor-pointer'>
                    <img className='w-6' src={assets.search_icon} alt="Search Icon" />
                    <p className='font-medium'>Search</p>
                </div>
            </div>
            <div className='flex flex-col bg-[#202020] rounded-lg'>
                <div className='p-4 flex items-center justify-between border-b border-[#333]'>
                    <div className='flex items-center gap-3'>
                        <img className='w-7' src={assets.stack_icon} alt="Library Icon" />
                        <p className='font-semibold'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-5 cursor-pointer' src={assets.arrow_icon} alt="Arrow Icon" />
                        <img className='w-5 cursor-pointer' src={assets.plus_icon} alt="Plus Icon" />
                    </div>
                </div>
                <div className='p-5'>
                    <div className='mb-4 bg-[#242424] rounded-lg p-4 flex flex-col'>
                        <h2 className='text-lg font-semibold mb-2'>Create your first playlist</h2>
                        <p className='text-sm text-gray-400'>It's easy, we'll help you get started.</p>
                        <button 
                            className='mt-3 px-4 py-2 bg-[#1DB954] text-black font-medium text-sm rounded-full hover:bg-[#1ed760]'>
                            Create Playlist
                        </button>
                    </div>
                    <div className='bg-[#242424] rounded-lg p-4 flex flex-col'>
                        <h2 className='text-lg font-semibold mb-2'>Discover podcasts</h2>
                        <p className='text-sm text-gray-400'>Find and follow podcasts you'll love.</p>
                        <button 
                            className='mt-3 px-4 py-2 bg-[#1DB954] text-black font-medium text-sm rounded-full hover:bg-[#1ed760]'>
                            Browse Podcasts
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;