import { useSelector, useDispatch } from "react-redux"

import ButtonMode from "./buttonMode/buttonMode"
import TimerCount from "./timerCount/timerCount"
import './timer.css'


const Timer =()=>{

    const {mode, settings} = useSelector(state=>state)
    const dispatch = useDispatch()
    //установка класса цвета timer 
    let clazzTimerColor= 'timer';
    switch(mode){
        case "shortBreak":
            clazzTimerColor = "timer timer__blue";
                break;
        case "longBreak":
            clazzTimerColor = "timer timer__navyBlue";
                break;
        default:
            clazzTimerColor = "timer";
    }


    // const clazzStart = activeBtnStart ? "timer-btn-stop" : "timer-btn-start";
    // const valueBtnStart= activeBtnStart ? "stop" : "start"

    return(
        <div className={clazzTimerColor}>
            <div className="timer-btn">
                <ButtonMode mode={mode}
                dispatch={dispatch}/>
            </div>
            <TimerCount key={mode} mode={mode} settings ={settings}/>
        </div>
    )
}

export default Timer;