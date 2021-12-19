import React from 'react';
import './modal.css'
import SettingsModal from './settingsModal/settingsModal';
import { useSelector } from 'react-redux';



const ModalHistory = ({isOpened, title, onModalClose}) =>{

    return (
        <div className={`modal__wrapper ${isOpened ? 'open' : 'close'}`}>
            <div className="modal__body">
                <div className="modal__close" onClick={onModalClose}>×</div>
                <h2>{title}</h2>
                <hr />
            </div>
        </div>
    )
}


export default ModalHistory;