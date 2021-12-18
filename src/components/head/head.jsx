import { useSelector, useDispatch } from 'react-redux'
import './head.css'
import {ModalOpen} from '../../redux/actionCreators'

const Head =()=>{
    const activeMode = useSelector(state=>state.mode);
    const dispatch = useDispatch()

    
    const onOpenModal=(e)=>{
        dispatch(ModalOpen(e.target.name))
    }
    // установка цвета фона сайта 
    switch(activeMode){
        case "pomodoro":
            document.body.style.backgroundColor = "#d95550"
                break;
        case "shortBreak":
            document.body.style.backgroundColor = "#4c9195"
                break;
        case "longBreak":
            document.body.style.backgroundColor = "#457ca3"
                break;
        default:
            document.body.style.backgroundColor = "#d95550"
        }

    let clazzBorder= '';
    let clazzBtn= '';
    switch(activeMode){
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
            <h2 className="head-title"><img name="History"src="https://pomofocus.io/icons/icon-white.png" alt="" /><span>P</span>omodorosTDL</h2>
            <ul>
                <li name="History">
                    <button onClick={onOpenModal} className={clazzBtn} name="History"type="submit">
                        <img name="History"src="https://pomofocus.io/icons/graph-white.png" alt="" /> History
                    </button>
                </li>
                <li>
                    <button onClick={onOpenModal} className={clazzBtn} name="Setting" type="submit">
                        <img name="Setting" src="https://pomofocus.io/icons/config-white.png" alt="" />  Setting
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