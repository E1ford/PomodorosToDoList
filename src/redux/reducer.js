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
    modal: [
        {
            isOpened: false,
            title: "History",
        },{
            isOpened: false,
            title: "Setting",
        },{
            isOpened: false,
            title: "Login",
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE-MODE": {
            return {
                ...state,
                mode:action.payload
            }
        }
        case "MODAL-OPEN": {
            let newModalSettings = state.modal.map(i => {
                return {...i,isOpened:false}})
            return {
                ...state,
                modal: newModalSettings.map(i=>{
                    let newItem = i;
                    if(i.title === action.payload){
                        newItem = {...i, isOpened: !i.isOpened }
                    }
                    return newItem
                })
            }
        }
        case "MODAL-CLOASE": {
            let newModalSettings = state.modal.map(i => {
                return {...i,isOpened:false}})
            return {
                ...state,
                modal: newModalSettings
            }
        }
        default:
            return state;
    }
}


export default reducer;