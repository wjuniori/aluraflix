import React from "react";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import { Main } from "./PageDefault.styles";

const PageDefault = ({ children }) => {
  return (
    <>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default PageDefault;
