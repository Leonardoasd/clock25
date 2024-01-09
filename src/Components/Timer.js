import React, { useState, useEffect } from 'react';
import styles from "./Timer.module.css";
import alarma from "./alarma.mp3";

const Timer = ({ time, isReset , isActive, time2}) => {
  const [seconds, setSeconds] = useState(time * 60);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    setSeconds(time * 60)
  }, [time])

  useEffect(() => {
    
    let intervalId;
    const audio = document.getElementById("beep");

    if (seconds > 0 && isActive) {
      intervalId = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }else if (isReset){
        setSeconds(time * 60);
    }else if (seconds < 1 && isBreak === false){
      setIsBreak(true);
      setSeconds(time2 * 60);
      audio.play();
    }else if(seconds < 1 && isBreak === true){
      setIsBreak(false);
      setSeconds(time * 60);
      audio.play();
    }
    return () => clearInterval(intervalId);
  }, [isActive, seconds, isReset, isBreak, time, time2]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div>
      <h2 id="timer-label" >{isBreak ? "Descanzo" : 'Sesión'}</h2>
      <div id="time-left" className={styles.display} >
        {minutes < 10 ? `0${minutes}` : minutes}:
        {remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
      </div>
      <audio id="beep" src={alarma} preload='auto'></audio>
    </div>
  );
};

export default Timer;
