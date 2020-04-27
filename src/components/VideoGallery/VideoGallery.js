import React, { useState, useMemo } from "react"
import ReactPlayer from "react-player"
import { colors } from "../../theme"

const Direction = ({ value, onClick, description }) => (
  <div
    css={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      color: colors.subtleOnDark,
      transition: "1s color",
      padding: "1rem",
      "&:hover": {
        color: colors.error,
      },
    }}
    onClick={onClick}
  >
    <div
      css={{
        cursor: "pointer",
        textTransform: "uppercase",
        fontWeight: "bold",
      }}
    >
      {value}
      {" ›"}
    </div>
    <div
      css={{
        cursor: "pointer",
        fontSize: "0.7rem",
        textTransform: "uppercase",
      }}
    >
      {description}
    </div>
  </div>
)

const VideoGallery = ({ sourceList, ...reactPlayerProps }) => {
  const [currentVideo, setCurrentVideo] = useState(sourceList[0])

  const currentIndex = useMemo(
    () => sourceList.findIndex(source => source.url === currentVideo.url),
    [currentVideo, sourceList]
  )

  const loadNextVideo = () =>
    setCurrentVideo(
      currentIndex === sourceList.length - 1
        ? sourceList[0]
        : sourceList[currentIndex + 1]
    )

  return (
    <div>
      <ReactPlayer
        url={currentVideo.url}
        onEnded={loadNextVideo}
        {...reactPlayerProps}
      />
      <div
        css={{
          display: "flex",
          justifyContent: "flex-end",
          backgroundColor: "black",
        }}
      >
        <Direction
          value="Play Next"
          onClick={loadNextVideo}
          description={
            sourceList[currentIndex + 1]
              ? sourceList[currentIndex + 1].description
              : sourceList[0].description
          }
        />
      </div>
    </div>
  )
}

export default VideoGallery
