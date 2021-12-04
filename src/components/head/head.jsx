
import './head.css'

const Head =(props)=>{

const onOpenModal=(e)=>{
    props.onToggleModalOpen(e.target.name)
}

    let clazzBorder= '';
    let clazzBtn= '';
    switch(props.mode){
        case "shortBreak":
            clazzBorder = "head head__blue"
            clazzBtn = 'btn btn__blue'
                break;
        case "longBreak":
            clazzBorder = "head head__navyBlue"
            clazzBtn = 'btn btn__navyBlue'
                break;
        default:
            clazzBorder = "head"
            clazzBtn = 'btn'
    }


    return(
        
        <div className={clazzBorder}>
            <h2 className="head-title">pomodorosTDL</h2>
            <ul>
            
                <li><button onClick={onOpenModal} className={clazzBtn} 
                name="History"
                 type="submit">History</button></li>
                <li><button onClick={onOpenModal} className={clazzBtn} 
                name="Setting"
                 type="submit">Setting</button></li> 
                <li><button onClick={onOpenModal} className={clazzBtn}
                name="Login"
                 type="submit">Login</button></li>
            </ul>
        </div>
    )
}

export default Head;