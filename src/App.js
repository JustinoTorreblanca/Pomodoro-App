import LogIn from "./components/LogIn";
import Pomodoro from "./components/Pomodoro";
import PomodoroFFW from "./components/PomodoroFast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import SignUp from "./components/SignUp";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <Pomodoro />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/fast"
              element={
                <PrivateRoute>
                  <PomodoroFFW />
                </PrivateRoute>
              }
            />
            <Route path="/login" exact element={<LogIn />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/*" exact element={<LogIn />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
