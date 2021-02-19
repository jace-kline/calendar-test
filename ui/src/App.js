import logo from './logo.svg';
import './App.css';
import { CalendarManager } from './CalendarManager';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { CreateEventForm } from './CreateEventForm';

const theme = createMuiTheme({
  palette: {
    type: "dark",
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CreateEventForm />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
