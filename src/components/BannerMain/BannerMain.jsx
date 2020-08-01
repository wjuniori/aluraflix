import React from "react";
import YouTubeIframeResponsive from "./components/YouTubeIframeResponsive/YouTubeIframeResponsive";
import {
  BannerMainContainer,
  ContentAreaContainer,
  WatchButton,
} from "./BannerMain.styles";
import { getYouTubeId } from "../../util";

const BannerMain = ({ title, description, url }) => {
  const youTubeID = getYouTubeId(url);

  return (
    <BannerMainContainer
      backgroundImage={`https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`}
    >
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>{title}</ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {description}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <YouTubeIframeResponsive youTubeID={youTubeID} />
          <WatchButton>Assistir</WatchButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
};

export default BannerMain;
