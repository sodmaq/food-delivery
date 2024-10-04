import { NavBar } from "./components/NavBar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import Add from "./pages/add/Add";
import Order from "./pages/orders/Orders";
import List from "./pages/list/List";
import { Routes } from "./routes/Routes";
const App = () => {
  return (
    <div>
      <NavBar />
      <hr />
      <div className="app-content">
        <SideBar />
        <Routes>
          <Routes path="/add" element={<Add />} />
          <Routes path="/list" element={<List />} />
          <Routes path="/order" element={<Order />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
