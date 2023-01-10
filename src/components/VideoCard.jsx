import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../pages/feed.css"
function VideoCard(props) {
  const pageRoute = useNavigate()
  return (
    <div style={{ width: props.width, display: props.display }} className='w-[100%] sm:w-[90%] md:w-[100%] relative cursor-pointer videoComponent'>
      <img onClick={() => pageRoute(`/watch/${props.videoId}`)} className='md:w-56 lg:w-72 rounded-[12px] videoImage' src={props.thumbnail} />
      <div style={{ width: props.rightWidth }} className='flex w-[100%] gap-x-3 items-start mt-2'><div>
        <h3 onClick={() => pageRoute(`/watch/${props.videoId}`)} className='text-[14px] lg:text-[16px] font-semibold leading-[20px] w-[94%]'>
          {props.title?.slice(0, 60)}
        </h3>
        <div className='mt-1'>
          <p onClick={() => pageRoute(`/channel/${props.channelId}`)} className='text-[11.5px] text-[#606060] lg:text-[13.5px] font-[500] tracking-wide'>{props.channel}</p>
          <p onClick={() => pageRoute(`/watch/${props.videoId}`)} className='text-[11.5px] text-[#606060] lg:text-[13.5px] font-medium tracking-wider -mt-1'>{props.on}</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default VideoCard