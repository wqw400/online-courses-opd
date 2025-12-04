import React, { useState } from "react";

function VideoUploadForm() {
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setVideo(e.target.files[0]);
      setMessage(`Выбран файл: ${e.target.files[0].name}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!video || !title) {
      setMessage("⚠ Пожалуйста, добавьте видео и название!");
      return;
    }

    const formData = new FormData();
    formData.append("video", video);
    formData.append("title", title);
    formData.append("description", description);

    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Ошибка сервера: ${response.status} - ${text}`);
      }

      const result = await response.text();
      setMessage(`✅ Видео успешно загружено! (${result})`);
      setVideo(null);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Ошибка при загрузке видео:", error);
      setMessage(`❌ Ошибка при загрузке видео: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">Загрузить своё видео</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Название видео"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-700"
        />
        <textarea
          placeholder="Описание видео"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-700"
        />
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="w-full"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition disabled:opacity-50"
        >
          {loading ? "Загрузка..." : "Загрузить"}
        </button>
      </form>

      {message && (
        <p className="mt-2 text-center text-gray-700 dark:text-gray-200 break-words">
          {message}
        </p>
      )}
    </div>
  );
}

export default VideoUploadForm;
