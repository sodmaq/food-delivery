import "./SideBar.css";
import { assets } from "../../assets/assets";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <div className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </div>
        <div className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
