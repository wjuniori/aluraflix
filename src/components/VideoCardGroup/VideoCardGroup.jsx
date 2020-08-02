import React from "react";
import {
  VideoCardGroupContainer,
  VideoCardList,
  Title,
  ExtraLink,
} from "./VideoCardGroup.styles";
import VideoCard from "./components/VideoCard/VideoCard";

const VideoCardGroup = ({ ignoreFirstVideo, category }) => (
  <VideoCardGroupContainer>
    {category.titulo && (
      <>
        <Title style={{ backgroundColor: category.cor || "red" }}>
          {category.titulo}
        </Title>
        {category.link_extra && (
          <ExtraLink href={category.link_extra.url} target="_blank">
            {category.link_extra.text}
          </ExtraLink>
        )}
      </>
    )}
    <VideoCardList>
      {category.videos.map(
        (video, index) =>
          !(ignoreFirstVideo && index === 0) && (
            <li>
              <VideoCard
                key={index}
                title={video.titulo}
                url={video.url}
                categoryColor={category.cor}
              />
            </li>
          )
      )}
    </VideoCardList>
  </VideoCardGroupContainer>
);

export default VideoCardGroup;
