import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain/BannerMain';
// import data from '../../data/data.json';
import Carousel from '../../components/Carousel/Carousel';
import PageDefault from '../../components/PageDefault/PageDefault';
import categoriesRepository from '../../repositories/categories';

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    categoriesRepository.getAllWithVideos().then((data) => {
      setData(data);
    }).catch((err) => {
      console.log(err.message);
    }).finally(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <PageDefault>
      {isLoading ? (
        <div>
          Loading...
        </div>
      )
        : data.map((category, index) => (index === 0 ? (
          <div key={category.id}>
            <BannerMain
              title={data[0].videos[0].titulo}
              description="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
              url={data[0].videos[0].url}
            />
            <Carousel ignoreFirstVideo category={category} />
          </div>
        ) : (
          <Carousel key={category.id} category={category} />
        )))}
    </PageDefault>
  );
};

export default Home;
