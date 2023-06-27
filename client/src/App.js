import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./pages/Login/Login";
import Register from"./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";
import AllStaff from "./pages/EditProfile/AllStaff";
import AllUsers from "./pages/EditProfile/AllUsers";

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
        <Route path="/AllUsers" element={<AllUsers />} />
        <Route path="/AllStaff" element={<AllStaff />} />
      </Routes>
    </Router>
  );
}

export default App;
