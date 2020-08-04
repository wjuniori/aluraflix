import React from "react";
import BannerMain from "../../components/BannerMain/BannerMain";
import data from "../../data/data.json";
import Carousel from "../../components/Carousel/Carousel";
import PageDefault from "../../components/PageDefault/PageDefault";

const Home = () => (
  <PageDefault>
    <BannerMain
      title={data.categorias[0].videos[0].titulo}
      description="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
      url={data.categorias[0].videos[0].url}
    />

    {data.categorias.map((category, index) => {
      return index === 0 ? (
        <Carousel key={index} ignoreFirstVideo category={category} />
      ) : (
        <Carousel key={index} category={category} />
      );
    })}
  </PageDefault>
);

export default Home;
