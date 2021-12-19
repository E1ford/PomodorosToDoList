import React from 'react';
import './settingsModal.css'





const SettingsModal = ({time}) =>{

    return (
        <div className='time-wrapper' >
            <h2>Time(minutes)</h2>
            <div className='time-block'>
                <div className="mode">
                    <p>Pomodoro</p>
                    <input name='pomodoro' type="number" value={time.pomodoro.time}  class="raz"/>
                </div>
                <div className="mode">
                    <p>Short breack</p>
                    <input name='shortBreak' type="number"  value={time.shortBreak.time}  class="raz"/>
                </div>
                <div className="mode">
                    <p>Long breack</p>
                    <input name='longBreak' type="number"  value={time.longBreak.time}  class="raz"/>
                </div>
            </div>
        </div>
    )
}

export default SettingsModal;