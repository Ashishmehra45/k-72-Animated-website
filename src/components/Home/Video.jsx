import React from 'react'

function Video() {
  return (
    <div className='w-full h-full object-cover overflow-hidden'>
      <video className='w-full h-full object-cover' autoPlay loop muted src="new-video.mp4"></video>
    </div>
  )
}

export default Video
