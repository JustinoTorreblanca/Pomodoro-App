import "./App.css";
import LogIn from "./components/LogIn";
import Pomodoro from "./components/Pomodoro";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Pomodoro />} />
          <Route path="/login" exact element={<LogIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
