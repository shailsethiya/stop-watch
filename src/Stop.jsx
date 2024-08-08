import {useState, useEffect} from 'react'

const Stop = () => {
    const[timer, setTimer] = useState(60);
    const[isRunning, setIsRunning] = useState(false);
    const[pause, setPause] = useState(true);


    useEffect(() => {
        let timerIntervalId;
        if(isRunning &&  timer > 0){
            timerIntervalId = setInterval(() => {
                setTimer((prevState) => prevState - 1)
            }, 1000)
        }

        return () => clearInterval(timerIntervalId)
        
    }, [timer, isRunning])

    const handleStart = () => {
        setIsRunning(true);
    }

    const handlePause = () => {
        setPause(!pause);
        pause ? setIsRunning(false): setIsRunning(true);
    }

    const handleRestart = () => {
        setTimer(60);
    }


  return (
    <>
      <p>Timer: {timer}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>{pause ? "Pause" : "Resume"}</button>
      <button onClick={handleRestart}>Restart</button>
    </>
  )
}

export default Stop