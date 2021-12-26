
import Head from "../head/head"
import ModalHistory from '../modal/modalHistory/modalHistory';
import ModalSetting from '../modal/modalSetting/modalSetting';
import ToDoList from '../toDoList/toDoList';
import Timer from "../timer/timer"
import './app.css';
import { useSelector } from 'react-redux';
import React from "react";

const  App =()=> {

// костыль для перерисовки таймера 
const state = useSelector(state=>state)

    return (<>
        <div className="container">
          <Head />
          <div className="body">
            <Timer key={state.mode}/>
            <ToDoList />
          </div>
        </div>
        <ModalHistory />
        <ModalSetting  />
      </>)
  
}

export default App;
