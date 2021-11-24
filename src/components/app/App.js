import {Component} from 'react'
import Head from "../head/head"
import Timer from "../timer/timer"

import './app.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      store:{
        pomodoro:{ 
          mode: "pomodoro",
          time: 25,
          color: 'red'
        },
        shortBreak:{
          mode: "shortBreak",
          time: 5,
          color: 'blue'
        },
        longBreak:{
          mode: "longBreak",
          time: 15,
          color: 'navyBlue'
        }
      },
      visibleSettings: ''

    }
  }
  // изменение цвета в зависимости от mode
  componentDidUpdate() {
    switch(this.state.visibleSettings.color){
      case "red":
        document.body.style.backgroundColor = "#d95550"
              break;
      case "blue":
        document.body.style.backgroundColor = "#4c9195"
              break;
      case "navyBlue":
        document.body.style.backgroundColor = "#457ca3"
              break;
      default:
        document.body.style.backgroundColor = "#d95550"
    }

  }



// передаваемые настройки в зависимости от нажатой кнопки 
  onChangeVisibleSettings=(mode)=>{
    this.setState(state=>{
      let newValue={};
      switch(mode){
        case "pomodoro":
                newValue=state.store.pomodoro;
                break;
        case "shortBreak":
                newValue=state.store.shortBreak;
                break;
        case "longBreak":
                newValue=state.store.longBreak;
                break;
        default:
                newValue=state.store.pomodoro;
      }
      return {...state,visibleSettings:newValue}
    })
  }

  render(){
    // Инициализация  значения visibleSettings
    if(!this.state.visibleSettings){
      this.onChangeVisibleSettings()
    }


    return (
      <div className="container">
        <Head color={this.state.visibleSettings.color}/>
        <div className="body">
          <Timer onChangeVisibleSettings={this.onChangeVisibleSettings} settings={this.state.visibleSettings}/>
        </div>
      </div>
    );
  }
}

export default App;
