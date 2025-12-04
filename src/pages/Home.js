import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import BackgroundGlow from "../components/BackgroundGlow"; // подключаем компонент

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white overflow-hidden">

      {/* Фон со свечениями */}
      <BackgroundGlow />

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-xl"
        >
          Безопасный Интернет
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-lg md:text-2xl text-gray-300"
        >
          Научись защищать себя и близких от онлайн-мошенников и угроз.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-10"
        >
          <Link
            to="/courses"
            className="
              inline-flex items-center px-10 py-4
              bg-gradient-to-r from-yellow-400 to-amber-300
              text-black font-semibold rounded-xl text-lg
              shadow-[0_0_30px_rgba(255,233,0,0.4)]
              hover:shadow-[0_0_40px_rgba(255,233,0,0.6)]
              transition-all hover:scale-105
            "
          >
            Перейти к курсам
            <ArrowRight className="ml-3 w-5 h-5" />
          </Link>
        </motion.div>

        {/* Anti-Fraud Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative mx-auto mt-16 max-w-2xl"
        >
          <img
            src="/images/644.png"
            alt="Борьба с мошенниками"
            className="
              w-full h-[220px] md:h-[260px] object-cover rounded-2xl
              shadow-[0_0_40px_rgba(0,150,255,0.35)]
              border border-white/10 opacity-90
            "
          />
          <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 blur-2xl"></div>
        </motion.div>
      </section>

      {/* Advantages Section */}
      <section className="relative z-10 py-24 px-6 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-16"
        >
          Почему выбирают нас
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Актуальные курсы",
              desc: "Учебные материалы обновляются под реальные современные угрозы.",
            },
            {
              title: "Практическая защита",
              desc: "Полученные знания помогают защитить ваши данные и деньги.",
            },
            {
              title: "Бесплатные статьи",
              desc: "Доступ к инструкциям, гайдам и видео по кибербезопасности.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="
                bg-white/10 backdrop-blur-xl
                border border-white/10
                rounded-2xl p-8 shadow-xl
                hover:shadow-[0_0_40px_rgba(100,100,255,0.4)]
                transition-all
              "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.25, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-300">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
