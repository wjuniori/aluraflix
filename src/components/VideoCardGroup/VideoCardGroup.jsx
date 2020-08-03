import React from "react";
import {
  VideoCardGroupContainer,
  Title,
  ExtraLink,
} from "./VideoCardGroup.styles";
import VideoCard from "./components/VideoCard/VideoCard";
import Slider, { SliderItem } from "./components/Slider/Slider";

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
    <Slider>
      {category.videos.map(
        (video, index) =>
          !(ignoreFirstVideo && index === 0) && (
            <SliderItem key={index}>
              <VideoCard
                title={video.titulo}
                url={video.url}
                categoryColor={category.cor}
              />
            </SliderItem>
          )
      )}
    </Slider>
  </VideoCardGroupContainer>
);

export default VideoCardGroup;
