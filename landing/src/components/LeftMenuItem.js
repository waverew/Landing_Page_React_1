const LeftMenuItem = (props) => {
    return (
        <div className="LeftMenuItem">
            <img src={props.src} alt={props.alt}></img>
            <a href={props.href}>{props.text}</a>
        </div>
    );
}
export default LeftMenuItem;