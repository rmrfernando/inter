import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./pages/Login/Login";
import Register from"./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<SharedLayout />}>
          
        </Route> */}
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Editprofile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
