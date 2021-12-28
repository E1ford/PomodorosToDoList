import {useState,} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './toDoList.css'
import {deleteTask,changeTaskDone} from '../../redux/actionCreators'
import InputAddTasks from './inputAddTasks/inputAddTasks'


const ToDoList =()=>{

    let [openForm,setTogleOpenForm] = useState(false);

    const state = useSelector(state=>state),
        dispatch = useDispatch(),
        tasks = state.tasks;
    
    const onChangeTaskDone =(id)=>{
        dispatch(changeTaskDone(id))
    }
    const onDeleteTask =(id)=>{
        dispatch(deleteTask(id))
    }


    let activeTasks = tasks.filter(el => el.done === false).map((item,index) =>{
        return  <li key = {index} className='tasks__item-list'>
                    <div className='content-left' name={item.name}>
                        <button onClick={()=>{onChangeTaskDone(item.id)}} className='btn-ok'>
                            <i className="bi bi-patch-check"></i>
                        </button>
                        <div className='textToDo'>{item.text}</div>
                    </div>
                    <button onClick={()=>{onDeleteTask(item.id)}} className="btn-ok">
                        <i className="bi bi-trash"></i>
                    </button>
                </li>
    })

    return(
        <div className='tasks__wrapper'>
            <div className='tasks__active-tasks'>
                <ul className='tasks__active-list'>{activeTasks}</ul>
            </div>
            {openForm ? <InputAddTasks onCansel={setTogleOpenForm}/> : 
                <button onClick={()=>{setTogleOpenForm(true)}} className='tasks__button-add-task'>+Add task</button> }
        </div>
    )
}

export default ToDoList;