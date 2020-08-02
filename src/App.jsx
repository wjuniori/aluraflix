import React from "react";
import styled from "styled-components";
import Menu from "./components/Menu/Menu";
import BannerMain from "./components/BannerMain/BannerMain";
import data from "./data/data.json";
import VideoCardGroup from "./components/VideoCardGroup/VideoCardGroup";
import Footer from "./components/Footer/Footer";

const AppWrapper = styled.div`
  background: var(--grayDark);

  padding-top: 94px;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;

const App = () => (
  <AppWrapper>
    <Menu />

    <BannerMain
      title={data.categorias[0].videos[0].titulo}
      description="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
      url={data.categorias[0].videos[0].url}
    />

    {data.categorias.map((category, index) => {
      return index === 0 ? (
        <VideoCardGroup key={index} ignoreFirstVideo category={category} />
      ) : (
        <VideoCardGroup key={index} category={category} />
      );
    })}

    <Footer />
  </AppWrapper>
);

export default App;
