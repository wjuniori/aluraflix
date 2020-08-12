import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField/FormField";

const RegisterCategory = () => {
  const categoryInitial = {
    name: "",
    description: "",
    color: "",
  };

  const [category, setCategory] = useState(categoryInitial);
  const [categories, setCategories] = useState([]);

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
      <h1>Cadastro de Categoria: {category.name}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={category.name}
          onChange={handleChange}
        />

        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={category.description}
              name="description"
              onChange={handleChange}
            />
          </label>
        </div>

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={category.color}
          onChange={handleChange}
        />

        <button>Cadastrar</button>
      </form>

      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category.name}</li>
        ))}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
};

export default RegisterCategory;
