import { useSelector, useDispatch } from 'react-redux'
import './head.css'
import {ModalOpenHistory,ModalOpenSetting} from '../../redux/actionCreators'

const Head =()=>{
    const activeMode = useSelector(state=>state.mode);
    const dispatch = useDispatch()

    
    const onModalOpenHistory=()=>{
        dispatch(ModalOpenHistory())
    }
    const onModalOpenSetting=()=>{
        dispatch(ModalOpenSetting())
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


    return(
        
        <div className="head">
            <h2 className="head-title">
                
                <span><i className="head-btn bi bi-pin-angle"></i>P</span>omodorosTDL
            </h2>
            <ul>
                <li name="History">
                    <button onClick={onModalOpenHistory} className='btn' name="History"type="submit">
                        <i className="head-btn bi bi-clipboard-data"/>
                        <span>History</span>
                    </button>
                </li>
                <li>
                    <button onClick={onModalOpenSetting} className='btn'  name="Setting" type="submit">
                        <i className="head-btn bi bi-gear-wide-connected"/>
                        <span>Setting</span>
                    </button>
                </li> 
                <li>
                    <button className='btn'  name="Login" type="submit">
                        <i className="head-btn bi bi-person-circle"/>
                        <span>Login</span>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Head;