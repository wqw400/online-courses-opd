import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] text-gray-400 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Логотип или название */}
        <div className="text-white font-bold text-lg mb-4 md:mb-0">
          Безопасный интернет
        </div>

        {/* Навигация / ссылки */}
        <div className="flex space-x-6">
          <a
            href="/"
            className="hover:text-yellow-400 transition-colors"
          >
            Главная
          </a>
          <a
            href="/courses"
            className="hover:text-yellow-400 transition-colors"
          >
            Курсы
          </a>
          <a
            href="/resources"
            className="hover:text-yellow-400 transition-colors"
          >
            Статьи
          </a>
          <a
            href="/test"
            className="hover:text-yellow-400 transition-colors"
          >
            Тест
          </a>
        </div>

        {/* Авторские права */}
        <div className="mt-4 md:mt-0 text-sm text-gray-500">
          © {new Date().getFullYear()} Безопасный интернет. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
