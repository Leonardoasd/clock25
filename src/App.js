import React, { useState } from 'react';
import Timer from './Components/Timer';
import Controls from './Components/Controls';
import "./App.css";
import { GoChevronUp , GoChevronDown } from "react-icons/go";

const App = () => {
  const [isReset, setIsReset] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [timebreak, setTimebreak] = useState(5);
  const [timeSession, setTimeSession] = useState(25);
  

  const handleUpbreak = () => {
    setTimebreak(prevExpression => timebreak < 60 ? prevExpression + 1 : prevExpression );
  };

  const handleDownbreak = () => {
    setTimebreak(prevExpression => timebreak > 1 ? prevExpression - 1 : prevExpression);
  };

  const handleUpSession = () => {
    setTimeSession(prevExpression => timeSession < 60 ? prevExpression + 1 : prevExpression );
  };

  const handleDownSession = () => {
    setTimeSession(prevExpression => timeSession > 1 ? prevExpression - 1 : prevExpression );
  };

  const resetTimer = () => {
    setTimeSession(25);
    setTimebreak(5);
    setIsActive(false);
    setIsReset(true);
  };

  const startTimer = () => {
    setIsActive(true);
    setIsReset(false)
  };

  const pauseTimer = () => {
    setIsActive(false);
    setIsReset(false)
  };

  return (
    <div className="App" >
      <h1 className='tituloprincipal' >Reloj 25 + 5</h1>
      <div className="handlerTimeContainer" >
        <div className="breakcontainer" id="break-label" >
          <h3 className='titulodetiempo' >Tiempo de Descanzo</h3>
          <GoChevronUp className='iconUp' onClick={handleUpbreak} id="break-increment"/>
          <h3 id="break-length" >{timebreak}</h3>
          <GoChevronDown className='iconDown' onClick={handleDownbreak} id="break-decrement" />
        </div>
        <div className="sessionContainer" id="session-label" >
          <h3 className='titulodetiempo'>Tiempo de Trabajo</h3>
          <GoChevronUp className='iconUp' onClick={handleUpSession} id="session-increment"/>
          <h3 id="session-length" >{timeSession}</h3>
          <GoChevronDown className='iconDown' onClick={handleDownSession} id="session-decrement" />
        </div>
      </div>
      <div className='principalContainer' >
      <Timer time={timeSession} isReset={isReset} isActive={isActive} time2={timebreak} />
      <Controls
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        resetTimer={resetTimer}
      />
      </div>
      <p>Designed and Coded By Leonardo Aponte</p>
    </div>
  );
};

export default App;
