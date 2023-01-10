import React from 'react'
import { useNavigate } from 'react-router-dom'
function VideoCard(props) {
  const pageRoute = useNavigate()
  return (
    <div style={{ width: props.width, display: props.display }} className='w-60 md:w-72 relative cursor-pointer'>
      <img onClick={() => pageRoute(`/watch/${props.videoId}`)} className='w-72 rounded-[12px]' src={props.thumbnail} />
      <div style={{ width: props.rightWidth }} className='flex w-[100%] gap-x-3 items-start mt-2'><div>
        <h3 onClick={() => pageRoute(`/watch/${props.videoId}`)} className='text-[16px] font-semibold leading-[20px] w-[90%]'>
          {props.title?.slice(0, 60)}
        </h3>
        <div className='mt-1'>
          <p onClick={() => pageRoute(`/channel/${props.channelId}`)} className='text-[#606060] text-[13.5px] font-[500] tracking-wide'>{props.channel}</p>
          <p onClick={() => pageRoute(`/watch/${props.videoId}`)} className='text-[#606060] text-[13.5px] font-medium tracking-wider -mt-1'>{props.on}</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default VideoCard