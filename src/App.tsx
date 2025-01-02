import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;

//<Route path="yourprofile" element={<Profile />} />
//<Route path="profile/:id" element={<PublicProfile />} />{" "}
//<Route path="find" element={<Find data={sampleData} />} />
