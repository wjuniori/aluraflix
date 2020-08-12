import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RegisterVideo from "./pages/register/video/RegisterVideo";
import RegisterCategory from "./pages/register/category/RegisterCategory";
import Page404 from "./pages/404/Page404";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cadastro/video" component={RegisterVideo} />
      <Route path="/cadastro/categoria" component={RegisterCategory} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
