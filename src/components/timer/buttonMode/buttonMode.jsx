import { changeMode } from '../../../redux/actionCreators';

import './buttonMode.css';

const ButtonMode = ({ mode, dispatch }) => {
  const onDispatchChangeSettings = (e) => {
    dispatch(changeMode(e.target.name));
  };

  const buttonData = [
    { name: 'pomodoro', label: 'Pomodoro' },
    { name: 'shortBreak', label: 'Short Break' },
    { name: 'longBreak', label: 'Long Break' },
  ];
  const buttons = buttonData.map((item) => {
    const active = mode === item.name;
    const clazz = active ? 'timer__button_active' : 'timer__button_mode';
    return (
      <button
        onClick={onDispatchChangeSettings}
        className={clazz}
        name={item.name}
        key={item.name}
        type="button">
        {item.label}
      </button>
    );
  });

  return <div className="timer__button">{buttons}</div>;
};

export default ButtonMode;
