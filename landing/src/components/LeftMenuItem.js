import './LeftMenuItem.css';
const LeftMenuItem = (props) => {
    return (
        <div className="LeftMenuItem" onClick={props.href}>
            <img src={props.src} alt={props.alt}></img>
            <p>{props.text}</p>
        </div>
    );
}
export default LeftMenuItem;