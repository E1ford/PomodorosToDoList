



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