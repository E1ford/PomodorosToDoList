
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
            
                <li name="History">
                    <button onClick={onOpenModal} className={clazzBtn} name="History"type="submit">
                        <img name="History"src="https://pomofocus.io/icons/graph-white.png" alt="" /> History
                    </button>
                </li>

                <li>
                    <button onClick={onOpenModal} className={clazzBtn} name="Setting" type="submit">
                        <img name="Setting" src="	https://pomofocus.io/icons/config-white.png" alt="" />  Setting
                        </button>
                </li> 
                
                <li>
                    <button onClick={onOpenModal} className={clazzBtn} name="Login" type="submit">
                        <img name="Login" src="https://pomofocus.io/icons/user-white.png" alt="" /> Login
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Head;