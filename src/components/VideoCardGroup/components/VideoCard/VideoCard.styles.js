import styled from "styled-components";

export const VideoCardContainer = styled.a`
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border: 2px solid;
  border-radius: 10px;
  display: inline-block;
  height: 197px;
  transition: opacity 0.3s;
  width: 298px;

  &:hover,
  &:focus {
    opacity: 0.5s;
  }
`;
