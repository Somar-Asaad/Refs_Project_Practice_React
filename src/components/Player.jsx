import { useState, useRef } from "react";
import TimerChallenge from "./TimerChallenge";
export default function Player() {
  let playerName = useRef();
  const [input, setInput] = useState(null);
  function handleClick() {
    setInput(playerName.current.value);
  }

  return (
    <>
      <section id="player">
        <h2>Welcome {input ?? "unknown entity"}</h2>
        <p>
          <input ref={playerName} type="text" />
          <button onClick={handleClick}>Set Name</button>
        </p>
      </section>
      <section id="challenges">
        <TimerChallenge title={"Easy"} seconds={1} />
        <TimerChallenge title={"NOT EASY"} seconds={5} />
        <TimerChallenge title={"GETTING TOUGH"} seconds={10} />
        <TimerChallenge title={"PROS ONLY"} seconds={15} />
      </section>
    </>
  );
}
