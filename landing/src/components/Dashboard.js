import Logo from "./Logo";
import "./Dashboard.css";
import SearchBar from "./SearchBar";
import LeftMenu from "./LeftMenu";
import MainPolArea from "./MainPolArea";
import VoteActivity from "./VoteActivity";
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Logo />
      <SearchBar />
      <div className="menu">
        <LeftMenu />
      </div>
      <MainPolArea />
      <VoteActivity />
    </div>
  );
};
export default Dashboard;
