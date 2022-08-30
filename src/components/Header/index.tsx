import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

import * as SC from "./styles";
import logoIgnite from "../../assets/ignite-timer-logo.svg";

export const Header = () => {
  return (
    <SC.HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </SC.HeaderContainer>
  );
};
