import { useState, useRef } from "react";
import Modal from "./modal";
//ToDO: make the dialog visible also in case we stopped the timer

export default function TimerChallenge({ title, seconds }) {
  const [remainingTime, setRemainingTime] = useState(seconds * 1000);
  let timeStarted = remainingTime > 0 && remainingTime < seconds * 1000;
  let timer = useRef();
  let dialog = useRef();

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setRemainingTime(seconds * 1000);
  }

  function hadleStartTimer() {
    timer.current = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
  }

  function handleStopTimer() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      {
        <Modal
          targetTime={seconds}
          ref={dialog}
          remainingTime={remainingTime}
          onReset={handleReset}
        ></Modal>
      }
      <div className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {seconds}
          {seconds > 1 ? " seconds" : " second"}
        </p>
        <p>
          <button onClick={timeStarted ? handleStopTimer : hadleStartTimer}>
            {timeStarted ? "stop" : "start"} Challenge
          </button>
        </p>
        <p className={timeStarted ? "active" : undefined}>
          {timeStarted ? "Time is runnig..." : "Timmer inactive"}
        </p>
      </div>
    </>
  );
}
