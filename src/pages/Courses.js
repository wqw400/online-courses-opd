import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "Основы интернет-безопасности",
    description: "Научитесь распознавать мошеннические схемы и защищать себя.",
    video: "https://res.cloudinary.com/dxypdd3yn/video/upload/v1764866898/default_pc6cfq.mp4",
  },
  {
    id: 2,
    title: "Фишинг и соцсети",
    description: "Как не попасться на уловки мошенников в соцсетях и почте.",
    video: "https://res.cloudinary.com/dxypdd3yn/video/upload/v1764864116/1105_1_yttcrd.mp4",
  },
  {
    id: 3,
    title: "Онлайн-платежи",
    description: "Безопасные методы оплаты и защита ваших данных.",
    video: "https://res.cloudinary.com/dxypdd3yn/video/upload/v1764864504/vid%D0%B0%D1%8B%D0%B0%D1%8Beo_ualjks.mp4",
  },
];

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white pt-32 pb-24 px-6 overflow-hidden">

      {/* Фоновые свечения */}
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
        Курсы по кибербезопасности
      </motion.h1>

      {/* Сетка курсов */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            whileHover={{ scale: 1.04 }}
            className="
              bg-white/10 backdrop-blur-xl border border-white/10
              rounded-2xl p-6 shadow-xl cursor-pointer
              hover:shadow-[0_0_40px_rgba(100,100,255,0.4)]
              transition-all
            "
            onClick={() => setSelectedCourse(course)}
          >
            <h2 className="text-2xl font-semibold mb-3">{course.title}</h2>
            <p className="text-gray-300 mb-3">{course.description}</p>
            <p className="text-sm text-gray-400 mb-4">Кол-во уроков: {course.lessons}</p>
          </motion.div>
        ))}
      </div>

      {/* Модальное окно с видео */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              className="relative w-full max-w-[95vw] h-[80vh] rounded-xl"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={() => setSelectedCourse(null)}
              >
                ✖
              </button>
              <video
                src={selectedCourse.video}
                controls
                autoPlay
                className="w-full h-full object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
