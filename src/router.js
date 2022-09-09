//React Router Dom
import { Routes, Route, Navigate } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";

// Pages
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

// hooks 

import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

// Context
import { AuthProvider } from "./context/AuthContext";
import CreatePost from "./pages/CreatePost/CreatePost";
import Dashboard from "./pages/Dashboard/Dashboard";
import Search from "./pages/Search/Search";
import Post from "./pages/Post/Post";
import EditPost from "./pages/EditPost/EditPost";

const Paths = () => {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }
  return (
    <AuthProvider value={{ user }}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path="/posts/:id" element={<Post/>} />
            <Route
                path="/posts/edit/:id"
                element={user ? <EditPost/> : <Navigate to="/login" />}
              />
            <Route path="/login" element={!user ? <Login/> : <Navigate to="/"/>}/>
            <Route path="/register" element={!user ? <Register/> : <Navigate to= "/"/>}/>
            <Route path="/posts/create" element={user ? <CreatePost/> : <Navigate to="/login"/>}/>
            <Route path="/dashboard" element={user ? <Dashboard/> : <Navigate to="/login"/>}/>
        </Routes>
      </AuthProvider>
  )
}

export default Paths;