import {Component} from 'react'
import Head from "../head/head"
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
      mode: "pomodoro"
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
// передаваемые настройки таймера в зависимости от нажатой кнопки 
  onChangeVisibleSettings=(store,mode)=>{
      switch(mode){
        case "pomodoro":
          debugger
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
    const {store,mode} = this.state
    let VisibleSetting = this.onChangeVisibleSettings(store, mode);
    if(VisibleSetting.name == mode)
    // let VisibleSetting = this.onChangeVisibleSettings(store, mode);
    
    return (
      <div className="container">
        <Head color={mode}/>
        <div className="body">
          <Timer onModeSelect={this.onModeSelect} mode={mode} settings={VisibleSetting}/>
        </div>
      </div>
    );
  }
}

export default App;
