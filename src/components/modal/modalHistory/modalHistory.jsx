import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './modalHistory.css'
import {ModalCloase} from '../../../redux/actionCreators'

const ModalHistory = () =>{

    const state = useSelector(state => state),
        isOpened = state.modal.history.isOpened,
        title =  state.modal.history.title,
        dispatch=useDispatch(),
        history= state.history;

    const onModalClose=()=>{
        dispatch(ModalCloase(title))
    }
    const doneTasks = state.tasks.filter(el => el.done === true).map((item,index) =>{
        return  (<li key = {index} className='done-tasks-item'>
                    <div className='div-index-task'>{index+1+'.'}</div>
                    <div className='done-tasks'>{item.text}</div>
                </li>)
    })


    return (
        <div className={`modal__wrapper ${isOpened ? 'open' : 'close'}`}>
            <div className="modal__body">
                <div className="modal__close" onClick={onModalClose}>×</div>
                <h2>{title}</h2>
                <hr />
                <div className='history-one-block'>
                    <div className="history-mode">
                        <p>Pomodoro</p>
                        <p>{history.pomodoro}</p>
                    </div>
                    <div className="history-mode">
                        <p>Short break</p>
                        <p>{history.shortBreak}</p>
                        
                    </div>
                    <div className="history-mode">
                        <p>Long break</p>
                        <p>{history.longBreak}</p>
                    </div>
                </div>
                <div className="history-two-block">
                    <h2 className='title-toDoList'>To Do List</h2>
                    <ul className='ul-done-tasks'>
                        {doneTasks}
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default ModalHistory;