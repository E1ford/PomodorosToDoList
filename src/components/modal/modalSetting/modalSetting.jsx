import {useState} from 'react';
import React from 'react';
import './modalSetting.css'
import { useSelector, useDispatch } from 'react-redux';
import {ModalCloase, changeTimeModal} from '../../../redux/actionCreators'


const ModalSetting = () =>{
    const state = useSelector(state=>state),
            timeMode = state.settings,
            dispatch = useDispatch(),
            isOpened = state.modal.setting.isOpened,
            title = state.modal.setting.title

    const [newSettings,setNewSettings]= useState(timeMode)

// меняем локальный state 
    const updateSettingPomodoro=(e)=>{
        setNewSettings({...newSettings, pomodoro:{...newSettings.pomodoro, time:e.target.value}})
    }
    const updateSettingShortBreack=(e)=>{
        setNewSettings({...newSettings, shortBreak:{...newSettings.shortBreack, time:e.target.value}})
    }
    const updateSettingLongBreack=(e)=>{
        setNewSettings({...newSettings, longBreak:{...newSettings.longBreak, time:e.target.value}})
    }

//закрытие модального окна 
    const onModalClose=()=>{
        dispatch(ModalCloase(title))
    }
// установка новых значений в таймер кнопка(ок)
    let onUpdateTime=()=>{
        onModalClose()
        dispatch(changeTimeModal(newSettings))
    }

    return (
        <div className={`modal__wrapper ${isOpened ? 'open' : 'close'}`}>
            <div className="modal__body">
                <div className="modal__close" onClick={onModalClose}>×</div>
                <h2>{title}</h2>
                <hr />
                <div className='time-wrapper' >
                    <h2>Time(minutes)</h2>
                    <div className='time-block'>
                        <div className="mode">
                            <p>Pomodoro</p>
                            <input name='pomodoro' onChange={updateSettingPomodoro} type="number" value={newSettings.pomodoro.time}  className="raz"/>
                        </div>
                        <div className="mode">
                            <p>Short breack</p>
                            <input name='shortBreak' onChange={updateSettingShortBreack} type="number"  value={newSettings.shortBreak.time}  className="raz"/>
                        </div>
                        <div className="mode">
                            <p>Long breack</p>
                            <input name='longBreak' onChange={updateSettingLongBreack} type="number"  value={newSettings.longBreak.time}  className="raz"/>
                        </div>
                    </div>
                </div>
                <button onClick={onUpdateTime} href="/" className="double-border-button">OK</button>
            </div>
        </div>
    )
}


export default ModalSetting;