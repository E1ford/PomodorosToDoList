
import './head.css'

const Head =({color})=>{


    let clazzBorder= '';
    let clazzBtn= '';
    switch(color){
        case "blue":
            clazzBorder = "head head__blue"
            clazzBtn = 'btn btn__blue'
                break;
        case "navyBlue":
            clazzBorder = "head head__navyBlue"
            clazzBtn = 'btn btn__navyBlue'
                break;
        default:
            clazzBorder = "head"
            clazzBtn = 'btn'
    }


    return(
        <div className={clazzBorder}>
            <h2 className="head-title">pomodorosTDL</h2>
            <ul>
                <li><button className={clazzBtn} type="submit">History</button></li>
                <li><button className={clazzBtn} type="submit">Setting</button></li>
                <li><button className={clazzBtn} type="submit">Login</button></li>
            </ul>
        </div>
    )
}

export default Head;