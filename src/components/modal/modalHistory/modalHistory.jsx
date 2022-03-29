import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './modalHistory.css';
import { ModalCloase } from '../../../redux/actionCreators';

const ModalHistory = () => {
  const state = useSelector((state) => state),
    isOpened = state.modal.history.isOpened,
    title = state.modal.history.title,
    dispatch = useDispatch(),
    history = state.history;

  const onModalClose = () => {
    dispatch(ModalCloase(title));
  };
  const doneTasks = state.tasks
    .filter((el) => el.done === true)
    .map((item, index) => {
      return (
        <li key={index} className="modal__done-tasks-item">
          <div className="done-tasks__index">{index + 1 + '.'}</div>
          <div className="done-tasks">{item.text}</div>
        </li>
      );
    });

  return (
    <div className={`modal__wrapper ${isOpened ? 'open' : 'close'}`}>
      <div className="modal__body">
        <div className="modal__close" onClick={onModalClose}>
          ×
        </div>
        <h2>{title}</h2>
        <hr />
        <div className="mode__first-box">
          <div className="modal__history-mode">
            <p>Pomodoro</p>
            <p>{history.pomodoro}</p>
          </div>
          <div className="modal__history-mode">
            <p>Short break</p>
            <p>{history.shortBreak}</p>
          </div>
          <div className="modal__history-mode">
            <p>Long break</p>
            <p>{history.longBreak}</p>
          </div>
        </div>
        <div>
          <h2 className="modal__title-toDoList">To Do List</h2>
          <ul className="modal__done-list-tasks">{doneTasks}</ul>
        </div>
      </div>
    </div>
  );
};

export default ModalHistory;
