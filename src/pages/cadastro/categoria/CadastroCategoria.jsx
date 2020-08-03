import React from "react";
import PageDefault from "../../../components/PageDefault/PageDefault";
import { Link } from "react-router-dom";

const CadastroCategoria = () => (
  <PageDefault>
    <h1>Cadastro de Categoria</h1>

    <form>
      <label>Nome da Categoria:</label>
      <input type="text" />

      <button>Cadastrar</button>
    </form>

    <Link to="/">Ir para home</Link>
  </PageDefault>
);

export default CadastroCategoria;
