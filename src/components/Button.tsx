import * as SC from "./styles";

interface ButtonProps {
  variant?: SC.ButtonVariant;
}

export const Button = ({ variant = "primary" }: ButtonProps) => {
  return <SC.ButtonContainer variant={variant}>Enviar</SC.ButtonContainer>;
};
