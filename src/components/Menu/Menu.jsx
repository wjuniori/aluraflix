import React from "react";
import Logo from "../../assets/img/Logo.png";
import { MenuWrapper, LogoImage } from "./Menu.styles.js";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Menu = () => (
  <MenuWrapper className="Menu">
    <Link to="/">
      <LogoImage src={Logo} alt="AluraFlix logo" />
    </Link>

    <Button as={Link} className="ButtonLink" to="/cadastro/video">
      Novo vídeo
    </Button>
  </MenuWrapper>
);

export default Menu;
