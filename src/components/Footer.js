import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative bg-[#0a0a0f]/80 backdrop-blur-xl text-gray-300 py-8 mt-12 shadow-inner"
    >
      {/* Glow effect */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-700 opacity-20 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] bg-indigo-600 opacity-20 blur-[160px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm md:text-base">© 2025 Безопасный интернет. Все права защищены.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            Telegram
          </a>
          <a
            href="https://vk.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            VK
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            YouTube
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
