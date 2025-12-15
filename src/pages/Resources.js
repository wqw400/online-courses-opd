import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Статьи с категориями и содержимым
const articles = [
  {
    id: 1,
    category: "Фишинг и его разновидности",
    title: "Классический фишинг",
    content: [
      { heading: "Что это?", text: "Массовая рассылка поддельных писем от имени известных компаний..." },
      { heading: "Как работает?", list: [
        "Вы получаете письмо с заголовком «Ваш аккаунт был взломан!» или «Подтвердите заказ».",
        "Ссылка ведет на сайт, внешне неотличимый от настоящего.",
        "Вы вводите логин, пароль, данные карты — мошенники получают их."
      ]},
      { heading: "Пример", text: "Письмо от имени «Apple» с требованием срочно обновить платежную информацию для iCloud." },
      { heading: "Как защититься?", list: [
        "Проверяйте адрес отправителя и URL сайта.",
        "Не переходите по подозрительным ссылкам, вводите адрес вручную.",
        "Включайте двухфакторную аутентификацию."
      ]},
    ],
  },
  {
    id: 2,
    category: "Фишинг и его разновидности",
    title: "Смишинг (SMS-фишинг)",
    content: [
      { heading: "Что это?", text: "Фишинг через SMS, часто вызывает больше доверия у пользователей." },
      { heading: "Как работает?", list: [
        "Вы получаете SMS с сообщением о блокировке карты или доставке.",
        "Ссылка ведет на фишинговый сайт или запускает вредоносное ПО."
      ]},
      { heading: "Пример", text: "Почта России: Ваша посылка не может быть доставлена из-за неоплаченной таможенной пошлины." },
      { heading: "Как защититься?", list: [
        "Не переходите по ссылкам от неизвестных номеров.",
        "Банки никогда не просят перейти по ссылке для входа.",
        "Используйте только официальные приложения и сайты."
      ]},
    ],
  },
  {
    id: 3,
    category: "Фишинг и его разновидности",
    title: "Вишинг (Голосовой фишинг)",
    content: [
      { heading: "Что это?", text: "Мошенничество с использованием телефонных звонков." },
      { heading: "Как работает?", list: [
        "Звонит «сотрудник банка» и сообщает о подозрительной операции.",
        "Просит назвать коды из SMS или установить вредоносное ПО.",
        "Звонок выглядит убедительно с подменой номера."
      ]},
      { heading: "Пример", text: "Звонок от «Microsoft», якобы найден вирус, просит установить TeamViewer или AnyDesk." },
      { heading: "Как защититься?", list: [
        "Не сообщайте коды и CVV.",
        "Перезвоните в банк по официальному номеру.",
        "Настоящие сотрудники никогда не просят установить ПО."
      ]},
    ],
  },
{
    id: 4,
    category: "Фишинг и его разновидности",
    title: "Фарминг: Невидимое перенаправление",
    content: [
      { heading: "Что это?", text: "Более изощренная атака, при которой злоумышленник перенаправляет трафик с легального сайта на поддельный, даже если вы ввели правильный адрес в браузере." },
      { heading: "Как работает?", list: [
        "Атака происходит на уровне DNS-серверов.",
        "Мошенники меняют настройки DNS на вашем компьютере или атакуют DNS-провайдера."
      ]},
      { heading: "Пример", text: "Вы вводите bank.com, но из-за скомпрометированных настроек DNS вас перенаправляет на фишинговый сайт." },
      { heading: "Как защититься?", list: [
        "Используйте надежный антивирус.",
        "Обращайте внимание на HTTPS и значок замка в адресной строке."
      ]},
    ],
  },
  {
    id: 5,
    category: "Целевые атаки (Spear Phishing / Whaling)",
    title: "Целевой фишинг (Spear Phishing)",
    content: [
      { heading: "Что это?", text: "Атака тщательно готовится против конкретного человека или компании." },
      { heading: "Как работает?", list: [
        "Мошенник изучает жертву через соцсети и делает письмо максимально правдоподобным.",
        "Вы получаете письмо якобы от коллеги с просьбой открыть ссылку и ввести данные."
      ]},
      { heading: "Пример", text: "Письмо от директора в бухгалтерию с просьбой перевести деньги по 'секретному' договору." },
      { heading: "Как защититься?", list: [
        "Повышайте осведомленность сотрудников.",
        "Все финансовые операции должны подтверждаться по телефону.",
        "Проверяйте email-адреса отправителей."
      ]},
    ],
  },
  {
    id: 6,
    category: "Целевые атаки (Spear Phishing / Whaling)",
    title: "Китобойный промысел (Whaling)",
    content: [
      { heading: "Что это?", text: "Разновидность целевого фишинга для топ-менеджеров (CEO, CFO) — 'киты' компании." },
      { heading: "Как работает?", list: [
        "Злоумышленник тщательно изучает роль жертвы.",
        "Письма часто имитируют юридические запросы или исходят от руководителей.",
        "Просит финансового директора перевести крупную сумму на 'счет партнера'."
      ]},
      { heading: "Пример", text: "Генеральный директор командирован, мошенник выдает себя за него и просит перевести деньги." },
      { heading: "Как защититься?", list: [
        "Для руководителей — особый контроль всех запросов на перевод средств.",
        "Использовать электронную цифровую подпись (ЭЦП).",
        "Специальные тренинги по кибербезопасности для руководящего состава."
      ]},
    ],
  },
{
    id: 7,
    category: "Целевые атаки (Business Email Compromise)",
    title: "CEO-мошенничество (BEC)",
    content: [
      { heading: "Что это?", text: "Целевая атака, когда мошенник, взломав или подделав почту руководителя, рассылает указания подчиненным о срочном денежном переводе." },
      { heading: "Как работает?", list: [
        "Злоумышленник находит email финдиректора или бухгалтера.",
        "Через фишинг взламывается почта CEO или создается её точная копия.",
        "От имени CEO отправляется письмо бухгалтеру с указанием перевести деньги."
      ]},
      { heading: "Как защититься?", list: [
        "Внедрить строгий регламент: любой крупный платеж должен подтверждаться по телефону.",
        "Использовать корпоративные системы обмена сообщениями (Slack, Teams) для срочных подтверждений.",
        "Установить защиту почты от подделки (DMARC, DKIM, SPF)."
      ]},
    ],
  },
  {
    id: 8,
    category: "Взломы и несанкционированный доступ",
    title: "Атаки по словарю и брутфорс",
    content: [
      { heading: "Что это?", text: "Метод подбора паролей путем автоматического перебора миллионов комбинаций." },
      { heading: "Как работает?", list: [
        "Программы пытаются авторизоваться на сайте или сервисе, перебирая логины и пароли.",
        "Чаще всего атакуют SSH-серверы, базы данных и аккаунты в соцсетях.",
        "Мошенники используют утекшие базы логинов для доступа к почте и соцсетям жертв."
      ]},
      { heading: "Как защититься?", list: [
        "Используйте сложные и уникальные пароли для каждого сервиса.",
        "Включайте двухфакторную аутентификацию (2FA).",
        "Сервисы должны блокировать аккаунт после нескольких неудачных попыток входа."
      ]},
    ],
  },
  {
    id: 9,
    category: "Взломы и несанкционированный доступ",
    title: "Кредитное мошенничество (Carding)",
    content: [
      { heading: "Что это?", text: "Неавторизованное использование платежных данных жертвы для покупок или снятия денег." },
      { heading: "Как работает?", list: [
        "Данные карт попадают к мошенникам через фишинговые сайты.",
        "Скимминг — установка устройств на банкоматы или терминалы для считывания данных.",
        "Взломы интернет-магазинов с слабой защитой."
      ]},
      { heading: "Пример", text: "Мошенники покупают базы данных карт и делают покупки для проверки работоспособности." },
      { heading: "Как защититься?", list: [
        "Никогда не сообщайте данные карты по телефону или на подозрительных сайтах.",
        "Используйте виртуальные карты для онлайн-платежей.",
        "Подключите SMS-уведомления о всех операциях.",
        "Используйте карты с чипом (EMV), а не с магнитной полосой."
      ]},
    ],
  },
{
    id: 10,
    category: "Социальная инженерия и обман",
    title: "Кража цифровых личностей (Account Takeover)",
    content: [
      { heading: "Что это?", text: "Полный захват контроля над вашим аккаунтом (почта, соцсеть, игровой профиль)." },
      { heading: "Как работает?", list: [
        "Пароль утекает через утечки данных или фишинг.",
        "Мошенник входит в аккаунт и меняет привязанную почту и пароль.",
        "Если это почта, он получает доступ ко всем другим сервисам, привязанным к ней."
      ]},
      { heading: "Пример", text: "Взлом аккаунта в Instagram с рассылкой сообщений друзьям с просьбой одолжить деньги «на лечение»." },
      { heading: "Как защититься?", list: [
        "Используйте двухфакторную аутентификацию.",
        "Используйте менеджер паролей для уникальных паролей.",
        "Регулярно проверяйте, не фигурирует ли ваш email в утечках данных."
      ]},
    ],
  },
  {
    id: 11,
    category: "Социальная инженерия и обман",
    title: "Техническая поддержка мошенников (Tech Support Scam)",
    content: [
      { heading: "Что это?", text: "Мошенники убеждают жертву, что её компьютер заражен вирусом, и предлагают 'помощь' за плату." },
      { heading: "Как работает?", list: [
        "Вы видите всплывающее окно с сообщением о заражении.",
        "Звоните, и 'специалист' просит установить программу для удаленного доступа.",
        "Он показывает поддельные логи и требует оплату за 'удаление вирусов'."
      ]},
      { heading: "Пример", text: "Сценарий звонка от 'Microsoft', где через eventvwr.msc показываются безобидные логи ошибок." },
      { heading: "Как защититься?", list: [
        "Ни Microsoft, ни Apple не звонят сами с предложениями починить компьютер.",
        "Никогда не предоставляйте удаленный доступ незнакомцам.",
        "Установите надежный антивирус."
      ]},
    ],
  },
  {
    id: 12,
    category: "Социальная инженерия и обман",
    title: "Фейковые антивирусы (Rogueware / Scareware)",
    content: [
      { heading: "Что это?", text: "Мошенничество с техподдержкой, когда навязывают бесполезное или вредоносное ПО, выдавая его за антивирус." },
      { heading: "Как работает?", list: [
        "На сайте появляется окно, симулирующее сканирование ПК и 'находит' вирусы.",
        "Предлагается купить 'антивирус', который является пустышкой или трояном."
      ]},
      { heading: "Как защититься?", list: [
        "Пользуйтесь только проверенными антивирусами.",
        "Не верьте всплывающим окнам о заражении.",
        "Скачивайте ПО только с официальных сайтов."
      ]},
    ],
  },
];

const categories = [...new Set(articles.map(a => a.category))];

export default function Articles() {
<<<<<<< HEAD
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredArticles = selectedCategory 
    ? articles.filter(a => a.category === selectedCategory)
    : articles;

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white pt-32 pb-24 px-6 overflow-hidden">

      {/* Кнопки категорий */}
      <div className="mb-12 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-6 py-3 font-bold rounded-xl transition-all
            ${selectedCategory === null 
              ? "bg-yellow-400 text-gray-900 shadow-[0_0_20px_rgba(255,255,150,0.6)]" 
              : "bg-white/10 text-gray-200 hover:bg-white/20"}
          `}
        >
          Все категории
        </button>

        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-3 font-bold rounded-xl transition-all
              ${selectedCategory === cat 
                ? "bg-yellow-400 text-gray-900 shadow-[0_0_20px_rgba(255,255,150,0.6)]" 
                : "bg-white/10 text-gray-200 hover:bg-white/20"}
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Сетка статей */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article, i) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedArticle(article)}
            className="cursor-pointer bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-[0_0_40px_rgba(100,100,255,0.4)] transition-all"
          >
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-gray-300 text-sm">{article.category}</p>
          </motion.div>
        ))}
      </div>

      {/* Модальное окно */}
=======
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white pt-32 pb-24 px-6 overflow-hidden">
      
      {/* Фоновые свечения */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-[-250px] right-[-300px] w-[700px] h-[700px] bg-purple-700 opacity-25 blur-[200px] rounded-full"></div>
        <div className="absolute bottom-[-250px] left-[-300px] w-[700px] h-[700px] bg-indigo-600 opacity-25 blur-[200px] rounded-full"></div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-center drop-shadow-xl mb-16"
      >
        Статьи и материалы
      </motion.h1>

      {/* Сетка статей */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, i) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedArticle(article)}
            className="cursor-pointer bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-[0_0_40px_rgba(100,100,255,0.4)] transition-all"
          >
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-gray-300 text-sm">{article.category}</p>
          </motion.div>
        ))}
      </div>

      {/* Модальное окно статьи */}
>>>>>>> f4a29038c81499de83a777213f4a241d8352d395
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl max-w-3xl w-full p-8 overflow-y-auto max-h-[90vh] relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-300"
                onClick={() => setSelectedArticle(null)}
              >
                ✖
              </button>

              <h2 className="text-3xl font-bold mb-6">{selectedArticle.title}</h2>
              {selectedArticle.content.map((section, idx) => (
                <div key={idx} className="mb-4">
                  {section.heading && <h3 className="text-xl font-semibold mb-2">{section.heading}</h3>}
                  {section.text && <p className="text-gray-700 dark:text-gray-300 mb-2 whitespace-pre-line">{section.text}</p>}
                  {section.list && (
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}