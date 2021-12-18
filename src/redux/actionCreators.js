



export let changeMode = (newMode) => ({
    type: "CHANGE-MODE",
    payload: newMode
});
export let ModalOpen = (name) => ({
    type: "MODAL-OPEN",
    payload: name
});
export let ModalCloase = (name) => ({
    type: "MODAL-CLOASE",
    payload: name
});