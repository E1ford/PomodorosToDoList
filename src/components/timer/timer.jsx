import { useSelector, useDispatch } from "react-redux"

import ButtonMode from "./buttonMode/buttonMode"
import TimerCount from "./timerCount/timerCount"
import './timer.css'


const Timer =()=>{

    const {mode, settings} = useSelector(state=>state)
    const dispatch = useDispatch()

    //костыль для обновления таймера при смене времени 
    let key = settings.pomodoro.time + settings.shortBreak.time + settings.longBreak.time;
    return(
        <div className='timer__wrapper'>
                <ButtonMode mode={mode}
                dispatch={dispatch}/>
            <TimerCount key={key} mode={mode} settings ={settings}/>
        </div>
    )
}

export default Timer;