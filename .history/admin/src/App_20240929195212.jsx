import { NavBar } from "./components/NavBar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import Add from "./pages/add/Add";
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
        </Routes>
      </div>
    </div>
  );
};

export default App;
