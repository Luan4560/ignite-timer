import { useContext, useState } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../context/CyclesContext";
import * as SC from "./styles";

export const NewCycleForm = () => {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <SC.FormContainer>
      <label htmlFor="task">Vou trabalhar em </label>
      <SC.TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Teste" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <SC.MinuteAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        min={0}
        {...register("minutesAmount", { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </SC.FormContainer>
  );
};
