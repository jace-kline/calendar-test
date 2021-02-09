import logo from './logo.svg';
import './App.css';
import { MyCalendar } from './MyCalendar';
import { DateTimeSelector } from './DateTimeSelector';

function App() {
  return (
    <div className="App">
      <h1>Calendar App</h1>
      <MyCalendar />
      <DateTimeSelector />
    </div>
  );
}

export default App;
