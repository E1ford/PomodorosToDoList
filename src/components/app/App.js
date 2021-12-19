
import Head from "../head/head"
import ModalHistory from '../modal/modalHistory';
import ModalSetting from '../modal/modalSetting';
import Timer from "../timer/timer"
import {ModalCloase} from '../../redux/actionCreators'
import './app.css';
import { useSelector,useDispatch } from 'react-redux';
import React from "react";

const  App =()=> {

const dispatch = useDispatch();
const state = useSelector(state=>state)

    let modal= state.modal
    

    return (<>
        <div className="container">
          <Head />
          <div className="body">
            <Timer/>
          </div>
        </div>
        <ModalHistory isOpened={modal.history.isOpened} title={modal.history.title} onModalClose={()=>{dispatch(ModalCloase(modal.history.title))}}/>
        <ModalSetting isOpened={modal.setting.isOpened} title={modal.setting.title} onModalClose={()=>{dispatch(ModalCloase(modal.setting.title))}}/>
      </>)
  
}

export default App;
