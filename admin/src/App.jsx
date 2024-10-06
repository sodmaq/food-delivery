import { NavBar } from "./components/NavBar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import Add from "./pages/add/Add";
import Order from "./pages/orders/Orders";
import List from "./pages/list/List";
import { Routes, Route } from "react-router-dom"; // Import Route
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const url = "http://localhost:4000";
  return (
    <div>
      <NavBar />
      <ToastContainer />
      <hr />
      <div className="app-content">
        <SideBar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />{" "}
          {/* Use Route for each path */}
          <Route path="/list" element={<List url={url} />} />
          <Route path="/order" element={<Order url={url} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
