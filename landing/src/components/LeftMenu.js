import LeftMenuItem from "./LeftMenuItem";
import PolButton from "./PolButton";
import "./LeftMenu.css";
const LeftMenu = () => {
  const redirect = (astr) => {
    window.location.href = astr;
  };
  return (
    <div className="LeftMenu">
      <div>
        <LeftMenuItem
          href={() => {
            redirect("/dashboard");
          }}
          text="Dashboard"
        />
        <LeftMenuItem
          href={() => {
            redirect("/poldata");
          }}
          text="Polling Data"
        />
        <LeftMenuItem
          href={() => {
            redirect("/userdata");
          }}
          text="User Data"
        />
        <LeftMenuItem
          href={() => {
            redirect("/history");
          }}
          text="Polling History"
        />
        <PolButton text="New Poll" />
      </div>
    </div>
  );
};
export default LeftMenu;
