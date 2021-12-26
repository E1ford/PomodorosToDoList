let initialState = {
    settings: {
        pomodoro: {
            name: "pomodoro",
            time: 25,
        },
        shortBreak: {
            name: "shortBreak",
            time: 5,
        },
        longBreak: {
            name: "longBreak",
            time: 10,
        },
        autoPlay:false
    },
    tasks:[
        {id:1, text:'хей нажми на эту кнопку, что бы удалить эту  задачу ⇒', numberPomodoro: 1, done:false},
        {id:2, text:'⇐ А теперь нажми сюда если сделал ее', numberPomodoro: 2, done:false},
        {id:3, text: 'Прошлая задача исчезла но ты все еще можешь посмотреть ее нажав на кнопку  History, она находится на самом верху ↑', numberPomodoro: 4, done:false},
        {id:4, text:'что бы добавить задачу нажми на кнопку +Add task которая находится в самом низу 🠗', numberPomodoro: 4, done:false},
    ],
    mode: "pomodoro",
    modal:{
        history:{
            isOpened: false,
            title: "History",},
        setting:{
            isOpened: false,
            title: "Setting",},
        login:{
            isOpened: false,
            title: "Login",
        }
    },
    history:{
        pomodoro:0,
        shortBreak:0,
        longBreak:0
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE-MODE": {
            return {...state, mode:action.payload}
        }
        case "MODAL-OPEN-HISTORY": {
            return{...state, modal:{...state.modal, history:{...state.modal.history,isOpened:true}}}
        }
        case "MODAL-OPEN-SETTING": {
            return{...state, modal:{...state.modal, setting:{...state.modal.setting,isOpened:true}}}
        }
        case "MODAL-CLOASE": {
            document.body.style.overflow = '';
            return{...state, modal:{...state.modal, setting:{...state.modal.setting,isOpened:false},history:{...state.modal.history,isOpened:false}}}
        }
        case "CHANGE-TIME-MODAL": {
            return{...state,settings:{...action.payload}}
        }
        case "ADD-HISTORY-POMODORO": {
            return{...state,history:{...state.history, pomodoro:state.history.pomodoro + 1}}
        }
        case "ADD-HISTORY-SHORT-BREAK": {
            return{...state,history:{...state.history, shortBreak:state.history.shortBreak + 1}}
        }
        case "ADD-HISTORY-LONG-BREAK": {
            return{...state,history:{...state.history, longBreak:state.history.longBreak + 1}}
        }
        case "CHANGE-TASK-DONE": {
            let newTasks=[...state.tasks];
            let index = newTasks.findIndex(el => el.id === action.payload)
            newTasks[index].done = true;
            return{...state, tasks:newTasks}
        }
        case "DELETE-TASK": {
            let newTasks =  state.tasks.filter((el)=>el.id !== action.payload);
            return{...state,tasks:newTasks}
        }
        case "ADD-NEW-TASK": {
            return{...state,tasks:[]}
        }
        default:
            return state;
    }
}


export default reducer;