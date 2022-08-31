import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as SC from "./styles";

export const Home = () => {
  const { register, handleSubmit, watch } = useForm();

  const handleCreateNewCycle = (data: any) => {
    console.log(data);
  };

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <SC.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <SC.FormContainer>
          <label htmlFor="task">Vou trabalhar em </label>
          <SC.TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
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
            step={5}
            min={5}
            max={60}
            {...register("minutesAmount", { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </SC.FormContainer>

        <SC.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <SC.Separator>:</SC.Separator>
          <span>0</span>
          <span>0</span>
        </SC.CountdownContainer>

        <SC.StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </SC.StartCountdownButton>
      </form>
    </SC.HomeContainer>
  );
};
