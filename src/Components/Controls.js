import React from 'react';
import { FaPlay , FaPause } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";
import styles from "./Controls.module.css"

const Controls = ({ startTimer, pauseTimer, resetTimer }) => {
  return (
    <div>
      <FaPlay className={styles.principalButtons} onClick={startTimer}/>
      <FaPause id="start_stop" className={styles.principalButtons} onClick={pauseTimer}/>
      <GrPowerReset id="reset" className={styles.principalButtons} onClick={resetTimer} />
    </div>
  );
};

export default Controls;
