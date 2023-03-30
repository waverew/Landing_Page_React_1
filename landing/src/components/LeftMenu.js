import LeftMenuItem from "./LeftMenuItem";
import PolButton from "./PolButton";
import "./LeftMenu.css";
const LeftMenu = () => {
  return (
    <div className="LeftMenu">
      <div>
        <LeftMenuItem href="/dashboard" text="Dashboard" />
        <LeftMenuItem href="/poldata" text="Polling Data" />
        <LeftMenuItem href="/userdata" text="User Data" />
        <LeftMenuItem href="/history" text="Polling History" />
        <PolButton text="New Poll" />
      </div>
    </div>
  );
};
export default LeftMenu;
