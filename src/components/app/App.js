import {Component} from 'react'
import Head from "../head/head"
import Modal from '../modal/modal';
import Timer from "../timer/timer"

import './app.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state =  {
      store:{
        pomodoro:{ 
          name:"pomodoro",
          time: 25,
        },
        shortBreak:{
          name:"shortBreak",
          time: 5,
        },
        longBreak:{
          name:"longBreak",
          time: 15,
        }
      },
      mode: "pomodoro",
      modal:{
        history:{
          isOpened:false,
          title:"History",
        },
        setting:{
          isOpened:false,
          title:"Setting",
        },
        login:{
          isOpened:false,
          title:"Login",
        }
      }
    }
  }

  // изменение цвета в зависимости от mode
  
  componentDidUpdate(){
    switch(this.state.mode){
      case "pomodoro":
        document.body.style.backgroundColor = "#d95550"
              break;
      case "shortBreak":
        document.body.style.backgroundColor = "#4c9195"
              break;
      case "longBreak":
        document.body.style.backgroundColor = "#457ca3"
              break;
      default:
        document.body.style.backgroundColor = "#d95550"
    }

  }

onModeSelect=(mode)=>{
  this.setState(state=>({...state, mode:mode}))
}
//открытие и закрытие модального окна
onToggleModalOpen=(name)=>{
  debugger
  switch(name){
    case "History":
      // отключает все модалки, и включает ту на которую нажали
      this.setState(state=>({...state,
         modal: {
           setting:
            {...state.modal.setting, isOpened: false },
            login:{...state.modal.login,isOpened:false }, 
            history:{isOpened : !state.modal.history.isOpened , title:state.modal.history.title}}}))
            break;
    case "Setting":
      this.setState(state=>({...state, modal: {history:{...state.modal.history, isOpened: false },login:{...state.modal.login,isOpened:false }, setting:{isOpened : !state.modal.setting.isOpened , title:state.modal.setting.title}}}))
            break;
    case "Login":
      this.setState(state=>({...state, modal: {history:{...state.modal.history, isOpened: false },setting:{...state.modal.setting,isOpened:false }, login:{isOpened : !state.modal.login.isOpened , title:state.modal.login.title}}}))
            break;
    default:
      console.log('default')
  }
}
// передаваемые настройки таймера в зависимости от нажатой кнопки 
  onChangeVisibleSettings=(store,mode)=>{
      switch(mode){
        case "pomodoro":
                return store.pomodoro
        case "shortBreak":
                return store.shortBreak
        case "longBreak":
                  return store.longBreak
        default:
                 return store.pomodoro
      }
  }
  render(){
    const {store,mode} = this.state;
    const {history,login,setting} = this.state.modal
    


    let VisibleSetting = this.onChangeVisibleSettings(store, mode);
    // if(VisibleSetting.name == mode)
    // let VisibleSetting = this.onChangeVisibleSettings(store, mode);
    
    return (
      <>
        <Modal key={history.title} isOpened={history.isOpened} title={history.title} onModalClose={()=>{this.onToggleModalOpen(history.title)}}/>
        <Modal key={login.title} isOpened={login.isOpened} title={login.title} onModalClose={()=>{this.onToggleModalOpen(login.title)}}/>
        <Modal key={setting.title} isOpened={setting.isOpened} title={setting.title} onModalClose={()=>{this.onToggleModalOpen(setting.title)}}/>
        <div className="container">
          <Head onToggleModalOpen={this.onToggleModalOpen} mode={mode}/>
          <div className="body">
            <Timer onModeSelect={this.onModeSelect} mode={mode} key= {mode} settings={VisibleSetting}/>
            
          </div>
        </div>
      </>
    );
  }
}

export default App;
