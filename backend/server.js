const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Подключение к MongoDB
mongoose.connect("mongodb://localhost:27017/online-courses");

// Схема курса
const Course = mongoose.model("Course", new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String
}));

// Настройка multer для загрузки видео
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => cb(null, file.originalname)
});
const upload = multer({ storage });

// Маршрут для загрузки видео
app.post("/api/upload", upload.single("video"), async (req, res) => {
  const { title, description } = req.body;
  const videoUrl = `/uploads/${req.file.filename}`;
  const course = new Course({ title, description, videoUrl });
  await course.save();
  res.json({ success: true, course });
});

// Получение курсов
app.get("/api/courses", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(5000, () => console.log("Backend running on port 5000"));
