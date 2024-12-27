import Home from "./pages/Home";
import Nav from "./pages/Nav";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

//<Route path="yourprofile" element={<Profile />} />
//<Route path="profile/:id" element={<PublicProfile />} />{" "}

//<Route path="find" element={<Find data={sampleData} />} />
