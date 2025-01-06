import React from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../assets/assets';
import { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

function DisplayAlbum() {

    const { id } = useParams();
    const albumData = albumsData[id];
    const { playWithId } = useContext(PlayerContext);

    return (
        <>
            <Navbar />
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img className='w-48 h-48 object-cover rounded-lg shadow-lg' src={albumData.image} alt={`${albumData.name} Cover`} />
                <div className='flex flex-col'>
                    <p className='text-sm text-gray-400'>Playlist</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl text-white'>{albumData.name}</h2>
                    <h4 className='text-gray-300'>{albumData.desc}</h4>
                    <p className='mt-2 text-gray-400'>
                        <img className='inline-block w-5 mr-2' src={assets.spotify_logo} alt="Spotify Logo" />
                        <b>Spotify</b>
                        <span className='mx-2'>·</span>
                        123,456 likes
                        <span className='mx-2'>·</span>
                        <b>50 songs</b>, about 2 hr 30 min
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-gray-400 text-sm'>
                <p><b className='mr-4'>#</b>Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date Added</p>
                <img className='m-auto w-4' src={assets.clock_icon} alt="Clock Icon" />
            </div>
            <hr className='border-gray-600' />

            {
                songsData.map((item, index) => (
                    <div 
                        onClick={() => playWithId(item.id)} 
                        key={index} 
                        className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-gray-400 hover:bg-[#2A2A2A] rounded-lg cursor-pointer transition duration-300'>
                        <p className='text-white flex items-center'>
                            <b className='mr-4 text-gray-400'>{index + 1}</b>
                            <img className='w-10 h-10 object-cover rounded-lg mr-5' src={item.image} alt={`${item.name} Thumbnail`} />
                            {item.name}
                        </p>
                        <p className='text-sm'>{albumData.name}</p>
                        <p className='text-sm hidden sm:block'>5 days ago</p>
                        <p className='text-sm text-center'>{item.duration}</p>
                    </div>
                ))
            }
        </>
    );
}

export default DisplayAlbum;