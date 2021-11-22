
import './head.css'

const Head =()=>{
    return(
        <div className="head">
            <h2 className="head-title">pomodorosTDL</h2>
            <ul>
                <li><button className="btn" type="submit">History</button></li>
                <li><button className="btn" type="submit">Setting</button></li>
                <li><button className="btn" type="submit">Login</button></li>
            </ul>
        </div>
    )
}

export default Head;