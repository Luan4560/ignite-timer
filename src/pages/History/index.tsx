import * as SC from "./styles";

export const History = () => {
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
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há dois meses</td>
              <td>
                <SC.Status statusColor="green">Concluído</SC.Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há dois meses</td>
              <td>
                <SC.Status statusColor="green">Concluído</SC.Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há dois meses</td>
              <td>
                <SC.Status statusColor="green">Concluído</SC.Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há dois meses</td>
              <td>
                <SC.Status statusColor="green">Concluído</SC.Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há dois meses</td>
              <td>
                <SC.Status statusColor="yellow">Em andamento</SC.Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há dois meses</td>
              <td>
                <SC.Status statusColor="red">Interrompido</SC.Status>
              </td>
            </tr>
          </tbody>
        </table>
      </SC.HistoryList>
    </SC.HistoryContainer>
  );
};
