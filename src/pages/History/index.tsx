import { useContext } from "react";
import { CyclesContext } from "../../context/CyclesContext";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import * as SC from "./styles";

export const History = () => {
  const { cycles } = useContext(CyclesContext);

  return (
    <SC.HistoryContainer>
      <h1>Meu histórico</h1>

      <SC.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
                <td>{cycle.startDate.toISOString()}</td>
                <td>
                  {cycle.finishedDate && (
                    <SC.Status statusColor="green">Concluído</SC.Status>
                  )}
                  {cycle.interruptedDate && (
                    <SC.Status statusColor="red">Interrompido</SC.Status>
                  )}

                  {!cycle.finishedDate && !cycle.interruptedDate && (
                    <SC.Status statusColor="yellow">Em andamento</SC.Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </SC.HistoryList>
    </SC.HistoryContainer>
  );
};
