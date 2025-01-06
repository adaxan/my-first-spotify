import React from 'react';
import Navbar from './Navbar';
import { albumsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import { songsData } from '../assets/assets';
import SongItem from './SongItem';

function DisplayHome() {
    return (
        <>
            <Navbar />
            <div className='container mx-auto mb-8'>
                <h1 className='my-5 font-extrabold text-3xl text-white'>Featured Charts</h1>
                <div className='flex gap-4 overflow-x-scroll no-scrollbar'>
                    {albumsData.map((item, index) => (
                        <AlbumItem 
                            key={index} 
                            name={item.name} 
                            desc={item.desc} 
                            id={item.id} 
                            image={item.image} 
                        />
                    ))}
                </div>
            </div>
            <div className='mb-8'>
                <h1 className='my-5 font-extrabold text-3xl text-white'>Today's Biggest Hits</h1>
                <div className='flex gap-4 overflow-x-scroll no-scrollbar'>
                    {songsData.map((item, index) => (
                        <SongItem 
                            key={index} 
                            name={item.name} 
                            desc={item.desc} 
                            id={item.id} 
                            image={item.image} 
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default DisplayHome;