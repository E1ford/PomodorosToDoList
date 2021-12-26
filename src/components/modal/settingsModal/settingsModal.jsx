import React from 'react';
import './settingsModal.css'



const SettingsModal = ({time,onChangeTime}) =>{
    let onUpdateTime=(e)=>{
        onChangeTime(e.target.value)
    }
    return (
        <div className='time-wrapper' >
            <h2>Time(minutes)</h2>
            <div className='time-block'>
                <div className="mode">
                    <p>Pomodoro</p>
                    <input name='pomodoro' onChange={onUpdateTime} type="number" value={time.pomodoro.time}  className="raz"/>
                </div>
                <div className="mode">
                    <p>Short breack</p>
                    <input name='shortBreak' onChange={onUpdateTime} type="number"  value={time.shortBreak.time}  class="raz"/>
                </div>
                <div className="mode">
                    <p>Long breack</p>
                    <input name='longBreak' onChange={onUpdateTime} type="number"  value={time.longBreak.time}  className="raz"/>
                </div>
            </div>
        </div>
    )
}

export default SettingsModal;