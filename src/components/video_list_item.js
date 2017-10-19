import React from 'react'

const VideoListItem = ({ video, onSelectedVideo }) => {
  const imageUrl = video.snippet.thumbnails.default.url
  const videoTitle = video.snippet.title
  return (
    <li onClick = { () => onSelectedVideo(video) } className = 'list-group-item'>
      <div className = 'video-list media'>
        <div className = 'media-left'>
          <img className = 'media-object' src = { imageUrl } />
        </div>
        <div className = 'media-body'>
          <div className = 'media-heading'>
            <p>{ videoTitle }</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem
