import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const courses = [
  {
    id: 1,
    category: "Фишинг и его разновидности",
    title: "Классический фишинг",
    description: "Разбираем массовые рассылки и поддельные сайты, чтобы вы могли их распознавать.",
    video: "https://res.cloudinary.com/dxypdd3yn/video/upload/v1765900794/IMG_5315_f6sspy.mp4",
  },
  {
    id: 2,
    category: "Фишинг и его разновидности",
    title: "Смишинг (SMS-фишинг)",
    description: "Обучение распознаванию опасных SMS и защите своих данных.",
    video: "https://res.cloudinary.com/dxypdd3yn/video/upload/v1765799544/IMG_0417_ftbxqj.mp4",
  },
  {
    id: 3,
    category: "Фишинг и его разновидности",
    title: "Вишинг (Голосовой фишинг)",
    description: "Как распознавать мошеннические звонки и не поддаваться на уловки.",
    video: "https://res.cloudinary.com/dxypdd3yn/video/upload/v1765799189/%D0%B2%D0%B8%D1%88%D0%B8%D0%BD%D0%B3_hqnvgf.mp4",
  },
  {
    id: 4,
    category: "Фишинг и его разновидности",
    title: "Фарминг: Невидимое перенаправление",
    description: "Понимание атак на DNS и методы защиты от них.",
    video: "https://res.cloudinary.com/dxypdd3yn/video/upload/v1765799212/IMG_0410_oipdwj.mp4",
  },
  {
    id: 5,
    category: "Целевые атаки (Spear Phishing / Whaling)",
    title: "Целевой фишинг",
    description: "Обучение распознаванию тщательно подготовленных атак на конкретных людей.",
    video: "https://res.cloudinary.com/dxypdd3yn/video/upload/v1765799244/IMG_0411_tbprxy.mp4",
  },
  {
    id: 6,
    category: "Целевые атаки (Spear Phishing / Whaling)",
    title: "Китобойный промысел (Whaling)",
    description: "Обучение защите топ-менеджеров от целевых атак.",
    video: "https://res.cloudinary.com/dxypdd3yn/video/upload/v1765799301/IMG_0412_dndwy9.mp4",
  },
  {
    id: 7,
    category: "Целевые атаки (Business Email Compromise)",
    title: "CEO-мошенничество (BEC)",
    description: "Как защититься от атак, когда мошенники подделывают письма руководителя.",
    video: "https://res.cloudinary.com/dxypdd3yn/video/upload/v1765799365/IMG_0413_sslthz.mp4",
  },
  {
    id: 8,
    category: "Взломы и несанкционированный доступ",
    title: "Атаки по словарю и брутфорс",
    description: "Обучение защите паролей и предотвращению атак методом подбора.",
    video: "https://res.cloudinary.com/dxypdd3yn/video/upload/v1765800241/IMG_0419_vi701f.mp4",
  },
  {
    id: 9,
    category: "Взломы и несанкционированный доступ",
    title: "Кредитное мошенничество (Carding)",
    description: "Обучение распознаванию кражи платежных данных и защите финансовой информации.",
    video: "https://res.cloudinary.com/dxypdd3yn/video/upload/v1765799393/IMG_0414_k7kviu.mp4",
  },
  {
    id: 10,
    category: "Социальная инженерия и обман",
    title: "Кража цифровых личностей (Account Takeover)",
    description: "Как защитить аккаунты в соцсетях, почте и играх.",
    video: "https://res.cloudinary.com/dxypdd3yn/video/upload/v1765800392/IMG_0420_hlyrlu.mp4",
  },
  {
    id: 11,
    category: "Социальная инженерия и обман",
    title: "Техническая поддержка мошенников (Tech Support Scam)",
    description: "Обучение распознаванию фейковой техподдержки и безопасному поведению при звонках.",
    video: "https://res.cloudinary.com/dxypdd3yn/video/upload/v1765799445/IMG_0415_dduomb.mp4",
  },
  {
    id: 12,
    category: "Социальная инженерия и обман",
    title: "Фейковые антивирусы (Rogueware / Scareware)",
    description: "Разбор мошеннических программ, маскирующихся под антивирус.",
    video: "https://res.cloudinary.com/dxypdd3yn/video/upload/v1765799486/IMG_0416_lakmkb.mp4",
  },
];

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const categories = ["Все", ...new Set(courses.map(c => c.category))];

  const filteredCourses = selectedCategory === "Все" 
    ? courses 
    : courses.filter(c => c.category === selectedCategory);

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
        className="text-4xl md:text-6xl font-extrabold text-center drop-shadow-xl mb-8"
      >
        Курсы по кибербезопасности
      </motion.h1>

      {/* Кнопки категорий */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat, i) => (
          <motion.button
            key={i}
            onClick={() => setSelectedCategory(cat)}
            whileHover={{ scale: 1.05 }}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              selectedCategory === cat 
                ? "bg-yellow-400 text-gray-900 shadow-[0_0_20px_rgba(255,255,150,0.6)]" 
                : "bg-white/10 text-white hover:bg-yellow-400 hover:text-gray-900"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Сетка курсов */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(255,255,100,0.5)" }}
            onClick={() => setSelectedCourse(course)}
            className="cursor-pointer bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl transition-all"
          >
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-300">{course.description}</p>
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
