import { useContext } from "react";
import { Context } from "./context/Context";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";

import Home from "./views/Pages/Home";
import Login from "./views/Pages/Login/Login";
import PostIt from "./views/Pages/PostIt/PostIt";
import ProfileSettings from "./views/Pages/ProfileSettings/ProfileSettings";
import Register from "./views/Pages/Register/Register"
import Single from "./views/Pages/Single/Single";
import Footer from "./components/Footer/Footer";
import About from "./views/Pages/About/About";
import StyleBoard from "./views/Pages/StyleBoard/StyleBoard";
import Moodboard from "./views/Pages/Moodboard/Moodboard";
import AllPost from "./views/Pages/All Post/AllPost";


function App() {
  const { user } = useContext(Context)
  return (
    
    <BrowserRouter>
    {/* <Link to="/api">Test Api</Link> */}
    <Navbar />
    
    <Routes>
    
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/styleboard" element={<StyleBoard />} />
    <Route path="/moodboard" element={<Moodboard />} />
    <Route path="/post/:postId" element={<Single />} />
    <Route path="/allpost" element={<AllPost />} />
    <Route path="/post" element={ user ? <PostIt /> : <Register />} />
    <Route path="/register" element={ user ? <Home /> : <Register />} />
    <Route path="/login" element={ user ? <Home /> : <Login />} />
    <Route path="/profilesettings" element={user ? <ProfileSettings /> : <Register />} />
    <Route path="*" element={<><h1>Error</h1> </>} />
    </Routes>
    <Footer />
    </BrowserRouter>
    
  );
}

export default App;
