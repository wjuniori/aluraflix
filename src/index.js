import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroVideo from "./pages/cadastro/video/CadastroVideo";
import CadastroCategoria from "./pages/cadastro/categoria/CadastroCategoria";

const Pagina404 = () => <div>Página 404</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
