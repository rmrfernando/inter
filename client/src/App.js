import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";
import AllStaff from "./pages/AllStaff/AllStaff";
import AllUsers from "./pages/AllUsers/AllUsers";
import Sidenav from "./pages/SideNav/Sidenav";
import SharedLayout from "./pages/SharedLayout";
import AddUser from "./pages/AddUser/AddUser";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Editprofile" element={<EditProfile />} />
          <Route path="/AllUsers" element={<AllUsers />} />
          <Route path="/AllStaff" element={<AllStaff />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/add-user/:editId" element={<AddUser />} />
        </Route>
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
