import React from 'react'
import './inputAddTasks.css'


class InputAddTasks extends React.Component{
    render(){
        return(
        <div className='form-wrapper'>
            <div className='form-input-wrapper'>
                <input placeholder='What are you working on?' type="text" className='input-form'/>
            </div>
            <div className='input-button'>
                <button onClick={()=>{this.props.onCansel(false)}} className='cansel-btn'>Cansel</button>
                <button className='save-btn'>Save</button>
            </div>
        </div>
        )
    }
}

export default InputAddTasks;