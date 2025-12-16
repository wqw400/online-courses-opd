import React, { useState } from "react";
import { motion } from "framer-motion";

const questions = [
   {
    question: "На каком курсе вы обучаетесь?",
    options: [
      "1",
      "2",
      "3",
      "4",
    ],
      correct: 1,2,3,4,
  },
  {
    question: "Что является главной целью классического фишинга?",
    options: [
      "Замедлить работу компьютера",
      "Получить логины, пароли или данные карты",
      "Установить обновление системы",
      "Проверить безопасность сайта",
    ],
    correct: 1,
  },
  {
    question: "Чем опасен фарминг?",
    options: [
      "Письма приходят в спам",
      "Переход происходит даже при правильном URL",
      "Нужно скачивать файл",
      "Работает только в соцсетях",
    ],
    correct: 1,
  },
  {
    question: "Что такое Spear Phishing?",
    options: [
      "Массовая рассылка писем",
      "Атака на DNS",
      "Целевая атака на конкретного человека",
      "Вирусная атака",
    ],
    correct: 2,
  },
  {
    question: "Ссылка ниже выглядит подозрительно. Как думаете?",
    image: "/images/vkontakte-feik.jpg",
    options: ["Фишинговая ссылка", "Безопасная ссылка"],
    correct: 0,
  },
  {
    question: "Это письмо выглядит настоящим или поддельным?",
    image: "/images/Phishing03_0.jpg",
    options: ["Фишинговое письмо", "Настоящее письмо"],
    correct: 0,
  },
  {
    question: "Кто чаще всего становится жертвой Whaling?",
    options: ["Студенты", "Пенсионеры", "Топ-менеджеры", "Дети"],
    correct: 2,
  },
  {
    question: "Что такое BEC (CEO-мошенничество)?",
    options: [
      "Взлом сайта",
      "Поддельные SMS",
      "Финансовые письма от имени руководителя",
      "Вирус через флешку",
    ],
    correct: 2,
  },
  {
    question: "Что помогает защититься от BEC?",
    options: ["Антивирус", "Подтверждение платежей по телефону", "VPN", "Очистка cookies"],
    correct: 1,
  },
  {
    question: "Что такое двухфакторная аутентификация?",
    options: [
      "Вход только по паролю",
      "Вход по отпечатку пальца",
      "Дополнительная проверка при входе",
      "Автоматический вход без проверки",
    ],
    correct: 2,
  },
  {
    question: "Как безопаснее всего совершать онлайн-платежи?",
    options: [
      "Через публичный Wi-Fi",
      "На подозрительных сайтах",
      "Через проверенные платёжные системы",
      "Передавая данные в чате",
    ],
    correct: 2,
  },
  {
    question: "Что делать, если у вас запросили код из SMS?",
    options: [
      "Передать код",
      "Проигнорировать",
      "Сразу сообщить отправителю",
      "Никогда никому не передавать",
    ],
    correct: 3,
  },
  {
    question: "Какая информация считается конфиденциальной?",
    options: ["Имя сайта", "Пароль и данные карты", "Название города", "Цвет интерфейса"],
    correct: 1,
  },
  {
    question: "Почему важно проверять URL сайта?",
    options: ["Для красивого вида", "Чтобы быстрее загрузился", "Чтобы убедиться, что сайт настоящий", "Для смены языка"],
    correct: 2,
  },
  {
    question: "Что означает наличие HTTPS в адресе сайта?",
    options: ["Сайт обязательно безопасен", "Соединение зашифровано", "Сайт принадлежит государству", "На сайте нет вирусов"],
    correct: 1,
  },
  {
    question: "Как мошенники часто действуют в соцсетях?",
    options: [
      "Пишут от имени друзей или служб поддержки",
      "Публикуют новости",
      "Создают обучающие курсы",
      "Размещают вакансии",
    ],
    correct: 0,
  },
];

export default function FinalTest() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[current].correct) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setFinished(true);
      localStorage.setItem(
        "testResult",
        JSON.stringify({
          score: index === questions[current].correct ? score + 1 : score,
          total: questions.length,
          date: new Date().toISOString(),
        })
      );
    }
  };

  const getResultText = () => {
    if (score <= 6) return "❌ Низкий уровень. Рекомендуется пройти курсы ещё раз.";
    if (score <= 11) return "⚠️ Средний уровень. Есть пробелы в знаниях.";
    return "✅ Отличный результат! Вы хорошо разбираетесь в кибербезопасности.";
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white pt-32 px-6 pb-20">

      {/* Фон */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-[-250px] right-[-300px] w-[700px] h-[700px] bg-purple-700 opacity-25 blur-[200px]" />
        <div className="absolute bottom-[-250px] left-[-300px] w-[700px] h-[700px] bg-indigo-600 opacity-25 blur-[200px]" />
      </div>

      {/* Вводный экран */}
      {!started && !finished && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center"
        >
          <h1 className="text-4xl font-extrabold mb-6">Итоговый тест по кибербезопасности</h1>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Тест состоит из <b>15 вопросов</b> по материалам сайта. Проверьте свои знания о фишинге, интернет-мошенничестве и защите личных данных.
          </p>
          <button
            onClick={() => setStarted(true)}
            className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-xl hover:bg-yellow-300 transition text-lg"
          >
            Начать тест
          </button>
        </motion.div>
      )}

      {/* Вопросы */}
      {started && !finished && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
        >
          <h2 className="text-xl mb-4 text-gray-400">
            Вопрос {current + 1} из {questions.length}
          </h2>
          <h3 className="text-2xl font-semibold mb-6">{questions[current].question}</h3>

          {questions[current].image && (
            <img
              src={questions[current].image}
              alt="Вопрос"
              className="mb-6 rounded-xl border border-white/20"
            />
          )}

          <div className="space-y-4">
            {questions[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className="w-full text-left px-5 py-4 rounded-xl bg-white/10 hover:bg-yellow-400 hover:text-gray-900 transition"
              >
                {opt}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Результат */}
      {finished && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-10 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Тест завершён 🎉</h2>
          <p className="text-2xl mb-4">
            Ваш результат: <span className="font-bold text-yellow-400">{score} / {questions.length}</span>
          </p>
          <p className="text-gray-300">{getResultText()}</p>
        </motion.div>
      )}
    </div>
  );
}
