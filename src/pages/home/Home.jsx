import React from "react";
import Menu from "../../components/Menu/Menu";
import BannerMain from "../../components/BannerMain/BannerMain";
import data from "../../data/data.json";
import VideoCardGroup from "../../components/VideoCardGroup/VideoCardGroup";
import Footer from "../../components/Footer/Footer";
import { AppWrapper } from "./Home.styles";

const Home = () => (
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

export default Home;
