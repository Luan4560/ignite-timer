import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import * as SC from "./styles";

export const DefaulLayout = () => {
  return (
    <SC.LayoutContainer>
      <Header />
      <Outlet />
    </SC.LayoutContainer>
  );
};
