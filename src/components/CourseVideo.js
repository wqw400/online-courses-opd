import React from "react";
import { motion } from "framer-motion";

export default function CourseVideo({ title, videoFile }) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl mb-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <video
        src={videoFile}
        controls
        className="w-full rounded-xl shadow-[0_0_30px_rgba(0,150,255,0.3)]"
        preload="metadata"
      />
    </motion.div>
  );
}
