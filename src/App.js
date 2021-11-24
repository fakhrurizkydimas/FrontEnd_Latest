import { Route, Routes } from "react-router-dom";
import { Navbar, Report } from "./components";
import Home from "./pages/Home";
import Portal from "./pages/Portal";
import { NewsUpdate,OrganizationalStructure,BOD,BOC,Regulation } from "./components";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/" element={<Portal />}>
          <Route path="/news/update" element={<NewsUpdate />} />
          <Route path="/news/organizationalstructure" element={<OrganizationalStructure />} />
          <Route path="/news/bod" element={<BOD />} />
          <Route path="/news/boc" element={<BOC />} />
          <Route path="/news/regulation" element={<Regulation />} />
          <Route path="/news/report" element={<Report />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
