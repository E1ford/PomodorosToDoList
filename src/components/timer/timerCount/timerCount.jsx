import {useEffect,useState} from 'react'
import {useDispatch} from 'react-redux'
import React from 'react'
import './timerCount.css'
import {addHistoryPomodoro,addHistoryLongBreak,addHistoryShortBreak} from '../../../redux/actionCreators'

const TimerCount =({settings, mode})=>{
  const dispatch = useDispatch()

  let timeMode;
  
  switch(mode){
    case 'pomodoro':
      timeMode = settings.pomodoro.time;
      break
    case 'shortBreak':
      timeMode = settings.shortBreak.time;
      break
    case 'longBreak':
      timeMode = settings.longBreak.time;
      break
    default: timeMode='';
  }
  

  let [count,setCount] = useState(timeMode * 60);
  let [timerActive, settimerActive] = useState(false);
  
      

  const onToggleStart=()=>{settimerActive(state=>{return  !state})}

  
// ф-ция по добававлению 0 если длина читсла 1 
    const padTime = time => {
        return String(time).length === 1 ? `0${time}` : `${time}`;
    };
// форматирует время в MM:СС
  const format = time => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes}:${padTime(seconds)}`;
  };
// окончание таймера запись в историю 

  useEffect(()=>{
    if(count ===20){
      if(mode === 'pomodoro'){
        dispatch(addHistoryPomodoro())
       }else if (mode === 'shortBreak'){
         dispatch(addHistoryShortBreak())
       }else if(mode === 'longBreak'){
         dispatch(addHistoryLongBreak())
       }
    }
    // eslint-disable-next-line
  }, [count])

  useEffect(() => {
    let timer;
    if (count > 0 && timerActive) {
      timer = setTimeout(() => setCount(c => {
        return c - 1;

      }), 1000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [count, timerActive]);



//стилизация кнопки старт let clazzTimerColor= 'timer';
  let clazzBtnStartColor = 'timer__btn_start'
  switch(mode){

    case "shortBreak":
      clazzBtnStartColor = "timer__btn_start blue";
            break;
    case "longBreak":
      clazzBtnStartColor = "timer__btn_start navyBlue";
            break;
    default:
      clazzBtnStartColor = "timer__btn_start";
  }
  

  return(
        <>
          <div className="timer__string">{ count > 0 && timerActive ?
             format(count) : format(count)}
          </div>
          <button onClick={onToggleStart} className={clazzBtnStartColor}>{timerActive? "stop" : "start"}</button>
        </>
  )
}

export default TimerCount;