import React from "react";
import { motion } from "framer-motion";

const articles = [
  { id: 1, title: "Статья по интернет-безопасности", link: "https://www.cnews.ru/news" },
  { id: 2, title: "Форум по защите данных", link: "https://habr.com/ru/" },
  { id: 3, title: "Видео-инструкции по кибербезопасности", link: "https://www.youtube.com/" },
];

export default function Articles() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white pt-32 pb-24 px-6 overflow-hidden">

      {/* Фоновые неоновые свечения */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-[-250px] right-[-300px] w-[700px] h-[700px] bg-purple-700 opacity-25 blur-[200px] rounded-full"></div>
        <div className="absolute bottom-[-250px] left-[-300px] w-[700px] h-[700px] bg-indigo-600 opacity-25 blur-[200px] rounded-full"></div>
      </div>

      {/* Заголовок */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-center drop-shadow-xl mb-16"
      >
        Статьи и материалы
      </motion.h1>

      {/* Сетка статей */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((article, i) => (
          <motion.a
            key={article.id}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="
              bg-white/10 backdrop-blur-xl border border-white/10
              rounded-2xl p-6 shadow-xl text-lg font-semibold text-center
              hover:shadow-[0_0_40px_rgba(100,100,255,0.4)]
              transition-all
            "
          >
            {article.title}
          </motion.a>
        ))}
      </div>

    </div>
  );
}
