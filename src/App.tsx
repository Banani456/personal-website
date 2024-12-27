import Home from "./pages/Home";
import Nav from "./pages/Nav";
import { Routes, Route, HashRouter, useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  return (
    <HashRouter>
      <button onClick={() => navigate("/")}>Home</button>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

//<Route path="yourprofile" element={<Profile />} />
//<Route path="profile/:id" element={<PublicProfile />} />{" "}

//<Route path="find" element={<Find data={sampleData} />} />
