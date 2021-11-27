
import './buttonMode.css'

const ButtonMode =({mode,onModeSelect})=>{

    const onClickChangeSettings=(e)=>{
        alert('ваш прогресс будет потерян, вы уверены ?')
        onModeSelect(e.target.name)
    }


    const buttonData  =[
        {name:'pomodoro', label:'Pomodoro'},
        {name:'shortBreak', label:'Short Break'},
        {name:'longBreak', label:'Long Break'}
    ]
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

    return(
        <div className="timer-btn">
            {buttons}
        </div>
    )
}

export default ButtonMode;