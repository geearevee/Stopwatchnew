import React, { useState, useRef } from "react";

const Stopwatch = () => {
  const [ms, setMs] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const referance = useRef();
  function start() {
    clearInterval(referance.current);
    referance.current = setInterval(() => {
      setMs((ms) => ms + 1);
    }, 5);
  }
  if (ms == 50) {
    setSec((sec) => sec + 1);
    setMs(0);
  }
  if (sec == 30) {
    setMin((min) => min + 1);
    setSec(0);
  }

  function stop() {
    clearInterval(referance.current);
  }
  function reset() {
    clearInterval(referance.current);
    setMs(0);
    setSec(0);
    setMin(0);
  }
  return (
    <>
      <div className="clock">
        <div className="hour">00</div>
        <div className="min">{min}</div>
        <div className="sec">{sec < 10 ? `0${sec}` : sec}</div>
        <div className="ms">{ms < 10 ? `0${ms}` : ms}</div>
      </div>
      <div className="button">
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default Stopwatch;
