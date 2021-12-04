import './modal.css'





const Modal = ({isOpened, title, data,onModalClose}) =>{
    return (
        <div className={`modal__wrapper ${isOpened ? 'open' : 'close'}`}>
            <div className="modal__body">
                <div className="modal__close" onClick={onModalClose}>×</div>
                <h2>{title}</h2>
                <hr />
                {data}
            </div>
        </div>
    )
}


export default Modal;