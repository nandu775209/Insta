import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomeFeed from "./pages/HomeFeed";
import CreatePost from "./pages/CreatePost"; 
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="app-container">
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HomeFeed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
   
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;