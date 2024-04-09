import React from 'react'
import '../styles/_Video.scss'
import v1 from '../videos/cosmos_-_14245 (540p).mp4';
function Video() {
  return (
    <>
      <div className="text">
        <h1 className='text-white text-center'>Mariam Ibrahem Ahmed</h1>
    </div>
 <video muted loop autoPlay src={v1} className='video'></video></>
  
  )
}

export default Video
