
export let changeMode = (newMode) => ({
    type: "CHANGE-MODE",
    payload: newMode
});


export let ModalOpenHistory = () => ({
    type: "MODAL-OPEN-HISTORY"
});
export let ModalOpenSetting = () => ({
    type: "MODAL-OPEN-SETTING"
});
export let ModalCloase = (name) => ({
    type: "MODAL-CLOASE",
    payload: name
});
export let changeTimeModal = (newTime) => ({
    type: "CHANGE-TIME-MODAL",
    payload:newTime
});


export let addHistoryPomodoro = () => ({
    type: "ADD-HISTORY-POMODORO",
});
export let addHistoryShortBreak = () => ({
    type: "ADD-HISTORY-SHORT-BREAK",
});
export let addHistoryLongBreak = () => ({
    type: "ADD-HISTORY-LONG-BREAK",
});


export let changeTaskDone = (id) => ({
    type: "CHANGE-TASK-DONE",
    payload:id
});
export let deleteTask = (id) => ({
    type: "DELETE-TASK",
    payload:id
});
export let addNewTask = (text) => ({
    type: "ADD-NEW-TASK",
    payload:text
});