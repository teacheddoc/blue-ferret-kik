# Blue Ferret / KIK вдома

Сайт видавництва настільних ігор Blue Ferret та платформи KIK вдома. Зроблено за технічним завданням.

## Технології

- **Next.js 16** — React-фреймворк
- **TypeScript** — типізація
- **Tailwind CSS** — стилі
- **Motion** — анімації
- **Lucide React** — іконки

## Структура

```
/                    — Головна Blue Ferret
/igry                — Каталог ігор
/igry/[slug]         — Сторінка окремої гри (з етапами)
/kik                 — KIK вдома (Про КІК)
/kik/proekty         — Проєкти платформи
/kontakty            — Контакти
```

## Дизайн-система (з ТЗ)

- **Blue Ferret**: #009FE3
- **KIK вдома**: #4BB272
- **Сторінка гри**: #283D57

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Статичний export у папку out/ для GitHub Pages
```

## CMS-ready структура

Дані для ігор та проєктів: `src/data/games.ts` та `src/data/projects.ts`.  
Можна замінити на API або JSON з бекенду.

## Етапи гри

Кожна гра має 4 етапи: Анонс → Виробництво → Передзамовлення → У вільному продажі.  
Заблоковані етапи візуально затемнені з іконкою замка.

## Деплой на GitHub Pages

- У репозиторії є workflow: `.github/workflows/deploy-pages.yml`
- Після push у `main` сайт автоматично деплоїться у GitHub Pages
- Кастомний домен: `blueferret.com.ua` (файл `public/CNAME`)

## Важливо про оплату (Mono)

GitHub Pages — це лише статичний хостинг, тому API-роути для Mono у `src/app/api/*` вимкнено для цього деплою.
Заготовки серверної логіки збережені в `src/server/mono/*` для майбутнього переносу на серверний хостинг.
