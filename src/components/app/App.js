import {Component} from 'react'
import Head from "../head/head"
import Timer from "../timer/timer"

import './app.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      settings:{
        time:25,
        activeBtnMode:'pomodoro',
        activeBtnStart:false
      }
    }
  }
  onChangeActiveBtnMode=(mode)=>{
    debugger
    this.setState(state=>{
      state.settings.activeBtnMode = mode
      return {state}
    })
  }
  render(){
    return (
      <div className="container">
        <Head/>
        <div className="body">
          <Timer onChangeActiveBtnMode ={this.onChangeActiveBtnMode} settings={this.state.settings}/>
        </div>
      </div>
    );
  }
}

export default App;
