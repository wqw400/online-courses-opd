import React from "react";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";

export default function Carousel({ courses }) {
  return (
    <div className="relative py-6">
      {/* Фоновое свечение */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-700 opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-indigo-600 opacity-20 blur-[120px] rounded-full"></div>
      </div>

      <motion.div
        className="flex overflow-x-auto space-x-6 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <CourseCard {...course} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
