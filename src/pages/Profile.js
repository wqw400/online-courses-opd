import React from "react";
import { motion } from "framer-motion";

export default function Profile() {
  const user = {
    name: "Иван Иванов",
    email: "ivan@example.com",
    avatar: "https://i.pravatar.cc/150?img=3",
    coursesCompleted: 5,
    totalCourses: 12,
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto p-8 
      bg-white/10 backdrop-blur-xl 
      dark:bg-gray-800/20 
      rounded-3xl shadow-2xl border border-white/20 text-white"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Заголовок */}
      <h1 className="text-4xl font-bold mb-8 text-center">Профиль</h1>

      {/* Основной блок */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Аватар + информация */}
        <div className="flex flex-col items-center text-center md:text-left">
          <motion.img
            src={user.avatar}
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          />

          <h2 className="text-2xl font-semibold mt-4">{user.name}</h2>
          <p className="text-gray-200">{user.email}</p>
        </div>

        {/* Прогресс и статистика */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-3">Ваш прогресс</h3>

          {/* Прогресс бар */}
          <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
            <motion.div
              className="bg-indigo-500 h-4 rounded-full"
              initial={{ width: 0 }}
              animate={{
                width: `${(user.coursesCompleted / user.totalCourses) * 100}%`,
              }}
              transition={{ duration: 1 }}
            />
          </div>

          <p className="mt-2 text-gray-200">
            Пройдено {user.coursesCompleted} из {user.totalCourses} курсов
          </p>

          {/* Карточка статистики */}
          <motion.div
            className="mt-6 p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-lg font-semibold mb-3">Статистика</h4>

            <ul className="space-y-2 text-gray-200">
              <li>⭐ Пройдено уроков: {user.coursesCompleted * 4}</li>
              <li>📚 Изучено курсов: {user.coursesCompleted}</li>
              <li>🎯 Цель: пройти 100% курсов</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Кнопка выхода */}
      <button
        className="mt-10 w-full py-3 
        bg-red-500/80 hover:bg-red-600 
        text-white font-semibold rounded-2xl 
        shadow-lg transition"
      >
        Выйти из аккаунта
      </button>
    </motion.div>
  );
}
