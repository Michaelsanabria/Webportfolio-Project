// Video.jsx
import React from 'react'

function Video({ src, width = 640, height = 360 }) {
  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be')

  if (isYouTube) {
    // extract video ID and embed properly
    const videoId = src.split('v=')[1]?.split('&')[0] || src.split('/').pop().split('?')[0]
    const embedUrl = `https://www.youtube.com/embed/${videoId}`

    return (
      <div className="video-container">
        <iframe
          width={width}
          height={height}
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <video width={width} height={height} controls>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default Video