import React from "react";
import { motion } from "framer-motion";

export default function CourseCard({ title, description, videoUrl }) {
  return (
    <motion.div
      className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl hover:shadow-[0_0_40px_rgba(100,100,255,0.4)] transition-all"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Видео */}
      <div className="relative rounded-xl overflow-hidden">
        <video
          src={videoUrl}
          className="w-full rounded-xl"
          controls
        />
        {/* Мягкое свечение за видео */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-xl rounded-xl pointer-events-none"></div>
      </div>

      {/* Заголовок и описание */}
      <h2 className="text-lg font-bold mt-4 text-white">{title}</h2>
      <p className="text-gray-300 mt-1">{description}</p>

      {/* Кнопка */}
      <button className="mt-3 w-full bg-gradient-to-r from-yellow-400 to-amber-300 text-black font-semibold rounded-xl py-2 hover:scale-105 hover:shadow-lg transition-all">
        Смотреть
      </button>
    </motion.div>
  );
}
