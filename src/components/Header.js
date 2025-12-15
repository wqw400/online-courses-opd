import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const location = useLocation();

  const links = [
    { name: "Главная", path: "/" },
    { name: "Курсы", path: "/courses" },
    { name: "Статьи", path: "/resources" },
    { name: "Тест", path: "/test" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur-xl shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Логотип */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg hover:text-yellow-400 transition-colors"
        >
          Безопасный интернет
        </Link>

        {/* Навигация */}
        <nav className="flex space-x-4 md:space-x-6">
          {links.map((link, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <Link
                to={link.path}
                className={`px-3 py-2 rounded-lg font-semibold transition-colors ${
                  location.pathname === link.path
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {link.name}
              </Link>
              {location.pathname === link.path && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-400 rounded-full"
                />
              )}
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
