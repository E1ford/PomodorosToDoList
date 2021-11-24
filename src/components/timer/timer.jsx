
import './timer.css'

const Timer =(props)=>{
    const {time,mode,activeBtnStart, color} = props.settings


    const onClickChangeSettings=(e)=>{
        props.onChangeVisibleSettings(e.target.name)
    }


    const buttonData  =[
        {name:'pomodoro', label:'Pomodoro'},
        {name:'shortBreak', label:'Short Break'},
        {name:'longBreak', label:'Long Break'}
    ]
    //установка класса цвета timer 
    let clazzTimerColor= 'timer';
    let clazzStart = 'timer-btn-start';
    switch(color){
        case "blue":
            clazzTimerColor = "timer timer__blue";
            clazzStart = "timer-btn-start btn-start__blue";
                break;
        case "navyBlue":
            clazzTimerColor = "timer timer__navyBlue";
            clazzStart = "timer-btn-start btn-start__navyBlue";
                break;
        default:
            clazzTimerColor = "timer";
            clazzStart = "timer-btn-start";
    }
    const buttons = buttonData.map(item =>{
        const active = mode === item.name;
        const clazz = active ? "timer-btn__mode-active" :  "timer-btn__mode";
        return <button 
                onClick={onClickChangeSettings}
                className={clazz}
                name={item.name}
                key = {item.name}
                type="button">
                    {item.label}
            </button>
    })



    // const clazzStart = activeBtnStart ? "timer-btn-stop" : "timer-btn-start";
    // const valueBtnStart= activeBtnStart ? "stop" : "start";



    return(
        <div className={clazzTimerColor}>
            <div className="timer-btn">
                {buttons}
            </div>
            <div className="timer-string">{time}</div>
            <div className="">
                <button className={clazzStart}>start</button>
            </div>
        </div>
    )
}

export default Timer;