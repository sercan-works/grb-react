
import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
const Slider = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-t to-white from-gray-800'>
            <div className='w-[50vh]'>
    <AudioPlayer
    autoPlay
    src="https://file-examples.com/storage/fe352586866388d59a8918d/2017/11/file_example_MP3_700KB.mp3"
    onPlay={e => console.log("onPlay")}
    // other props here
  />



    </div>

    </div>
  )
}

export default Slider