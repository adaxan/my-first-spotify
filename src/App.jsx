import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'
import RightBar from './components/rightBar'

function App() {

  const {audioRef, track} = useContext(PlayerContext)

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar></Sidebar>
        <Display></Display>
        <RightBar></RightBar>
      </div>
      <Player></Player>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App