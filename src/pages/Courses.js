import React from "react";
import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "Основы интернет-безопасности",
    description: "Научитесь распознавать мошеннические схемы и защищать себя.",
    lessons: 8,
    video: "/videos/1105.mp4",
  },
  {
    id: 2,
    title: "Фишинг и соцсети",
    description: "Как не попасться на уловки мошенников в соцсетях и почте.",
    lessons: 6,
    video: "https://res.cloudinary.com/dxypdd3yn/video/upload/v1764864116/1105_1_yttcrd.mp4",
  },
  {
    id: 3,
    title: "Онлайн-платежи",
    description: "Безопасные методы оплаты и защита ваших данных.",
    lessons: 5,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

export default function Courses() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white pt-32 pb-24 px-6 overflow-hidden">

      {/* Фоновые свечения такие же как на Home */}
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
              rounded-2xl p-6 shadow-xl
              hover:shadow-[0_0_40px_rgba(100,100,255,0.4)]
              transition-all
            "
          >
            <h2 className="text-2xl font-semibold mb-3">{course.title}</h2>

            <p className="text-gray-300 mb-3">{course.description}</p>

            <p className="text-sm text-gray-400 mb-4">
              Кол-во уроков: {course.lessons}
            </p>

            {course.video && (
              <motion.video
                controls
                className="w-full h-[200px] object-cover rounded-xl shadow-md"
                src={course.video}
                whileHover={{ scale: 1.02 }}
              />
            )}
          </motion.div>
        ))}
      </div>

    </div>
  );
}
