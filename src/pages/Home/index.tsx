import { Play } from "phosphor-react";
import * as SC from "./styles";

export const Home = () => {
  return (
    <SC.HomeContainer>
      <form action="">
        <SC.FormContainer>
          <label htmlFor="task">Vou trabalhar em </label>
          <input id="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutos.</span>
        </SC.FormContainer>

        <SC.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <SC.Separator>:</SC.Separator>
          <span>0</span>
          <span>0</span>
        </SC.CountdownContainer>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </SC.HomeContainer>
  );
};
