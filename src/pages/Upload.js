import React, { useState } from "react";
import VideoUploadForm from "../components/VideoUploadForm";

function Upload() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Загрузка видео</h1>

      {/* Кнопка открытия формы */}
      <button
        onClick={toggleForm}
        className="mb-6 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition"
      >
        {showForm ? "Скрыть форму" : "Загрузить видео"}
      </button>

      {/* Форма загрузки */}
      {showForm && <VideoUploadForm />}
    </div>
  );
}

export default Upload;
