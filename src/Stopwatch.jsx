import {useState, useEffect} from 'react';

const Stopwatch = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [runningTimer, setRunningTimer] = useState(false);

  useEffect(() => {
    let timerInvervalId;

    if(runningTimer && timeLeft > 0){
      timerInvervalId = setInterval(() => {
      setTimeLeft((prevState) => prevState - 1);
      }, 1000)
    }
    return () =>  clearInterval(timerInvervalId);

  }, [timeLeft, runningTimer])

  const handleStart = () => {
    setRunningTimer(true);
  }

  const handlePause = () => {
    setRunningTimer(false)
  }

  const handleRestart = () => {
    setTimeLeft(60);
  }

  return (
    <>
    <p>Time Left: {timeLeft}</p>
    <button onClick={handleStart}>start</button>
    <button onClick={handlePause}>pause</button>
    <button onClick={handleRestart}>restart</button>
    </>
  )
}

export default Stopwatch