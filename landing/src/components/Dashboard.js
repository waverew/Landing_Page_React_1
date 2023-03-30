import Logo from "./Logo";
import "./Dashboard.css";
import LeftMenu from "./LeftMenu";
const Dashboard = () => {
    return (
        <div className="Dashboard">
            <Logo></Logo>
            <LeftMenu/>
        </div>
    );
}
export default Dashboard;