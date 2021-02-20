import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { Login } from './login/Login';

const theme = createMuiTheme({
  palette: {
    type: "dark",
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
