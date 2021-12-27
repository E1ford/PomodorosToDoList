import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import './inputAddTasks.css'
import {addNewTask} from '../../../redux/actionCreators'

const  InputAddTasks=({onCansel})=> {
    const refInput = useRef(null)
    const dispatch = useDispatch();

    const onAddNewTask =()=>{
        let text = refInput.current.value
        if (!!text.trim()){
            dispatch(addNewTask(text));
            refInput.current.value = ''
        }else{}
    }
        return(
        <div className='form-wrapper'>
            <div className='form-input-wrapper'>
                <input ref={refInput} placeholder='What are you working on?' type="text" className='input-form'/>
            </div>
            <div className='input-button'>
                <button onClick={()=>{onCansel(false)}} className='cansel-btn'>Cansel</button>
                <button onClick={onAddNewTask} className='save-btn'>Save</button>
            </div>
        </div>
        )
}

export default InputAddTasks;