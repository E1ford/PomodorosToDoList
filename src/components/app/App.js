
import Head from "../head/head"
import Modal from '../modal/modal';
import Timer from "../timer/timer"
import {ModalCloase} from '../../redux/actionCreators'
import './app.css';
import { useSelector,useDispatch } from 'react-redux';


const  App =()=> {

const dispatch = useDispatch();
const state = useSelector(state=>state)

    let modal= state.modal
    const visitedModal = modal.map(i=>{
      return (<Modal key={i.title} isOpened={i.isOpened} title={i.title} onModalClose={()=>{dispatch(ModalCloase(i.title))}}/>)
    })

    return (
      <>
        {visitedModal}
        <div className="container">
          <Head/>
          <div className="body">
            <Timer/>
          </div>
        </div>
      </>
    )
  
}

export default App;
