import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
