# edelhaus — спецификация (пересборка из Figma)

> Кейс портфолио. Лендинг агентства недвижимости **edelhaus** — инвестиции в виллы/апартаменты на Бали с гарантированным управлением и **немецкоязычной поддержкой**. Источник — Figma (node 0-1). Демо, без бэкенда.

## Решения (согласовано с Ольгой 2026-07-12)
1. **Тема:** остаётся «инвестиции на Бали». USP — deutsche Unterstützung (немецкоязычные инвесторы покупают за рубежом).
2. **Языки:** мультиязычный. **DE — базовый (дефолт)**, плюс RU / UK / EN. Переключатель в шапке. Аналог ATREA.
3. **Объекты:** реалистичные **демо** на основе реального рынка Бали (районы, цены, площади, доходность), свои названия, нейтральные фото. Без копирования чужих листингов.
4. **Партнёры:** реальные бренды оставлены по решению Ольги (Engel & Völkers, Köster, RiedelBau, ZIMA). ⚠️ Юр. риск чужих товарных знаков зафиксирован — на её ответственность.

## Рыночные ориентиры (для достоверности демо)
- Студии/off-plan: €90–150k, нетто-доходность 8–14%, +20–25% за срок стройки.
- Виллы: €180–400k+. Районы: Canggu/Berawa, Ubud, Uluwatu, Pererenan, Seminyak.
- Владение — лизхолд 25–30 лет (Hak Pakai / PT PMA). Источники: rumavi, balitecture, investlandbali (2025–2026).

## Структура (сверху вниз, по Figma)
1. **Header** — лого edelhaus (Syne), навигация (Objekte / Über uns), соцкнопки (Inst/Tel), «Kontakte», переключатель языка.
2. **Hero** — H1 «Investieren Sie in Immobilien auf Bali …», подзаголовок «до 20% годовых», CTA «Objektauswahl erhalten», крупное фото виллы, карточка «Online-Tour buchen» с кнопкой Call.
3. **Stats** — от €80.000 / 10 Jahre Erfahrung / 300+ Kunden.
4. **Warum Bali** — стек фото + 4 буллета (рост туризма, загрузка, рост стоимости, спрос digital nomads).
5. **Partner** «Wir arbeiten mit den Besten» — лого партнёров.
6. **Katalog** «Finden Sie Ihr ideales Objekt» — чипы-фильтр (Apartments / Villen / Neubau / Gewerbe) + карточки объектов (Fläche / Preis ab / Rendite / «Mehr erfahren» → модалка).
7. **Online-Tour** — форма (Name, Telefon, «Buchen») + мокап телефона со звонком, кнопка **«Antworten» с иконкой трубки**, лейбл «deutsche Unterstützung».
8. **Vorteile** — 4 карточки с **иконкой в кружке**: Erfahrung / Expertise / Transparenz / Zahlung.
9. **Unsere Kunden** — сетка фото.
10. **Leistungen** (предпоследний блок) — 4 карточки с **иконкой в кружке**: Immobilienverwaltung / Individueller Ansatz / Begleitung / Rechtssicherheit.
11. **Footer** — форма «Online-Tour», навигация, телефон, лого.

## Значки (создаём сами, стиль сайта — линейные, 1.5px, geometric)
- Vorteile: Erfahrung → медаль/звезда-годы; Expertise → компас/лупа-рынок; Transparenz → щит-галочка/документ; Zahlung → карта+крипто.
- Leistungen: Verwaltung → ключ+дом; Individuell → человек-настройка; Begleitung → рукопожатие/маршрут; Rechtssicherheit → весы/щит-право.
- Кнопка «Antworten» — телефонная трубка; Call — трубка.

## Дизайн-токены
- Цвета: графит `#22282C`, акцент-грин `#618078`, терракота `#F0906F`, ink `#161616`, ink-2 `#5C5C5C`, line `#E6E6E3`, soft `#F3F3F1`, dark-soft карточки `#22282C`.
- Шрифты: **Syne** (лого + display-акценты), **Inter** (заголовки Bold UPPER, текст, UI).
- Контейнер 1200px, поля clamp(16,5vw,48). Радиусы 12/20/30. Кнопки-пилюли (radius 30), высота 44–48.
- Единый компонент `.btn` (--primary тёмный/грин, --light контур, размеры sm/md).

## Функциональность («как рабочий сайт»)
- Переключатель языка DE/RU/UK/EN (localStorage), дефолт DE.
- Фильтр каталога по типу (чипы) — показывает подходящие объекты.
- Модалка деталей объекта (галерея/факты) + CTA «Online-Tour».
- Формы (Online-Tour, футер-заявка) — валидация + тост-фидбек, без бэкенда.
- Адаптив: desktop / tablet / mobile. Единые кнопки/отступы, всё по сетке.

## Анти-кэш
css/js с `?v=N`, бить версию при правках.
</content>
</invoke>
