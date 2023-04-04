import Logo from "./Logo";
import "./Dashboard.css";
import SearchBar from "./SearchBar";
import LeftMenu from "./LeftMenu";
import FinalPolCompact from "./FinalPolCompact";
import MainPolArea from "./MainPolArea";
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Logo />
      <SearchBar />
      <div className="menu">
        <LeftMenu />
      </div>
      <MainPolArea />
    </div>
  );
};
export default Dashboard;
