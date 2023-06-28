import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
    background: #202024;
    padding: 2rem;
    border-radius: 8px;
  }
`;

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => props.theme["gray-100"]};

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;
 
  transition: 0.2s;

  &:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
 background-color: ${props => props.theme["green-500"]};

  &:not(:disabled):hover{
    background-color: ${props => props.theme["gray-700"]};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${props => props.theme["red-500"]};

  &:not(:disabled):hover{
    background-color: ${props => props.theme["red-700"]};
  }

`
