import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0a0a0f] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-700 opacity-30 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-indigo-600 opacity-30 blur-[160px] rounded-full"></div>
      </div>

      <motion.div
        className="
          max-w-md w-full p-10 
          bg-white/10 backdrop-blur-xl 
          border border-white/20 
          rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.15)]
        "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center">
          Вход
        </h1>

        <form className="flex flex-col gap-5">

          <input
            type="email"
            placeholder="Email"
            className="
              p-4 text-white bg-white/10 backdrop-blur-lg
              border border-white/20 rounded-xl
              focus:outline-none focus:ring-2 focus:ring-yellow-400
            "
          />

          <input
            type="password"
            placeholder="Пароль"
            className="
              p-4 text-white bg-white/10 backdrop-blur-lg
              border border-white/20 rounded-xl
              focus:outline-none focus:ring-2 focus:ring-yellow-400
            "
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="
              p-4 mt-2 
              bg-gradient-to-r from-yellow-400 to-amber-300
              text-black font-semibold text-lg 
              rounded-xl shadow-[0_0_30px_rgba(255,233,0,0.4)]
              hover:shadow-[0_0_40px_rgba(255,233,0,0.6)]
              transition
            "
          >
            Войти
          </motion.button>
        </form>

        <p className="mt-5 text-center text-gray-300">
          Нет аккаунта?{" "}
          <Link 
            to="/register" 
            className="text-yellow-300 font-semibold hover:underline"
          >
            Зарегистрироваться
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
