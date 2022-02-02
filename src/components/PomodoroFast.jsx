import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import "./pomodoro.styles.scss";
import { useNavigate } from "react-router-dom";
import AddTask from "./AddTask";

/* TIME REFERENCES */
const TIME = {
  second: 1,
  minute: 6 * 1,
  hour: 60 * 6 * 1,
};

/* TIMER */
const POMODORO_TIME_REFERENCES = {
  pomodoroMinutes: 25 * TIME.minute,
  shortBreak: 5 * TIME.minute,
  longBreak: 30 * TIME.minute,
};

const POMODORO_STATES = {
  pomodoro: "pomodoro",
  short_break: "short_break",
  long_break: "long_break",
};

const PomodoroFFW = () => {
  const [error, setError] = useState("");
  const [isPaused, setIsPaused] = useState(true);
  const [timeLeft, setTimeLeft] = useState(
    POMODORO_TIME_REFERENCES.pomodoroMinutes
  );
  const [mode, setMode] = useState(POMODORO_STATES.pomodoro);
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState({
    pomodoro: 1,
    short: 0,
    long: 0,
  });

  const { logout } = useAuth();
  const navigate = useNavigate();

  /* ADD TASK */
  const addTask = (task) => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    }
    const newTasks = [task, ...tasks];
    setTasks(newTasks);
  };

  /* LOG OUT */
  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  useEffect(() => {
    const pomodoroLogic = () => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1 * TIME.second);
      } else {
        if (
          mode === POMODORO_STATES.pomodoro &&
          status.pomodoro > status.short &&
          (status.short % 3 !== 0 ||
            status.short / 3 === status.long ||
            status.short === 0)
        ) {
          setMode(POMODORO_STATES.short_break);
          setTimeLeft(POMODORO_TIME_REFERENCES.shortBreak);
          setStatus({ ...status, short: status.short + 1 });
        } else if (
          mode === POMODORO_STATES.short_break ||
          mode === POMODORO_STATES.long_break
        ) {
          setMode(POMODORO_STATES.pomodoro);
          setTimeLeft(POMODORO_TIME_REFERENCES.pomodoroMinutes);
          setStatus({ ...status, pomodoro: status.pomodoro + 1 });
        } else {
          setMode(POMODORO_STATES.long_break);
          setTimeLeft(POMODORO_TIME_REFERENCES.longBreak);
          setStatus({ ...status, long: status.long + 1 });
        }
      }
    };

    if (!isPaused) {
      setTimeout(pomodoroLogic, TIME.second);
    }
  }, [isPaused, timeLeft]);

  const minutesLeft = ("0" + Math.floor(timeLeft / TIME.minute)).slice(-2);
  const secondsLeft = (
    "0" +
    Math.ceil(timeLeft % TIME.minute) / TIME.second
  ).slice(-2);

  return (
    <section className="pomodoro__wrapper">
      <div className="log-out">
        <button onClick={handleLogout}>Log out</button>
      </div>
      <div className="main__container">
        {error && <h1>{error}</h1>}
        {/* <strong>Email:</strong> {currentUser.email} */}
        <h1>Pomodoro App</h1>
        <div className="pomodoro__container">
          <div className="status__container">
            <span
              className={
                mode === POMODORO_STATES.pomodoro
                  ? "active"
                  : "status__pomodoro"
              }
            >
              POMODORO
            </span>
            <span
              className={
                mode === POMODORO_STATES.short_break
                  ? "active"
                  : "status__short-break"
              }
            >
              SHORT BREAK
            </span>
            <span
              className={
                mode === POMODORO_STATES.long_break
                  ? "active"
                  : "status__long-break"
              }
            >
              LONG BREAK
            </span>
          </div>
          <div className="middle__container">
            <div className="timer">
              {minutesLeft} : {secondsLeft}
            </div>
            <div className="buttons__container">
              {isPaused ? (
                <button
                  className="btn-play"
                  onClick={() => {
                    setIsPaused(false);
                  }}
                >
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="40px"
                    height="40px"
                    viewBox="0 0 17.804 17.804"
                  >
                    <g>
                      <g id="c98_play">
                        <path
                          d="M2.067,0.043C2.21-0.028,2.372-0.008,2.493,0.085l13.312,8.503c0.094,0.078,0.154,0.191,0.154,0.313
                      c0,0.12-0.061,0.237-0.154,0.314L2.492,17.717c-0.07,0.057-0.162,0.087-0.25,0.087l-0.176-0.04
                      c-0.136-0.065-0.222-0.207-0.222-0.361V0.402C1.844,0.25,1.93,0.107,2.067,0.043z"
                        />
                      </g>
                      <g id="Capa_1_78_"></g>
                    </g>
                  </svg>
                </button>
              ) : (
                <button
                  className="btn-pause"
                  onClick={() => {
                    setIsPaused(true);
                  }}
                >
                  <svg
                    fill="#8a8a8a"
                    width="45px"
                    height="45px"
                    viewBox="0 3 501 487"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M120.16 45A20.162 20.162 0 0 0 100 65.16v381.68A20.162 20.162 0 0 0 120.16 467h65.68A20.162 20.162 0 0 0 206 446.84V65.16A20.162 20.162 0 0 0 185.84 45h-65.68zm206 0A20.162 20.162 0 0 0 306 65.16v381.68A20.162 20.162 0 0 0 326.16 467h65.68A20.162 20.162 0 0 0 412 446.84V65.16A20.162 20.162 0 0 0 391.84 45h-65.68z" />
                  </svg>
                </button>
              )}
            </div>
          </div>
          <div className="task__container">
            <span>{`Current task name... ${tasks.map(
              (ta, i) => tasks[i].text
            )}`}</span>
          </div>
        </div>
        <AddTask onSubmit={addTask} />
      </div>

      <div className=""></div>
    </section>
  );
};

export default PomodoroFFW;
