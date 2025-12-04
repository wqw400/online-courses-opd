import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Resources from "./pages/Resources";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile"; // личный кабинет

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white">
        {/* Header */}
        <Header />

        {/* Основной контент */}
        <main className="flex-1 container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />          {/* Главная */}
            <Route path="/courses" element={<Courses />} /> {/* Страница курсов */}
            <Route path="/resources" element={<Resources />} /> 
            <Route path="/login" element={<Login />} />    
            <Route path="/register" element={<Register />} /> 
            <Route path="/profile" element={<Profile />} /> {/* Личный кабинет */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
