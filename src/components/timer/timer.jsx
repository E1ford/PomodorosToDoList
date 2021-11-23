
import './timer.css'

const Timer =(props)=>{
    const {time,activeBtnMode,activeBtnStart} = props.settings

    const buttonData  =[
        {name:'pomodoro', label:'Pomodoro'},
        {name:'shortBreak', label:'Short Break'},
        {name:'longBreak', label:'Long Break'}
    ]
    const onChangeActiveBtnMode=(e)=>{
        props.onChangeActiveBtnMode(e.target.name)
    }
    const buttons = buttonData.map(item =>{
        const active = activeBtnMode === item.name;
        const clazz = active ? "timer-btn__mode-active" :  "timer-btn__mode";
        return <button 
                onClick={onChangeActiveBtnMode}
                className={clazz}
                name={item.name}
                key = {item.name}
                type="button">
                    {item.label}
            </button>
    })
    const clazzStart = activeBtnStart ? "timer-btn-stop" : "timer-btn-start";
    const valueBtnStart= activeBtnStart ? "stop" : "start";
    return(
        <div className="timer">
            <div className="timer-btn">
                {buttons}
            </div>
            <div className="timer-string">{time}</div>
            <div className="">
                <button className={clazzStart}>{valueBtnStart}</button>
            </div>
        </div>
    )
}

export default Timer;