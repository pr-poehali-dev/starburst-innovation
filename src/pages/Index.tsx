import { Fish, Star, TrendingUp, Heart, Plus, Minus, Mail, MapPin, Phone, Clock, Banknote, Building2 } from "lucide-react"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Какой опыт нужен для работы продавцом?",
      answer:
        "Приветствуется опыт в торговле или общепите, но мы рассматриваем и кандидатов без опыта — всему научим! Главное — желание работать с людьми и любовь к качественному продукту. Мы проводим обучение по ассортименту рыбы и морепродуктов.",
    },
    {
      question: "Какой график работы?",
      answer:
        "График 2/2 или 5/2 — обсудим на собеседовании. Магазины работают с 9:00 до 21:00. Стараемся учитывать пожелания сотрудников при составлении расписания.",
    },
    {
      question: "Что входит в обязанности продавца?",
      answer:
        "Консультация покупателей по ассортименту, продажа рыбы, икры и морепродуктов, оформление витрины, приёмка товара, работа с кассой. Всё просто и понятно — покажем и объясним на месте.",
    },
    {
      question: "Как откликнуться на вакансию?",
      answer:
        "Оставьте заявку через форму на этой странице или позвоните нам по телефону 8 (4212) 94-30-33. Мы свяжемся с вами в течение одного рабочего дня и договоримся об удобном времени для встречи.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#08111A] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1498654200943-1088dd4438ae?w=1600&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#08111A]/60 via-[#08111A]/50 to-[#08111A]/95" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-[#00B4D8]/30 backdrop-blur rounded-full">
            <Fish className="w-5 h-5 text-[#00B4D8]" />
            <span className="font-medium text-balance">Рыба моя</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Вакансия", "Преимущества", "Как устроиться", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <Button className="bg-[#00B4D8] text-white hover:bg-[#0096B4] rounded-full px-6">Откликнуться</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-[#00B4D8]/40 backdrop-blur rounded-full">
            <span className="text-sm font-medium text-[#00B4D8]">Открытая вакансия · Хабаровск</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">
            Стань частью<br />нашей команды.
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            «Рыба моя» — сеть магазинов икры, рыбы и морепродуктов в Хабаровске. Ищем продавца-консультанта, который любит людей и хочет работать с настоящим морским деликатесом.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-[#00B4D8] text-white hover:bg-[#0096B4] rounded-full px-8 py-4 text-lg">
              Откликнуться на вакансию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Узнать подробнее
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <MapPin className="w-4 h-4 text-[#00B4D8]" />
            <span className="text-sm font-medium">Несколько магазинов в Хабаровске</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Stable Income */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#00B4D8]/10 ring-1 ring-[#00B4D8]/30 mb-6">
                <TrendingUp className="w-6 h-6 text-[#00B4D8]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Стабильная зарплата</h3>
              <p className="text-white/80 leading-relaxed">Оклад + премии. Выплаты точно в срок без задержек.</p>
            </div>

            {/* Friendly Team */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#00B4D8]/10 ring-1 ring-[#00B4D8]/30 mb-6">
                <Heart className="w-6 h-6 text-[#00B4D8]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Дружная команда</h3>
              <p className="text-white/80 leading-relaxed">Поддержим и обучим. Коллектив, в котором приятно работать.</p>
            </div>

            {/* Growth */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#00B4D8]/10 ring-1 ring-[#00B4D8]/30 mb-6">
                <Star className="w-6 h-6 text-[#00B4D8]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Рост и развитие</h3>
              <p className="text-white/80 leading-relaxed">Обучаем продукту, даём возможность расти внутри компании.</p>
            </div>

            {/* Product */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#00B4D8]/10 ring-1 ring-[#00B4D8]/30 mb-6">
                <Fish className="w-6 h-6 text-[#00B4D8]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Качественный продукт</h3>
              <p className="text-white/80 leading-relaxed">Продаёте то, чем гордитесь — настоящую рыбу и икру.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Salary / Schedule / Addresses Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Условия работы</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto text-pretty">
              Всё честно и прозрачно — никаких сюрпризов после выхода на работу.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Salary */}
            <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#00B4D8]/10 ring-1 ring-[#00B4D8]/30 mb-8">
                <Banknote className="w-7 h-7 text-[#00B4D8]" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Заработная плата</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/70">Оклад</span>
                  <span className="font-semibold">от 40 000 ₽</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/70">Премия</span>
                  <span className="font-semibold">до 15 000 ₽</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/70">Итого</span>
                  <span className="font-bold text-[#00B4D8] text-lg">до 55 000 ₽/мес</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-white/70">Выплаты</span>
                  <span className="font-semibold">2 раза в месяц</span>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#00B4D8]/10 ring-1 ring-[#00B4D8]/30 mb-8">
                <Clock className="w-7 h-7 text-[#00B4D8]" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Режим работы</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/70">График</span>
                  <span className="font-semibold">2/2 или 5/2</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/70">Смена</span>
                  <span className="font-semibold">9:00 — 21:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/70">Тип занятости</span>
                  <span className="font-semibold">Полная</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-white/70">Оформление</span>
                  <span className="font-semibold">По ТК РФ</span>
                </div>
              </div>
            </div>

            {/* Addresses */}
            <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#00B4D8]/10 ring-1 ring-[#00B4D8]/30 mb-8">
                <Building2 className="w-7 h-7 text-[#00B4D8]" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Адреса магазинов</h3>
              <div className="space-y-4">
                {[
                  "ул. Карла Маркса, 69",
                  "ул. Ленина, 45",
                  "ул. Тихоокеанская, 204",
                  "ТЦ «Броско Молл»",
                ].map((addr) => (
                  <div key={addr} className="flex items-start gap-3 py-3 border-b border-white/10 last:border-0">
                    <MapPin className="w-4 h-4 text-[#00B4D8] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90 text-sm leading-relaxed">{addr}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section — Steps */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Как устроиться к нам</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Всего четыре простых шага — и вы в команде «Рыба моя».
              </p>
            </div>

            {/* Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-[#00B4D8]/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Оставьте заявку</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Заполните короткую форму на этой странице или позвоните нам. Это займёт не больше двух минут.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-[#00B4D8]/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Звонок от HR</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Свяжемся с вами в течение одного рабочего дня, ответим на вопросы и назначим встречу.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-[#00B4D8]/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Собеседование</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Короткая встреча в магазине — познакомимся, расскажем об условиях, покажем рабочее место.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-[#00B4D8]/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Выход на работу</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Оформление, обучение по ассортименту и старт! Поддержим на каждом шаге.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-[#00B4D8] text-white hover:bg-[#0096B4] rounded-full px-12 py-4 text-lg font-semibold"
              >
                Откликнуться на вакансию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Отвечаем на всё, что обычно хочется узнать до первого звонка.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0 text-[#00B4D8]" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0 text-[#00B4D8]" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Откликнуться</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      О себе (необязательно)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent resize-none"
                      placeholder="Расскажите немного о своём опыте..."
                    />
                  </div>
                  <Button className="w-full bg-[#00B4D8] text-white hover:bg-[#0096B4] rounded-lg py-3 font-normal text-base">
                    Отправить заявку
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Остались вопросы? Позвоните нам или напишите — расскажем подробнее об условиях, графике и адресах магазинов.
                  </p>
                </div>

                {/* Contact Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#00B4D8]/10 flex items-center justify-center">
                      <Fish className="w-8 h-8 text-[#00B4D8]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Рыба моя</h4>
                      <p className="text-gray-600">Отдел по персоналу</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone className="w-4 h-4 text-[#00B4D8]" />
                      <span className="text-sm">8 (4212) 94-30-33</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <MapPin className="w-4 h-4 text-[#00B4D8]" />
                      <span className="text-sm">Хабаровск, несколько адресов</span>
                    </div>
                  </div>
                  <Button className="w-full bg-[#00B4D8] text-white hover:bg-[#0096B4] rounded-lg flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Позвонить
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Fish className="w-6 h-6 text-[#00B4D8]" />
                  <span className="text-xl font-semibold">Рыба моя</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Сеть магазинов икры, рыбы и морепродуктов в Хабаровске. Работаем с 2010 года, любим своё дело и ценим каждого сотрудника.
                </p>
              </div>

              {/* Vacancy Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ВАКАНСИЯ</h3>
                <ul className="space-y-3">
                  {["Обязанности", "Условия", "График работы", "Зарплата"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">О КОМПАНИИ</h3>
                <ul className="space-y-3">
                  {["О нас", "Наши магазины", "Ассортимент", "Отзывы"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">КОНТАКТЫ</h3>
                <ul className="space-y-3">
                  {["Позвонить", "Написать", "Адреса магазинов", "Вопросы"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Узнавайте о новых вакансиях первыми</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-[#00B4D8]/50 focus:outline-none"
                  />
                  <Button className="bg-[#00B4D8] text-white hover:bg-[#0096B4] rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2025 Рыба моя · Хабаровск</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index