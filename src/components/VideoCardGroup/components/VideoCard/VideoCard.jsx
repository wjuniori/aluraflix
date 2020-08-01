import React from "react";
import { VideoCardContainer } from "./VideoCard.styles";
import { getYouTubeId } from "../../../../util";

const VideoCard = ({ title, url, categoryColor }) => (
  <li>
    <VideoCardContainer
      url={`https://img.youtube.com/vi/${getYouTubeId(url)}/hqdefault.jpg`}
      href={url}
      target="_blank"
      style={{ borderColor: categoryColor || "red" }}
      title={title}
    />
  </li>
);

export default VideoCard;
