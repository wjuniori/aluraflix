import React from "react";
import {
  VideoContainer,
  ResponsiveIframe,
} from "./YouTubeIframeResponsive.styles";

const YouTubeIframeResponsive = ({ youTubeID }) => (
  <VideoContainer>
    <ResponsiveIframe
      title="Titulo do Iframe"
      src={`https://www.youtube.com/embed/${youTubeID}?autoplay=0&mute=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </VideoContainer>
);

export default YouTubeIframeResponsive;
