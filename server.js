const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.static("uploads"));

// Настройка хранения файлов
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

// Маршрут для загрузки видео
app.post("/upload", upload.single("video"), (req, res) => {
  if (!req.file) return res.status(400).send("Файл не загружен.");
  console.log("Загружен файл:", req.file.filename);
  res.status(200).send("Видео успешно загружено!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
