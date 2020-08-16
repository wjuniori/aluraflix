import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault/PageDefault';
import FormField from '../../../components/FormField/FormField';
import Button from '../../../components/Button/Button';
import { URL_DEV, URL_PROD } from '../../../constants';

const RegisterCategory = () => {
  const categoryInitial = {
    name: '',
    description: '',
    color: '#000000',
  };

  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState(categoryInitial);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const URL = window.location.hostname.includes('localhost') ? URL_DEV : URL_PROD;

    fetch(URL).then(async (resp) => {
      const categories = await resp.json();
      setCategories(categories);
    }).catch(() => {
      alert('Serviço indisponível! Favor, tentar novamente.');
    }).finally(() => {
      setIsLoading(false);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategories([...categories, category]);
    setCategory(categoryInitial);
  };

  const handleChange = (event) => {
    setCategory({
      ...category,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {category.name}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={category.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={category.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={category.color}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      {isLoading ? (
        <div>
          Loading...
        </div>
      )
        : (
          <ul>
            {categories.map((category, index) => (
              <li key={index}>{category.name}</li>
            ))}
          </ul>
        )}

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
};

export default RegisterCategory;
