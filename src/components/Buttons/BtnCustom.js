import "../Buttons/Buttons.css"

export default function BtnCustom(props){
    
    return(
        <>
            <a className="btn btn-black" href={props.link} >
                {props.text}
            </a>
        </>
    )
}