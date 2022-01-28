import React from "react";
import "./pomodoro.styles.scss";

const Pomodoro = () => {
  return (
    <section className="pomodoro__wrapper">
      <div className="main__container">
        <h1>Pomodoro App</h1>
        <div className="pomodoro__container">
          <div className="status__container">
            <span className="status__pomodoro">POMODORO</span>
            <span className="status__short-break">SHORT BREAK</span>
            <span className="status__long-break">LONG BREAK</span>
          </div>
          <div className="middle__container">
            <div className="timer">25:00</div>
            <button className="btn-play">
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
          </div>
          <div className="task__container">
            <span>Current task name...</span>
          </div>
        </div>
        <section className="write__task">
          <span>Task name</span>
          <p>Here you can write the name of the task you want to do...</p>
        </section>
      </div>

      <div className=""></div>
    </section>
  );
};

export default Pomodoro;
