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
      modal:[
        {
          isOpened:false,
          title:"History",
        },
        {
          isOpened:false,
          title:"Setting",
        },
        {
          isOpened:false,
          title:"Login",
        }
      ]
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
//открытие и закрытие модального окна модального окна 
onToggleModalOpen=(name)=>{
  this.setState(({modal})=>({
    modal : modal.map(item => {
      if(item.title === name ){
        return {...item, isOpened: !item.isOpened}
      }
      return item 
    })
  }))
  // this.setState(state=>(
  //   {...state, modal: state.modal.map(el=>el.title == name ? el.isOpened = true : el.isOpened =false)}
  //   ))
  
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

    const modalWindow = this.state.modal.map( item =>{
      return <Modal key={item.title} isOpened={item.isOpened} title={item.title} onModalClose={()=>{this.onToggleModalOpen(item.title)}}/>
    })


    let VisibleSetting = this.onChangeVisibleSettings(store, mode);
    // if(VisibleSetting.name == mode)
    // let VisibleSetting = this.onChangeVisibleSettings(store, mode);
    
    return (
      <>
        {modalWindow}
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
