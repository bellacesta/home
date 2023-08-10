import { Link } from "react-router-dom"
import "../Buttons/Buttons.css"

export default function BtnCustom(props){
    
    return(
        <>
            <Link className="btn btn-black" to={props.link} >
                {props.text}
            </Link>
        </>
    )
}