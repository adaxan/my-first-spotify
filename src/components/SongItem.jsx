import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

function SongItem({ name, image, desc, id }) {
    const { playWithId } = useContext(PlayerContext);

    return (
        <div 
            onClick={() => playWithId(id)} 
            className='min-w-[200px] p-4 rounded-lg cursor-pointer bg-[#1E1E1E] hover:bg-[#2A2A2A] transition duration-300'>
            <img 
                className='rounded-lg w-full h-auto object-cover mb-3' 
                src={image} 
                alt={`${name} Cover`} 
            />
            <p className='text-lg font-semibold text-white truncate'>{name}</p>
            <p className='text-sm text-gray-400 truncate'>{desc}</p>
        </div>
    );
}

export default SongItem;