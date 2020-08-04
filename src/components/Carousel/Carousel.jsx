import React from "react";
import { CarouselContainer, Title, ExtraLink } from "./Carousel.styles";
import VideoCard from "./components/VideoCard/VideoCard";
import Slider, { SliderItem } from "./components/Slider/Slider";

const Carousel = ({ ignoreFirstVideo, category }) => (
  <CarouselContainer>
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
  </CarouselContainer>
);

export default Carousel;
