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
            time: 15,
        }
    },
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
            return{...state, modal:{...state.modal, setting:{...state.modal.setting,isOpened:false},history:{...state.modal.history,isOpened:false}}}
        }
        default:
            return state;
    }
}


export default reducer;