import { NavBar } from "./components/NavBar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import Add from "./pages/add/Add";
import Order from "./pages/orders/Orders";
import List from "./pages/list/List";
import { Routes, Route } from "react-router-dom"; // Import Route
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <NavBar />
      <hr />
      <div className="app-content">
        <SideBar />
        <Routes>
          <Route path="/add" element={<Add />} />{" "}
          {/* Use Route for each path */}
          <Route path="/list" element={<List />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
