import "./PolButton.css";
const PolButton = (props) => {
  return (
    <button onClick={props.func} className="PolButton">
      <img src={props.src} alt={props.alt}/>
      {props.text}
    </button>
  );
};
export default PolButton;
