import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField/FormField';
import Button from '../../../components/Button/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

const RegisterVideo = () => {
  const [categories, setCategories] = useState([]);
  const [video, handleChange] = useForm({
    titulo: 'Vídeo padrão',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: 'Front End',
  });
  const history = useHistory();
  const categoryTitles = categories.map(({ titulo }) => titulo);

  useEffect(() => {
    categoriesRepository.getAll().then((categories) => {
      setCategories(categories);
    }).catch((err) => {
      console.log(err.message);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const category = categories.find((category) => category.titulo === video.categoria);

    videosRepository.create({
      titulo: video.titulo,
      url: video.url,
      categoriaId: category.id,
    }).then(() => {
      console.log('Cadastrou com sucesso!');
      // alert('Vídeo Cadastrado com sucesso!');
      history.push('/');
    }).catch((err) => {
      console.log(err.message);
    });
  };

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Título do Vídeo"
          type="text"
          name="titulo"
          value={video.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          type="text"
          name="url"
          value={video.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          type="text"
          name="categoria"
          value={video.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button>Cadastrar</Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default RegisterVideo;
