import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import VideoCard from '../components/VideoCard'
import fetchApi from '../utils/Fetch'
import { getCategoryVideos } from '../redux/categorySlice'
import { useDispatch, useSelector } from 'react-redux'
import timeSince from '../utils/date'
import './feed.css'
function Feed() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { categoryVideos } = useSelector((state) => state.category)
  const { sidebarExtend } = useSelector((state) => state.category)
  const pageRoute = useNavigate()
  useEffect(() => {
    dispatch(getCategoryVideos(`search?part=snippet&q=${id ? id : "suggested"}`))
    document.title = `${id ? id : "Home" + "-" + "Youtube"}`
  }, [id])
  var aDay = 24 * 60 * 60 * 1000;
  return (
    <>
      {/* <Sidebar /> */}
      <div className={`sm:hidden overlayEffect ${sidebarExtend ? "block" : "hidden"}`}></div>
      <div className={`pl-0  ${sidebarExtend ? "sm:pl-[180px]" : "sm:pl-[70px]"} flex flex-wrap gap-x-[3%] pt-20 ml-4 gap-y-6`}>

        {
          categoryVideos?.map((e, index) => {
            return (
              <div style={{ marginTop: index == 0 ? "0px" : "0px" }}>
                <VideoCard key={index} title={e.snippet.title} thumbnail={e.snippet?.thumbnails?.medium?.url} on={timeSince(new Date(Date.parse(e.snippet.publishedAt) - aDay))} channel={e.snippet.channelTitle} channelId={e.snippet.channelId} videoId={e.id.videoId} />
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Feed