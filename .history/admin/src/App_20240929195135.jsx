import { NavBar } from "./components/NavBar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import { Routes } from "./routes/Routes";
const App = () => {
  return (
    <div>
      <NavBar />
      <hr />
      <div className="app-content">
        <SideBar />
        <Routes></Routes>
      </div>
    </div>
  );
};

export default App;
