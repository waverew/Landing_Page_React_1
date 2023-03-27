import "./Button.css"
const Button = (props) => {
    return (
        <div className="Button">
            <button onClick={props.func}>{props.text}</button>
        </div>
    )
}
export default Button;