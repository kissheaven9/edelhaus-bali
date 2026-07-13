/* ============================================================
   edelhaus — app logic: i18n (DE base / EN / RU / UK),
   catalog + filter, modal, forms, drawer, reveal.
   Demo, no backend.
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- i18n dictionaries ---------------- */
  const I18N = {
    de: {
      'nav.objects': 'Objekte', 'nav.about': 'Über uns', 'nav.services': 'Leistungen', 'nav.contact': 'Kontakt',
      'hero.title1': 'Investieren Sie in Immobilien', 'hero.title2': 'auf Bali', 'hero.title3': 'mit garantiertem Management',
      'hero.sub': 'Premium-Villen und Apartments mit einer Rendite von <b>bis zu 20 % p.a.</b>',
      'hero.cta': 'Objektauswahl erhalten', 'hero.cta2': 'Objekte ansehen', 'hero.tourcard': 'Online-Tour<br>zum Objekt buchen', 'hero.call': 'Call',
      'stat.invest': 'investieren ab', 'stat.exp': 'Erfahrung', 'stat.expv': '10 Jahre', 'stat.clients': 'zufriedene Kunden',
      'why.title': 'Warum Bali eine Zukunftsregion ist',
      'why.p1': 'Tourismuswachstum von über 15 % pro Jahr',
      'why.p2': 'Stabile Vermietungsauslastung das ganze Jahr',
      'why.p3': 'Wertsteigerung der Immobilien bis zu 20 % jährlich',
      'why.p4': 'Hohe Nachfrage bei Digital Nomads und Expats',
      'partners.title': 'Wir arbeiten mit den Besten', 'partners.short': 'Partner',
      'catalog.title': 'Finden Sie Ihr ideales Objekt', 'catalog.note': 'Echte, öffentlich gelistete Bali-Objekte. Angaben & Renditen laut Quelle (im Detail verlinkt).',
      'catalog.f.all': 'Alle', 'catalog.f.apartment': 'Apartments', 'catalog.f.villa': 'Villen', 'catalog.f.offplan': 'Neubau', 'catalog.f.commercial': 'Gewerbe',
      'catalog.more': 'Mehr erfahren', 'catalog.empty': 'Keine Objekte in dieser Kategorie.',
      'spec.from': 'ab', 'spec.upto': 'bis', 'spec.area': 'Fläche', 'spec.price': 'Preis', 'spec.yield': 'Rendite', 'spec.tenure': 'Besitzform', 'spec.dev': 'Bauträger', 'spec.completion': 'Fertigstellung', 'spec.onreq': 'auf Anfrage', 'spec.beds': 'Schlafzimmer', 'modal.about': 'Objektbeschreibung', 'modal.location': 'Lage', 'modal.mapopen': 'In Google Maps öffnen',
      'tour.badge': 'deutsche Betreuung', 'tour.answer': 'Antworten', 'tour.title': 'Buchen Sie eine <span class="mark">Online-Tour</span>',
      'tour.text': 'Wir zeigen Ihnen die Objekte Ihrer Wahl und berechnen die Rendite.', 'tour.submit': 'Termin buchen',
      'form.name': 'Name', 'form.name.ph': 'Ihr Name', 'form.phone': 'Telefon', 'form.phone.ph': '+49 …',
      'form.err.name': 'Bitte geben Sie Ihren Namen an.', 'form.err.phone': 'Bitte geben Sie eine gültige Telefonnummer an.',
      'form.consent': 'Ich stimme der Datenschutzerklärung zu.',
      'vorteile.title': 'Ihre Vorteile mit edelhaus',
      'v.exp.t': 'Erfahrung', 'v.exp.d': 'Über 10 Jahre am Immobilienmarkt — wir wissen, was für unsere Kunden zählt.',
      'v.expert.t': 'Expertise', 'v.expert.d': 'Tiefes Wissen über den Bali-Markt und aktuelle Angebote in Expat-Regionen.',
      'v.trans.t': 'Transparenz', 'v.trans.d': 'Keine versteckten Bedingungen, volle rechtliche Klarheit und laufende Reports.',
      'v.pay.t': 'Zahlung', 'v.pay.d': 'Zahlung per Überweisung sowie in Kryptowährung nach Absprache möglich.',
      'clients.title': 'Unsere Kunden',
      'leistungen.title': 'Unsere Leistungen',
      'l.support.t': 'Begleitung in allen Phasen', 'l.support.d': 'Vom ersten Anruf bis zur Eigentumsübertragung sind wir an Ihrer Seite.',
      'l.manage.t': 'Immobilienverwaltung', 'l.manage.d': 'Komplettservice: Vermietung, Wartung, Reporting und Pflege Ihres Objekts.',
      'l.indiv.t': 'Individueller Ansatz', 'l.indiv.d': 'Wir wählen Objekt und Konditionen passend zu Zielen und Lebensstil — vom Investor bis zum Digital Nomad.',
      'l.legal.t': 'Rechtssicherheit', 'l.legal.d': 'Wir arbeiten mit geprüften Juristen und sichern eine saubere Transaktion.',
      'footer.advantages': 'Vorteile', 'footer.hours': 'Mo–Fr, 8:00–18:00', 'footer.imprint': 'Impressum', 'footer.privacy': 'Datenschutz',
      'footer.formtitle': 'Anmeldung zur Online-Tour', 'footer.submit': 'Anfrage senden', 'footer.demo': 'Portfolio-Demo · kein reales Angebot',
      'modal.cta': 'Online-Tour buchen', 'modal.call': 'Rückruf anfordern', 'modal.source': 'Quelle', 'modal.note': 'Angaben laut Quelle · Portfolio-Demo.',
      'toast.tour': 'Danke! Wir rufen Sie für die Online-Tour zurück.',
      'toast.footer': 'Anfrage gesendet — wir melden uns in Kürze.',
      'toast.answer': 'Verbindung wird hergestellt … (Demo)'
    },
    en: {
      'nav.objects': 'Properties', 'nav.about': 'About', 'nav.services': 'Services', 'nav.contact': 'Contact',
      'hero.title1': 'Invest in real estate', 'hero.title2': 'in Bali', 'hero.title3': 'with guaranteed management',
      'hero.sub': 'Premium villas and apartments with a yield of <b>up to 20 % p.a.</b>',
      'hero.cta': 'Get a selection', 'hero.cta2': 'View properties', 'hero.tourcard': 'Book an online<br>tour of the property', 'hero.call': 'Call',
      'stat.invest': 'invest from', 'stat.exp': 'experience', 'stat.expv': '10 years', 'stat.clients': 'happy clients',
      'why.title': 'Why Bali is a region of the future',
      'why.p1': 'Tourism growth of more than 15 % per year',
      'why.p2': 'Stable rental occupancy all year round',
      'why.p3': 'Property value growth of up to 20 % annually',
      'why.p4': 'High demand among digital nomads and expats',
      'partners.title': 'We work with the best', 'partners.short': 'Partners',
      'catalog.title': 'Find your ideal property', 'catalog.note': 'Real, publicly listed Bali properties. Figures & yields per source (linked in each detail).',
      'catalog.f.all': 'All', 'catalog.f.apartment': 'Apartments', 'catalog.f.villa': 'Villas', 'catalog.f.offplan': 'Off-plan', 'catalog.f.commercial': 'Commercial',
      'catalog.more': 'Learn more', 'catalog.empty': 'No properties in this category.',
      'spec.from': 'from', 'spec.upto': 'up to', 'spec.area': 'Area', 'spec.price': 'Price', 'spec.yield': 'Yield', 'spec.tenure': 'Tenure', 'spec.dev': 'Developer', 'spec.completion': 'Completion', 'spec.onreq': 'on request', 'spec.beds': 'Bedrooms', 'modal.about': 'About this property', 'modal.location': 'Location', 'modal.mapopen': 'Open in Google Maps',
      'tour.badge': 'German-speaking support', 'tour.answer': 'Answer', 'tour.title': 'Book an <span class="mark">online tour</span>',
      'tour.text': 'We show you the properties of your choice and calculate the yield.', 'tour.submit': 'Book a slot',
      'form.name': 'Name', 'form.name.ph': 'Your name', 'form.phone': 'Phone', 'form.phone.ph': '+49 …',
      'form.err.name': 'Please enter your name.', 'form.err.phone': 'Please enter a valid phone number.',
      'form.consent': 'I agree to the privacy policy.',
      'vorteile.title': 'Your advantages with edelhaus',
      'v.exp.t': 'Experience', 'v.exp.d': 'Over 10 years in real estate — we know what matters to our clients.',
      'v.expert.t': 'Expertise', 'v.expert.d': 'Deep knowledge of the Bali market and current offers in expat regions.',
      'v.trans.t': 'Transparency', 'v.trans.d': 'No hidden terms, full legal clarity and ongoing management reports.',
      'v.pay.t': 'Payment', 'v.pay.d': 'Payment by bank transfer as well as in cryptocurrency by agreement.',
      'clients.title': 'Our clients',
      'leistungen.title': 'Our services',
      'l.support.t': 'Support at every stage', 'l.support.d': 'From the first call to the transfer of ownership, we are by your side.',
      'l.manage.t': 'Property management', 'l.manage.d': 'Full service: rental, maintenance, reporting and care of your property.',
      'l.indiv.t': 'Individual approach', 'l.indiv.d': 'We match property and terms to your goals and lifestyle — from investor to digital nomad.',
      'l.legal.t': 'Legal security', 'l.legal.d': 'We work with vetted lawyers to ensure a clean transaction.',
      'footer.advantages': 'Advantages', 'footer.hours': 'Mon–Fri, 8:00–18:00', 'footer.imprint': 'Imprint', 'footer.privacy': 'Privacy',
      'footer.formtitle': 'Sign up for an online tour', 'footer.submit': 'Send request', 'footer.demo': 'Portfolio demo · not a real offer',
      'modal.cta': 'Book an online tour', 'modal.call': 'Request a callback', 'modal.source': 'Source', 'modal.note': 'Data per source · portfolio demo.',
      'toast.tour': 'Thank you! We will call you back for the online tour.',
      'toast.footer': 'Request sent — we will get in touch shortly.',
      'toast.answer': 'Connecting … (demo)'
    },
    ru: {
      'nav.objects': 'Объекты', 'nav.about': 'О нас', 'nav.services': 'Услуги', 'nav.contact': 'Контакты',
      'hero.title1': 'Инвестируйте в недвижимость', 'hero.title2': 'на Бали', 'hero.title3': 'с гарантированным управлением',
      'hero.sub': 'Премиальные виллы и апартаменты с доходностью <b>до 20 % годовых</b>',
      'hero.cta': 'Получить подборку', 'hero.cta2': 'Смотреть объекты', 'hero.tourcard': 'Записаться<br>на онлайн-тур', 'hero.call': 'Call',
      'stat.invest': 'инвестируйте от', 'stat.exp': 'опыт', 'stat.expv': '10 лет', 'stat.clients': 'довольных клиентов',
      'why.title': 'Почему Бали — перспективный регион',
      'why.p1': 'Рост туризма более 15 % в год',
      'why.p2': 'Стабильная арендная загрузка круглый год',
      'why.p3': 'Рост стоимости недвижимости до 20 % в год',
      'why.p4': 'Востребованность среди digital nomads и экспатов',
      'partners.title': 'Мы работаем с лучшими', 'partners.short': 'Партнёры',
      'catalog.title': 'Подберите свой идеальный объект', 'catalog.note': 'Реальные объекты Бали из открытых листингов. Данные и доходность — по источнику (ссылка в деталях).',
      'catalog.f.all': 'Все', 'catalog.f.apartment': 'Апартаменты', 'catalog.f.villa': 'Виллы', 'catalog.f.offplan': 'Новостройки', 'catalog.f.commercial': 'Коммерция',
      'catalog.more': 'Узнать больше', 'catalog.empty': 'В этой категории пока нет объектов.',
      'spec.from': 'от', 'spec.upto': 'до', 'spec.area': 'Площадь', 'spec.price': 'Стоимость', 'spec.yield': 'Доходность', 'spec.tenure': 'Право', 'spec.dev': 'Застройщик', 'spec.completion': 'Сдача', 'spec.onreq': 'по запросу', 'spec.beds': 'Спальни', 'modal.about': 'Об объекте', 'modal.location': 'Расположение', 'modal.mapopen': 'Открыть в Google Maps',
      'tour.badge': 'немецкая поддержка', 'tour.answer': 'Ответить', 'tour.title': 'Запишитесь на <span class="mark">онлайн-тур</span>',
      'tour.text': 'Мы покажем заинтересовавшие вас объекты и рассчитаем доходность.', 'tour.submit': 'Записаться',
      'form.name': 'Имя', 'form.name.ph': 'Ваше имя', 'form.phone': 'Телефон', 'form.phone.ph': '+49 …',
      'form.err.name': 'Пожалуйста, укажите имя.', 'form.err.phone': 'Укажите корректный номер телефона.',
      'form.consent': 'Я согласен с политикой конфиденциальности.',
      'vorteile.title': 'Ваши преимущества с edelhaus',
      'v.exp.t': 'Опыт', 'v.exp.d': 'Более 10 лет на рынке недвижимости — мы знаем, что важно нашим клиентам.',
      'v.expert.t': 'Экспертность', 'v.expert.d': 'Глубокое знание рынка Бали и актуальных предложений в районах экспатов.',
      'v.trans.t': 'Прозрачность', 'v.trans.d': 'Без скрытых условий, полная юридическая ясность и регулярные отчёты.',
      'v.pay.t': 'Оплата', 'v.pay.d': 'Оплата по безналу, а также в криптовалюте по согласованию сторон.',
      'clients.title': 'Наши клиенты',
      'leistungen.title': 'Наши услуги',
      'l.support.t': 'Сопровождение на всех этапах', 'l.support.d': 'От первого звонка до оформления собственности мы рядом.',
      'l.manage.t': 'Управление недвижимостью', 'l.manage.d': 'Комплексный сервис: аренда, обслуживание, отчётность и забота об объекте.',
      'l.indiv.t': 'Индивидуальный подход', 'l.indiv.d': 'Подбираем объект и условия под цели и образ жизни — от инвестора до цифрового кочевника.',
      'l.legal.t': 'Юридическая безопасность', 'l.legal.d': 'Работаем с проверенными юристами и обеспечиваем чистоту сделки.',
      'footer.advantages': 'Преимущества', 'footer.hours': 'Пн–Пт, 8:00–18:00', 'footer.imprint': 'Импрессум', 'footer.privacy': 'Конфиденциальность',
      'footer.formtitle': 'Запись на онлайн-тур', 'footer.submit': 'Отправить заявку', 'footer.demo': 'Демо для портфолио · не реальное предложение',
      'modal.cta': 'Записаться на онлайн-тур', 'modal.call': 'Заказать звонок', 'modal.source': 'Источник', 'modal.note': 'Данные по источнику · демо для портфолио.',
      'toast.tour': 'Спасибо! Мы перезвоним для онлайн-тура.',
      'toast.footer': 'Заявка отправлена — скоро свяжемся.',
      'toast.answer': 'Устанавливаем соединение … (демо)'
    },
    uk: {
      'nav.objects': 'Обʼєкти', 'nav.about': 'Про нас', 'nav.services': 'Послуги', 'nav.contact': 'Контакти',
      'hero.title1': 'Інвестуйте в нерухомість', 'hero.title2': 'на Балі', 'hero.title3': 'з гарантованим управлінням',
      'hero.sub': 'Преміальні вілли та апартаменти з дохідністю <b>до 20 % річних</b>',
      'hero.cta': 'Отримати добірку', 'hero.cta2': 'Дивитися обʼєкти', 'hero.tourcard': 'Записатися<br>на онлайн-тур', 'hero.call': 'Call',
      'stat.invest': 'інвестуйте від', 'stat.exp': 'досвід', 'stat.expv': '10 років', 'stat.clients': 'задоволених клієнтів',
      'why.title': 'Чому Балі — перспективний регіон',
      'why.p1': 'Зростання туризму понад 15 % на рік',
      'why.p2': 'Стабільне орендне завантаження цілий рік',
      'why.p3': 'Зростання вартості нерухомості до 20 % на рік',
      'why.p4': 'Попит серед digital nomads та експатів',
      'partners.title': 'Ми працюємо з найкращими', 'partners.short': 'Партнери',
      'catalog.title': 'Підберіть свій ідеальний обʼєкт', 'catalog.note': 'Реальні обʼєкти Балі з відкритих лістингів. Дані та дохідність — за джерелом (посилання в деталях).',
      'catalog.f.all': 'Усі', 'catalog.f.apartment': 'Апартаменти', 'catalog.f.villa': 'Вілли', 'catalog.f.offplan': 'Новобудови', 'catalog.f.commercial': 'Комерція',
      'catalog.more': 'Дізнатися більше', 'catalog.empty': 'У цій категорії поки немає обʼєктів.',
      'spec.from': 'від', 'spec.upto': 'до', 'spec.area': 'Площа', 'spec.price': 'Вартість', 'spec.yield': 'Дохідність', 'spec.tenure': 'Право', 'spec.dev': 'Забудовник', 'spec.completion': 'Здача', 'spec.onreq': 'за запитом', 'spec.beds': 'Спальні', 'modal.about': 'Про обʼєкт', 'modal.location': 'Розташування', 'modal.mapopen': 'Відкрити в Google Maps',
      'tour.badge': 'німецька підтримка', 'tour.answer': 'Відповісти', 'tour.title': 'Запишіться на <span class="mark">онлайн-тур</span>',
      'tour.text': 'Ми покажемо обрані вами обʼєкти та розрахуємо дохідність.', 'tour.submit': 'Записатися',
      'form.name': 'Імʼя', 'form.name.ph': 'Ваше імʼя', 'form.phone': 'Телефон', 'form.phone.ph': '+49 …',
      'form.err.name': 'Будь ласка, вкажіть імʼя.', 'form.err.phone': 'Вкажіть коректний номер телефону.',
      'form.consent': 'Я погоджуюся з політикою конфіденційності.',
      'vorteile.title': 'Ваші переваги з edelhaus',
      'v.exp.t': 'Досвід', 'v.exp.d': 'Понад 10 років на ринку нерухомості — ми знаємо, що важливо клієнтам.',
      'v.expert.t': 'Експертність', 'v.expert.d': 'Глибоке знання ринку Балі та актуальних пропозицій у районах експатів.',
      'v.trans.t': 'Прозорість', 'v.trans.d': 'Без прихованих умов, повна юридична ясність і регулярні звіти.',
      'v.pay.t': 'Оплата', 'v.pay.d': 'Оплата безготівково, а також у криптовалюті за домовленістю сторін.',
      'clients.title': 'Наші клієнти',
      'leistungen.title': 'Наші послуги',
      'l.support.t': 'Супровід на всіх етапах', 'l.support.d': 'Від першого дзвінка до оформлення власності ми поруч.',
      'l.manage.t': 'Управління нерухомістю', 'l.manage.d': 'Комплексний сервіс: оренда, обслуговування, звітність і турбота про обʼєкт.',
      'l.indiv.t': 'Індивідуальний підхід', 'l.indiv.d': 'Підбираємо обʼєкт та умови під цілі й спосіб життя — від інвестора до цифрового кочівника.',
      'l.legal.t': 'Юридична безпека', 'l.legal.d': 'Працюємо з перевіреними юристами та забезпечуємо чистоту угоди.',
      'footer.advantages': 'Переваги', 'footer.hours': 'Пн–Пт, 8:00–18:00', 'footer.imprint': 'Імпресум', 'footer.privacy': 'Конфіденційність',
      'footer.formtitle': 'Запис на онлайн-тур', 'footer.submit': 'Надіслати заявку', 'footer.demo': 'Демо для портфоліо · не реальна пропозиція',
      'modal.cta': 'Записатися на онлайн-тур', 'modal.call': 'Замовити дзвінок', 'modal.source': 'Джерело', 'modal.note': 'Дані згідно з джерелом · демо для портфоліо.',
      'toast.tour': 'Дякуємо! Ми передзвонимо для онлайн-туру.',
      'toast.footer': 'Заявку надіслано — незабаром звʼяжемося.',
      'toast.answer': 'Встановлюємо зʼєднання … (демо)'
    }
  };

  const LANGS = ['de', 'en', 'ru', 'uk'];
  let lang = 'de';
  const t = (k) => (I18N[lang] && I18N[lang][k]) || (I18N.de[k] || k);

  /* ---------------- Catalog data — REAL, publicly-listed Bali objects.
     Parameters (developer, district, area, price, tenure, yield) taken from the
     linked source listings. Prices ~ converted to EUR (1 EUR ≈ 1.08 USD).
     Yields are developer/market estimates as stated by the source. ---------------- */
  const G = 'assets/img/obj/';
  const OBJECTS = [
    { id: 'newcanggu', type: 'offplan', name: 'The New Canggu', dev: 'Bright Solution Property', loc: 'Padonan · Canggu',
      area: 98, beds: '1–3', price: 115000, yieldTxt: '13–16 %', tenure: 'Leasehold 25 J. (+5)', done: '2026',
      img: G + 'newcanggu.jpg', pos: '50% 55%', coords: [-8.645, 115.133], feat: ['pool', 'newbuild', 'managed', 'beachnear'],
      gallery: [G + 'newcanggu.jpg', G + 'g/newcanggu-2.jpg', G + 'g/newcanggu-3.jpg', G + 'g/newcanggu-4.jpg'],
      source: 'https://brightsolutionproperty.com/blog/off-plan-project-padonan-villas-in-canggu-bali',
      desc: { de: 'Off-Plan-Projekt in Padonan (Canggu) mit 1- bis 3-Zimmer-Einheiten und privatem Pool. Fertigstellung 2026, 25 Jahre Leasehold mit 5-Jahres-Verlängerung; vom Bauträger angegebene Rendite 13–16 % über 7 Jahre.',
              en: 'Off-plan project in Padonan (Canggu) with 1–3-bedroom units and a private pool. Completion 2026, 25-year leasehold with a 5-year extension; developer-stated yield 13–16 % over 7 years.',
              ru: 'Проект на стадии строительства в Падонане (Чангу): юниты 1–3 спальни с собственным бассейном. Сдача 2026, лизхолд 25 лет (+5); заявленная застройщиком доходность 13–16 % за 7 лет.',
              uk: 'Проєкт на етапі будівництва в Падонані (Чангу): юніти 1–3 спальні з власним басейном. Здача 2026, лізхолд 25 років (+5); заявлена забудовником дохідність 13–16 % за 7 років.' } },
    { id: 'karmabeach', type: 'offplan', name: 'Karma Beach Villa', dev: 'BBB Developments', loc: 'Uluwatu · Pecatu',
      area: 145, beds: '2', price: 106000, yieldTxt: '~18 %', tenure: 'Leasehold 35 J.', done: '2026',
      img: G + 'karmabeach.jpg', pos: '50% 55%', coords: [-8.829, 115.087], feat: ['oceanview', 'pool', 'newbuild', 'managed'],
      gallery: [G + 'karmabeach.jpg', G + 'g/karmabeach-2.jpg', G + 'g/karmabeach-3.jpg', G + 'g/karmabeach-4.jpg', G + 'g/karmabeach-5.jpg'],
      source: 'https://www.balivillahub.com/en/property-details/uluwatu/offplan-uluwatu-karma-beach-ocean-views-2-11346',
      desc: { de: 'Neubau-Villa mit 2 Schlafzimmern und Meerblick in Pecatu (Uluwatu), Land 140 m² / Wohnfläche 145 m². 35 Jahre Leasehold; geschätzte jährliche Rendite ca. 18 %.',
              en: 'Off-plan 2-bedroom ocean-view villa in Pecatu (Uluwatu), 140 m² land / 145 m² built. 35-year leasehold; estimated annual return ~18 %.',
              ru: 'Строящаяся вилла с 2 спальнями и видом на океан в Печату (Улувату): участок 140 м² / застройка 145 м². Лизхолд 35 лет; оценочная доходность ~18 % в год.',
              uk: 'Вілла на стадії будівництва з 2 спальнями та видом на океан у Печату (Улувату): ділянка 140 м² / забудова 145 м². Лізхолд 35 років; оцінкова дохідність ~18 % на рік.' } },
    { id: 'bingincliff', type: 'offplan', name: 'Bingin Cliff Villa', dev: 'Compass Realty Bali', loc: 'Uluwatu · Bingin',
      area: 145, beds: '2', price: 190000, yieldTxt: '~15 %', tenure: 'Leasehold 24 J.', done: '2027',
      img: G + 'bingincliff.jpg', pos: '50% 55%', coords: [-8.807, 115.113], feat: ['pool', 'cliffwalk', 'oceanview', 'newbuild'],
      gallery: [G + 'bingincliff.jpg', G + 'g/bingincliff-2.jpg', G + 'g/bingincliff-3.jpg', G + 'g/bingincliff-4.jpg', G + 'g/bingincliff-5.jpg', G + 'g/bingincliff-6.jpg'],
      source: 'https://www.balivillahub.com/en/property-details/uluwatu/off-plan-villa-walking-distance-to-bingin-cliff-10907',
      desc: { de: 'Neubau-Villa mit 2 Schlafzimmern in Gehweite zur Bingin-Klippe (Uluwatu), Land 110 m² / Wohnfläche 145 m². 24 Jahre Leasehold mit Verlängerungsoption; geschätzte Rendite ca. 15 %.',
              en: 'Off-plan 2-bedroom villa within walking distance of Bingin cliff (Uluwatu), 110 m² land / 145 m² built. 24-year leasehold with extension option; estimated yield ~15 %.',
              ru: 'Строящаяся вилла с 2 спальнями в пешей доступности от скалы Бингин (Улувату): участок 110 м² / застройка 145 м². Лизхолд 24 года с опцией продления; оценочная доходность ~15 %.',
              uk: 'Вілла на стадії будівництва з 2 спальнями за кілька хвилин від скелі Бінгін (Улувату): ділянка 110 м² / забудова 145 м². Лізхолд 24 роки з опцією подовження; оцінкова дохідність ~15 %.' } },
    { id: 'munggu', type: 'villa', name: 'Boho Japandi Villa', dev: 'Bali Villa Realty', loc: 'Munggu · Mengwi',
      area: 260, beds: '2', price: 360000, yieldTxt: null, tenure: 'Leasehold 32 J.', done: '2025',
      img: G + 'munggu.jpg', pos: '50% 55%', coords: [-8.625, 115.113], feat: ['dualpool', 'rooftop', 'furnished', 'managed'],
      gallery: [G + 'munggu.jpg', G + 'g/munggu-1.jpg', G + 'g/munggu-2.jpg', G + 'g/munggu-4.jpg'],
      source: 'https://balivillarealty.com/villa/sale/seseh/munggu/boho-japandi-2br-leasehold-villa-with-dual-pools-rooftop-in-munggu/',
      desc: { de: 'Freistehende 2-Zimmer-Villa im Boho-Japandi-Stil in Munggu mit zwei Pools und Dachterrasse. Land 125 m² / Wohnfläche 260 m², 32 Jahre Leasehold, Baujahr 2025.',
              en: 'Detached 2-bedroom Boho-Japandi villa in Munggu with dual pools and a rooftop terrace. 125 m² land / 260 m² built, 32-year leasehold, built 2025.',
              ru: 'Отдельная вилла с 2 спальнями в стиле бохо-джапанди в Мунггу: два бассейна и крыша-терраса. Участок 125 м² / застройка 260 м², лизхолд 32 года, постройка 2025.',
              uk: 'Окрема вілла з 2 спальнями в стилі бохо-джапанді в Мунггу: два басейни та дах-тераса. Ділянка 125 м² / забудова 260 м², лізхолд 32 роки, побудова 2025.' } },
    { id: 'ubud', type: 'villa', name: 'Ricefield Villa Ubud', dev: 'Bali Villa Realty', loc: 'Ubud · Gianyar',
      area: 176, beds: '2', price: 220000, yieldTxt: null, tenure: 'Freehold (Hak Milik)', done: '2022',
      img: G + 'ubud.jpg', pos: '50% 55%', coords: [-8.507, 115.263], feat: ['pool', 'ricefield', 'furnished', 'jungle'],
      gallery: [G + 'ubud.jpg', G + 'g/ubud-1.jpg', G + 'g/ubud-2.jpg', G + 'g/ubud-3.jpg', G + 'g/ubud-4.jpg', G + 'g/ubud-5.jpg'],
      source: 'https://balivillarealty.com/villa/sale/ubud/modern-2br-freehold-rice-field-view-villa-in-ubud/',
      desc: { de: 'Moderne 2-Zimmer-Villa mit Reisfeldblick in Ubud, Freehold (Hak Milik). Land 216 m² / Wohnfläche 176 m², fertiggestellt 2022, privater Pool.',
              en: 'Modern 2-bedroom villa with rice-field view in Ubud, freehold (Hak Milik). 216 m² land / 176 m² built, completed 2022, private pool.',
              ru: 'Современная вилла с 2 спальнями и видом на рисовые поля в Убуде, freehold (Hak Milik). Участок 216 м² / застройка 176 м², сдана 2022, собственный бассейн.',
              uk: 'Сучасна вілла з 2 спальнями та видом на рисові поля в Убуді, freehold (Hak Milik). Ділянка 216 м² / забудова 176 м², здана 2022, власний басейн.' } },
    { id: 'canggumed', type: 'villa', name: 'Mediterran Villa Canggu', dev: 'Bali Villa Realty', loc: 'Canggu · Tibubeneng',
      area: 100, beds: '2', price: 150000, yieldTxt: null, tenure: 'Leasehold 27 J.', done: '2026',
      img: G + 'canggumed.jpg', pos: '50% 60%', coords: [-8.652, 115.138], feat: ['pool', 'furnished', 'managed'],
      gallery: [G + 'canggumed.jpg', G + 'g/canggumed-2.jpg', G + 'g/canggumed-3.jpg', G + 'g/canggumed-4.jpg', G + 'g/canggumed-5.jpg', G + 'g/canggumed-6.jpg'],
      source: 'https://balivillarealty.com/villa/sale/canggu/luxury-2br-mediterranean-leasehold-villa-with-pool-in-prime-canggu/',
      desc: { de: 'Mediterran gestaltete 2-Zimmer-Villa mit Pool in zentraler Lage in Canggu (Tibubeneng). Land 200 m² / Wohnfläche 100 m², 27 Jahre Leasehold, schlüsselfertig 2026.',
              en: 'Mediterranean-style 2-bedroom villa with pool in central Canggu (Tibubeneng). 200 m² land / 100 m² built, 27-year leasehold, turnkey 2026.',
              ru: 'Вилла с 2 спальнями в средиземноморском стиле и бассейном в центре Чангу (Тибубенеанг). Участок 200 м² / застройка 100 м², лизхолд 27 лет, под ключ 2026.',
              uk: 'Вілла з 2 спальнями в середземноморському стилі та басейном у центрі Чангу (Тібубенеанг). Ділянка 200 м² / забудова 100 м², лізхолд 27 років, під ключ 2026.' } },
    { id: 'binginapt', type: 'apartment', name: 'Bingin Designer Suite', dev: 'Bali Villa Realty', loc: 'Uluwatu · Bingin',
      area: 90, beds: '2', price: 140000, yieldTxt: null, tenure: 'Leasehold 32 J.', done: 'Neubau',
      img: G + 'binginapt.jpg', pos: '50% 50%', coords: [-8.807, 115.113], feat: ['pool', 'newbuild', 'beachnear'],
      gallery: [G + 'binginapt.jpg', G + 'g/binginapt-1.jpg', G + 'g/binginapt-3.jpg', G + 'g/binginapt-4.jpg', G + 'g/binginapt-5.jpg', G + 'g/binginapt-6.jpg'],
      source: 'https://balivillarealty.com/apartment/sale/uluwatu/bingin/high-yield-off-plan-opportunity-90m%c2%b2-designer-sanctuary-in-bingin-prime-32-year-leasehold/',
      desc: { de: 'Design-Apartment mit 2 Schlafzimmern (90 m²) in Bingin (Uluwatu), Neubau. 32 Jahre Leasehold, als renditestarke Off-Plan-Gelegenheit vermarktet.',
              en: '2-bedroom designer apartment (90 m²) in Bingin (Uluwatu), off-plan. 32-year leasehold, marketed as a high-yield opportunity.',
              ru: 'Дизайнерские апартаменты с 2 спальнями (90 м²) в Бингине (Улувату), новостройка. Лизхолд 32 года; позиционируются как высокодоходный off-plan объект.',
              uk: 'Дизайнерські апартаменти з 2 спальнями (90 м²) у Бінгіні (Улувату), новобудова. Лізхолд 32 роки; позиціонуються як високодохідний off-plan обʼєкт.' } },
    { id: 'hotelulu', type: 'commercial', name: 'Boutique-Hotel Uluwatu', dev: 'Harcourts Purba Bali', loc: 'Uluwatu · Pecatu',
      area: 2225, beds: '18', price: 3500000, yieldTxt: '9–12 %', tenure: 'Freehold (HGB)', done: '2027',
      img: G + 'hotelulu.jpg', pos: '50% 55%', coords: [-8.815, 115.095], feat: ['oceanview', 'hotel', 'pool', 'managed'],
      gallery: [G + 'hotelulu.jpg', G + 'g/hotelulu-5.jpg'],
      source: 'https://harcourtspurbabali.com/property/rare-ocean-view-boutique-hotel-investment-in-uluwatu/',
      desc: { de: 'Boutique-Hotel-Investment mit Meerblick in Pecatu (Uluwatu): 18 Zimmer, Grundstück 1.000 m² / Gebäude 2.225 m². Freehold (HGB); prognostizierte Rendite 9–12 %, Betriebsstart 2027.',
              en: 'Ocean-view boutique-hotel investment in Pecatu (Uluwatu): 18 rooms, 1,000 m² land / 2,225 m² building. Freehold (HGB); projected yield 9–12 %, operations from 2027.',
              ru: 'Инвестиция в бутик-отель с видом на океан в Печату (Улувату): 18 номеров, участок 1 000 м² / здание 2 225 м². Freehold (HGB); прогноз доходности 9–12 %, запуск 2027.',
              uk: 'Інвестиція в бутик-готель з видом на океан у Печату (Улувату): 18 номерів, ділянка 1 000 м² / будівля 2 225 м². Freehold (HGB); прогноз дохідності 9–12 %, запуск 2027.' } }
  ];

  /* feature labels (real, translatable) */
  const FEAT = {
    pool: { de: 'Privatpool', en: 'Private pool', ru: 'Бассейн', uk: 'Басейн' },
    dualpool: { de: 'Zwei Pools', en: 'Dual pools', ru: 'Два бассейна', uk: 'Два басейни' },
    oceanview: { de: 'Meerblick', en: 'Ocean view', ru: 'Вид на океан', uk: 'Вид на океан' },
    ricefield: { de: 'Reisfeldblick', en: 'Rice-field view', ru: 'Вид на рисовые поля', uk: 'Вид на рисові поля' },
    rooftop: { de: 'Dachterrasse', en: 'Rooftop terrace', ru: 'Крыша-терраса', uk: 'Дах-тераса' },
    furnished: { de: 'Möbliert', en: 'Furnished', ru: 'С мебелью', uk: 'З меблями' },
    managed: { de: 'Verwaltung inkl.', en: 'Managed', ru: 'Управление', uk: 'Управління' },
    jungle: { de: 'Naturlage', en: 'Green setting', ru: 'Природа рядом', uk: 'Природа поруч' },
    cliffwalk: { de: 'Nähe Klippen', en: 'Near the cliffs', ru: 'Рядом скалы', uk: 'Поруч скелі' },
    beachnear: { de: 'Strandnähe', en: 'Near the beach', ru: 'Рядом пляж', uk: 'Поруч пляж' },
    newbuild: { de: 'Neubau', en: 'New build', ru: 'Новостройка', uk: 'Новобудова' },
    hotel: { de: 'Hotelbetrieb', en: 'Hotel operation', ru: 'Гостиница', uk: 'Готель' }
  };

  let currentFilter = 'all';

  /* ---------------- helpers ---------------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const fmtEUR = (n) => new Intl.NumberFormat('de-DE').format(n);

  function applyI18n() {
    $$('[data-i18n]').forEach(el => { el.textContent = t(el.getAttribute('data-i18n')); });
    $$('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.getAttribute('data-i18n-html')); });
    $$('[data-i18n-ph]').forEach(el => { el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph'))); });
    document.documentElement.lang = lang;
    $('#langCur').textContent = lang.toUpperCase();
    $$('#langMenu button').forEach(b => b.setAttribute('aria-current', String(b.dataset.lang === lang)));
  }

  /* ---------------- catalog ---------------- */
  function renderCatalog() {
    const box = $('#catalog');
    const list = OBJECTS.filter(o => currentFilter === 'all' || o.type === currentFilter);
    if (!list.length) { box.innerHTML = '<p class="lead">' + t('catalog.empty') + '</p>'; return; }
    box.innerHTML = list.map(o => `
      <article class="pcard reveal is-in" data-id="${o.id}">
        <div class="pcard__media">
          <img src="${o.img}" alt="${o.name}" style="object-position:${o.pos}">
          <span class="pcard__badge">${t('catalog.f.' + o.type)}</span>
        </div>
        <div class="pcard__body">
          <div class="pcard__name">${o.name}</div>
          <div class="pcard__loc"><svg width="14" height="14"><use href="#i-pin"/></svg>${o.loc}</div>
          <div class="pcard__specs">
            <div><div class="spec__k">${t('spec.area')}</div><div class="spec__v">${t('spec.from')} ${o.area} m²</div></div>
            <div><div class="spec__k">${t('spec.price')}</div><div class="spec__v">${t('spec.from')} ${fmtEUR(o.price)} €</div></div>
            <div><div class="spec__k">${t('spec.yield')}</div><div class="spec__v">${o.yieldTxt ? '<span class="mark">' + o.yieldTxt + '</span>' : '<span style="color:var(--ink-3);font-weight:500">' + t('spec.onreq') + '</span>'}</div></div>
            <div><div class="spec__k">${t('spec.dev')}</div><div class="spec__v" style="font-weight:500;font-size:.8rem">${o.dev}</div></div>
          </div>
          <button class="btn btn--sm" data-more="${o.id}">${t('catalog.more')}</button>
        </div>
      </article>`).join('');
  }

  function bindCatalog() {
    $('#chips').addEventListener('click', e => {
      const btn = e.target.closest('.chip'); if (!btn) return;
      $$('#chips .chip').forEach(c => c.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
      currentFilter = btn.dataset.filter;
      renderCatalog();
    });
    $('#catalog').addEventListener('click', e => {
      const btn = e.target.closest('[data-more]'); if (!btn) return;
      openModal(btn.dataset.more);
    });
  }

  /* ---------------- modal ---------------- */
  let lastFocus = null;
  let gal = { imgs: [], i: 0 };
  let lmap = null, lmarker = null;

  function showMap(lat, lng, label) {
    const el = $('#modalMap');
    if (!window.L) { el.innerHTML = '<div class="modal__mapfallback">' + label + '</div>'; return; }
    if (!lmap) {
      lmap = L.map(el, { scrollWheelZoom: false }).setView([lat, lng], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '© OpenStreetMap' }).addTo(lmap);
      lmarker = L.marker([lat, lng]).addTo(lmap);
    } else {
      lmap.setView([lat, lng], 13);
      lmarker.setLatLng([lat, lng]);
    }
    setTimeout(function () { if (lmap) lmap.invalidateSize(); }, 240);
  }

  function renderGallery() {
    const main = $('#galMain');
    main.src = gal.imgs[gal.i];
    $('#galCount').textContent = (gal.i + 1) + ' / ' + gal.imgs.length;
    $$('#galThumbs img').forEach((th, idx) => th.setAttribute('aria-current', String(idx === gal.i)));
    const active = $$('#galThumbs img')[gal.i];
    if (active && active.scrollIntoView) active.scrollIntoView({ block: 'nearest', inline: 'center' });
  }
  function galGo(dir) {
    if (!gal.imgs.length) return;
    gal.i = (gal.i + dir + gal.imgs.length) % gal.imgs.length;
    renderGallery();
  }

  function openModal(id) {
    const o = OBJECTS.find(x => x.id === id); if (!o) return;
    lastFocus = document.activeElement;

    // gallery
    gal = { imgs: (o.gallery && o.gallery.length ? o.gallery : [o.img]), i: 0 };
    $('#modalGallery').classList.toggle('gallery--single', gal.imgs.length < 2);
    $('#galThumbs').innerHTML = gal.imgs.map((src, i) =>
      `<img src="${src}" alt="${o.name} — Foto ${i + 1}" data-gi="${i}" aria-current="${i === 0}">`).join('');
    $('#galMain').alt = o.name;
    renderGallery();

    // head
    $('#modalTitle').textContent = o.name;
    $('#modalLoc').innerHTML = '<svg><use href="#i-pin"/></svg>' + o.loc + ' · ' + t('catalog.f.' + o.type);

    // specs (7)
    $('#modalSpecs').innerHTML = [
      ['spec.area', t('spec.from') + ' ' + o.area + ' m²'],
      ['spec.beds', o.beds],
      ['spec.price', t('spec.from') + ' ' + fmtEUR(o.price) + ' €'],
      ['spec.yield', o.yieldTxt || t('spec.onreq')],
      ['spec.tenure', o.tenure],
      ['spec.completion', o.done],
      ['spec.dev', o.dev]
    ].map(([k, v]) => `<div class="spec"><div class="spec__k">${t(k)}</div><div class="spec__v">${v}</div></div>`).join('');

    // description + features
    $('#modalDesc').textContent = (o.desc && (o.desc[lang] || o.desc.de)) || '';
    $('#modalFeats').innerHTML = (o.feat || []).map(k => `<li>${(FEAT[k] && (FEAT[k][lang] || FEAT[k].de)) || k}</li>`).join('');

    // map (Leaflet + OSM raster tiles — keyless, no WebGL) + Google Maps link
    const [lat, lng] = o.coords || [-8.65, 115.13];
    showMap(lat, lng, o.loc);
    $('#modalMapLink').innerHTML =
      `<a href="https://www.google.com/maps/search/?api=1&query=${lat}%2C${lng}" target="_blank" rel="noopener" class="modal__src">${t('modal.mapopen')} ↗</a>`;

    // source + bar price
    const host = (function () { try { return new URL(o.source).hostname.replace('www.', ''); } catch (e) { return o.source; } })();
    $('#modalSrc').innerHTML = t('modal.note') +
      ' <a href="' + o.source + '" target="_blank" rel="noopener nofollow" class="modal__src">' + t('modal.source') + ': ' + host + ' ↗</a>';
    $('#modalBarPrice').textContent = t('spec.from') + ' ' + fmtEUR(o.price) + ' €';

    $('#modalScroll').scrollTop = 0;
    const m = $('#modal'); m.classList.add('open'); document.body.style.overflow = 'hidden';
    $('.modal__close').focus();
  }
  function closeModal() {
    $('#modal').classList.remove('open'); document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function bindModal() {
    // use closest so clicks on inner <svg>/<use> of [data-close] still close
    $('#modal').addEventListener('click', e => { if (e.target.closest('[data-close]')) closeModal(); });
    document.addEventListener('keydown', e => {
      if (!$('#modal').classList.contains('open')) return;
      if (e.key === 'Escape') closeModal();
      else if (e.key === 'ArrowRight') galGo(1);
      else if (e.key === 'ArrowLeft') galGo(-1);
    });
    $('#galPrev').addEventListener('click', () => galGo(-1));
    $('#galNext').addEventListener('click', () => galGo(1));
    $('#galThumbs').addEventListener('click', e => {
      const th = e.target.closest('[data-gi]'); if (!th) return;
      gal.i = +th.dataset.gi; renderGallery();
    });
  }

  /* ---------------- toast ---------------- */
  function toast(msg) {
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = '<svg><use href="#i-check"/></svg><span></span>';
    el.querySelector('span').textContent = msg;
    $('#toasts').appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateY(10px)'; setTimeout(() => el.remove(), 300); }, 3600);
  }

  /* ---------------- forms ---------------- */
  function validateField(field) {
    const input = field.querySelector('input, select, textarea');
    let ok = true;
    if (input.type === 'checkbox') ok = input.checked;
    else if (input.type === 'tel') ok = (input.value.replace(/[^\d]/g, '').length >= 7);
    else ok = input.value.trim().length >= 2;
    field.classList.toggle('field--invalid', !ok);
    return ok;
  }
  function bindForm(formId, msgKey) {
    const form = $('#' + formId); if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const fields = $$('.field', form);
      let valid = true;
      fields.forEach(f => { if (!validateField(f)) valid = false; });
      const consent = form.querySelector('input[type=checkbox][required]');
      if (consent && !consent.checked) valid = false;
      if (!valid) { const bad = form.querySelector('.field--invalid input'); if (bad) bad.focus(); return; }
      form.reset();
      toast(t(msgKey));
    });
    $$('.field input, .field select', form).forEach(inp => {
      inp.addEventListener('input', () => { const f = inp.closest('.field'); if (f.classList.contains('field--invalid')) validateField(f); });
    });
  }

  /* ---------------- language switch ---------------- */
  function setLang(l) {
    if (!LANGS.includes(l)) l = 'de';
    lang = l;
    try { localStorage.setItem('edelhaus_lang', l); } catch (e) {}
    applyI18n();
    renderCatalog();
  }
  function bindLang() {
    const wrap = $('#lang');
    $('#langBtn').addEventListener('click', () => {
      const open = wrap.classList.toggle('open');
      $('#langBtn').setAttribute('aria-expanded', String(open));
    });
    $('#langMenu').addEventListener('click', e => {
      const b = e.target.closest('button[data-lang]'); if (!b) return;
      setLang(b.dataset.lang); wrap.classList.remove('open'); $('#langBtn').setAttribute('aria-expanded', 'false');
    });
    document.addEventListener('click', e => { if (!wrap.contains(e.target)) wrap.classList.remove('open'); });
  }

  /* ---------------- drawer ---------------- */
  function bindDrawer() {
    const d = $('#drawer');
    $('#burger').addEventListener('click', () => { d.classList.add('open'); document.body.style.overflow = 'hidden'; });
    d.addEventListener('click', e => { if (e.target.hasAttribute('data-drawer-close')) { d.classList.remove('open'); document.body.style.overflow = ''; } });
  }

  /* ---------------- reveal ---------------- */
  function bindReveal() {
    const els = $$('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('is-in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach(e => io.observe(e));
  }

  /* ---------------- init ---------------- */
  document.addEventListener('DOMContentLoaded', () => {
    let saved = 'de';
    try { saved = localStorage.getItem('edelhaus_lang') || 'de'; } catch (e) {}
    lang = LANGS.includes(saved) ? saved : 'de';
    $('#year').textContent = '2026';
    applyI18n();
    renderCatalog();
    bindCatalog();
    bindModal();
    bindLang();
    bindDrawer();
    bindReveal();
    // header: transparent over hero -> solid on scroll
    const header = $('#header');
    const onScroll = () => header.classList.toggle('header--solid', window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    bindForm('tourForm', 'toast.tour');
    bindForm('footerForm', 'toast.footer');
    $('#phoneAnswer').addEventListener('click', () => toast(t('toast.answer')));
    $('#tourCall').addEventListener('click', () => toast(t('toast.answer')));
  });
})();
