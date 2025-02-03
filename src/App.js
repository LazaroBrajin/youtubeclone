import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VideoPlayerPage from "./pages/VideoPlayerPage";
import LoginPage from "./pages/LoginPage";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { token, login, logout } = useContext(AuthContext);

  return (
      <Router>
        <div className='min-h-screen bg-gray-100'>
          <nav className="p-4 bg-blue-600 text-white flex justify-between">
            <h1 className="text-xl font-bold">YouTube Clone</h1>
            {token ? (
              <button className="bg-red-500 px-4 py-2 rounded" onClick={logout}>
                Cerrar Sesión
              </button>
            ) : null}
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage onLogin={login} />} />
            <Route path="/video/:id" element={token ? <VideoPlayerPage /> : <Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;


