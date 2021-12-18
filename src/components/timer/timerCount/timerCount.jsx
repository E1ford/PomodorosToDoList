import React from 'react'
import './timerCount.css'

const TimerCount =({settings, mode})=>{
  
  let timeMode = 25;

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
      default: timeMode = 25;
  }

let activeTime = timeMode * 60;


  let [count,setCount] = React.useState(activeTime);
  let [timerActive, settimerActive] = React.useState(false);




  const onToggleStart=()=>{
    settimerActive(state=>{
      return  !state})
  }
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
    // React.useEffect(()=>{
    //   setCount(activeTime)
    // },[]);
    React.useEffect(() => {
      let timer;
      if (count > 0 && timerActive) {
        timer = setTimeout(() => setCount(c => c - 1), 1000);
      }

      return () => {
        if (timer) {
          clearTimeout(timer);
        }
      };
    }, [count, timerActive ]);



    //стилизация кнопки старт let clazzTimerColor= 'timer';
    let clazzBtnStartColor = 'timer-btn-start'
    switch(settings.name){
      case "shortBreak":
        clazzBtnStartColor = "timer-btn-start btn-start__blue";
              break;
      case "longBreak":
        clazzBtnStartColor = "timer-btn-start btn-start__navyBlue";
              break;
      default:
        clazzBtnStartColor = "timer-btn-start";
  }

    return(
          <>
            <div className="timer-string">{ count > 0 && timerActive ? format(count) : format(count)}</div>
            <div className="">
                <button onClick={onToggleStart} className={clazzBtnStartColor}>{timerActive? "stop" : "start"}</button>
            </div>
          </>
    )
}

export default TimerCount;