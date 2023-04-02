import Logo from "./Logo";
import "./Dashboard.css";
import SearchBar from "./SearchBar";
import LeftMenu from "./LeftMenu";
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Logo/>
      <SearchBar/>
      <div className="menu">
        <LeftMenu />
      </div>
    </div>
  );
};
export default Dashboard;
