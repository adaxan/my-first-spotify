import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

function Player() {
    const { track, seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong } = useContext(PlayerContext);

    return (
        <div className='h-[10%] bg-black flex items-center justify-between px-6 py-3 text-white'>
            <div className='hidden lg:flex items-center gap-5'>
                <img className='w-14 h-14 rounded-md object-cover' src={track.image} alt="Track" />
                <div className='text-sm'>
                    <p className='font-semibold'>{track.name}</p>
                    <p className='text-xs text-gray-400'>{track.desc.slice(0, 18)}...</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2 m-auto'>
                <div className='flex gap-6 items-center'>
                    <img className='w-5 cursor-pointer' src={assets.shuffle_icon} alt="Shuffle" />
                    <img onClick={previous} className='w-5 cursor-pointer' src={assets.prev_icon} alt="Previous" />
                    {playStatus ? (
                        <img onClick={pause} className='w-8 cursor-pointer' src={assets.pause_icon} alt="Pause" />
                    ) : (
                        <img onClick={play} className='w-8 cursor-pointer' src={assets.play_icon} alt="Play" />
                    )}
                    <img onClick={next} className='w-5 cursor-pointer' src={assets.next_icon} alt="Next" />
                    <img className='w-5 cursor-pointer' src={assets.loop_icon} alt="Loop" />
                </div>

                <div className='flex items-center gap-4 w-full'>
                    <p className='text-xs'>{time.currentTime.minute}:{time.currentTime.second.toString().padStart(2, '0')}</p>
                    <div onClick={seekSong} ref={seekBg} className='w-[80%] max-w-[500px] h-2 bg-gray-600 rounded-full cursor-pointer'>
                        <div ref={seekBar} className='h-2 bg-green-600 rounded-full' style={{ width: '0%' }}></div>
                    </div>
                    <p className='text-xs'>{time.totalTime.minute}:{time.totalTime.second.toString().padStart(2, '0')}</p>
                </div>
            </div>
            <div className='hidden lg:flex items-center gap-3 opacity-80'>
                <img className='w-5 cursor-pointer' src={assets.plays_icon} alt="Play Queue" />
                <img className='w-5 cursor-pointer' src={assets.mic_icon} alt="Microphone" />
                <img className='w-5 cursor-pointer' src={assets.queue_icon} alt="Queue" />
                <img className='w-5 cursor-pointer' src={assets.speaker_icon} alt="Speaker" />
                <div className='w-20 bg-slate-50 h-1 rounded-full'>
                    <div className='h-1 bg-green-600 rounded-full w-2/3'></div>
                </div>
                <img className='w-5 cursor-pointer' src={assets.mini_player_icon} alt="Mini Player" />
                <img className='w-5 cursor-pointer' src={assets.zoom_icon} alt="Fullscreen" />
            </div>
        </div>
    );
}

export default Player;