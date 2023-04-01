import Logo from "./Logo";
import "./Dashboard.css";
import LeftMenu from "./LeftMenu";
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Logo/>
      <div className="menu">
        <LeftMenu />
      </div>
    </div>
  );
};
export default Dashboard;
