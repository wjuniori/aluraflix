import React from "react";
import Logo from "../../assets/img/Logo.png";
import { MenuWrapper, LogoImage } from "./Menu.styles.js";
import Button from "../Button/Button";

const Menu = () => (
  <MenuWrapper className="Menu">
    <a href="/">
      <LogoImage src={Logo} alt="AluraFlix logo" />
    </a>

    <Button as="a" className="ButtonLink" href="/">
      Novo vídeo
    </Button>
  </MenuWrapper>
);

export default Menu;
