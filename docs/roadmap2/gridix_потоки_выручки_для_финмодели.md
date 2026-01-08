# GRIDIX — Потоки выручки для финмодели (v1)

Документ-справочник: какие источники денег есть/планируются в GRIDIX и как их удобно считать в финансовой модели.

---

## 1) Подписки (Recurring MRR → ARR)

### 1.1. ДЕВЕЛОПЕР (оплата **за проект / ЖК**)

**Кто платит:** застройщик (компания)

**Тарифы (ориентир):**

- **BASIC:** \$129 / мес / проект
- **PRO:** \$189 / мес / проект
- **ENTERPRISE:** по запросу

**Как считать в модели:**

- `MRR_Dev = (N_projects_basic * 129) + (N_projects_pro * 189)`
- (опционально) `MRR_Dev_Enterprise = N_projects_enterprise * Price_Dev_Enterprise_Month`

Если один девелопер ведёт несколько проектов: считать **проекты**, а не компании.

**Параметры для модели:**

- `N_Dev_Companies`
- `Avg_Projects_per_Dev`
- `Share_PRO` (доля PRO)

---

### 1.2. АГЕНТСТВО (оплата **за компанию**)

**Кто платит:** агентство

**Тарифы (ориентир):**

- **BASIC:** \$29 / мес / агентство (базовый функционал)
- **PRO:** \$49 / мес / агентство (расширенные функции, например AI и др.)
- **ENTERPRISE:** по запросу

**Как считать в модели:**

- `MRR_Agency = (N_agency_basic * 29) + (N_agency_pro * 49)`

**Параметры:**

- `N_Agency_Companies`
- `Share_Agency_PRO` (доля PRO)
- (опционально) `Churn_Agency`

---

### 1.3. АГЕНТЫ (кабинет агента / Agent OS)

**Сейчас:** бесплатно (freemium)

**Монетизация (текущая):**

- У агента есть бесплатный кабинет.
- Основной путь монетизации — **апгрейд в Агентство** (командный аккаунт) и переход на тарифы агентства (**\$29/\$49 в зависимости от плана**).

**Как считать в модели:**

- `Upgrade_Agents_to_Agency = N_Agents_to_Agency`
- Денежный эффект считается внутри `MRR_Agency` (эти апгрейды увеличивают N\_Agency\_Companies).

**Ключевые параметры:**

- `Conversion_Agent_to_Agency` (конверсия агентов в агентства)
- `Share_Agency_PRO_from_Upgrades` (какая доля апгрейдов выбирает PRO)

---

## 2) Маркетплейс модулей / Add-ons (Upsell)

### 2.1. Платные виджеты (подписка)

**Ориентир:** средний чек **\$20 / мес за 1 add-on** (пока гипотеза)

**Кто платит:** девелопер / агентство / агент (зависит от виджета)

**Как считать в модели:**

- `MRR_Addons = N_Paying_Accounts * AttachRate * Avg_Addons_Per_Account * 20`

**Параметры:**

- `N_Paying_Accounts` (сколько аккаунтов вообще может покупать add-ons)
- `AttachRate` (доля, кто покупает хотя бы 1 add-on)
- `Avg_Addons_Per_Account`

---

---

## 3) Enterprise-пакеты (для Девелопера и для Агентства)

Важно: **для девелопера в PRO и будет так же для Агенств  уже включено**:

- подключение **собственного домена**
- режим **без упоминания GRIDIX** (white-label по сути входит в PRO)

Поэтому отдельный “White Label add-on” для девелопера в модели **не считаем** как отдельную монетизацию (если не появится отдельный уровень “Enterprise White-label+”).

### 3.1. Developer Enterprise (подписка / пакет)

**Что может входить:**

- кастомизация под фирстиль (глубже, чем PRO)
- кастомные API/интеграции
- расширенная безопасность, SLA, выделенный контур
- дополнительные роли, отчётность, ограничения и т.д.

**Как считать в модели:**

- Вариант A (MRR): `MRR_Dev_Enterprise = N_Dev_Enterprise * Price_Dev_Enterprise_Month`
- Вариант B (разово + MRR): `Revenue_Dev_Enterprise_Setup = Deals_Dev_Enterprise * Avg_Dev_Enterprise_SetupFee`

### 3.2. Agency Enterprise (подписка / пакет)

**Что может входить:**

- расширенный бренд/витрины/порталы
- кастомные API и интеграции
- расширенная отчётность, SLA

**Как считать в модели:**

- Вариант A (MRR): `MRR_Agency_Enterprise = N_Agency_Enterprise * Price_Agency_Enterprise_Month`
- Вариант B (разово + MRR): `Revenue_Agency_Enterprise_Setup = Deals_Agency_Enterprise * Avg_Agency_Enterprise_SetupFee`

### 3.3. Lifetime как вариант Enterprise

**Логика:** Lifetime относится к **Enterprise-сделкам** (не отдельный продукт сам по себе).

**Пример из практики:** **\$16,000 one-time** за lifetime + пакет работ (например, 7 проектов + сайт + кастом).

**Как считать в модели:**

- `Revenue_Lifetime = Deals_Lifetime * Avg_Lifetime_Deal_Size`

**Параметры:**

- `Deals_Lifetime` (шт/год)
- `Avg_Lifetime_Deal_Size` (например, 16000)

---

## 3.5. Enterprise pricing placeholders (для финмодели)

Цель: чтобы в финмодели можно было легко переключать, **как именно монетизируется Enterprise** (MRR, setup+MRR, lifetime, услуги).

### 3.5.1. Девелопер — Enterprise (за проект)

**Опция A — Enterprise как подписка (MRR):**

- `Price_Dev_Enterprise_Month = ____`  *(например, \$299 / \$499 / \$999 — ты задаёшь)*
- `N_projects_enterprise` — количество проектов на Enterprise
- **Формула:** `MRR_Dev_Enterprise = N_projects_enterprise * Price_Dev_Enterprise_Month`

**Опция B — Setup + подписка (Setup + MRR):**

- `Dev_Enterprise_SetupFee = ____`  *(one-time: внедрение, конфиг, миграция)*
- `Price_Dev_Enterprise_Month = ____`
- **Формулы:**
  - `Revenue_Dev_Ent_Setup = New_Enterprise_Projects * Dev_Enterprise_SetupFee`
  - `MRR_Dev_Enterprise = N_projects_enterprise * Price_Dev_Enterprise_Month`

**Опция C — Enterprise как годовой контракт (Annual prepay):**

- `Price_Dev_Enterprise_Annual = ____`
- `N_Dev_Ent_Annual_Contracts = ____`
- **Формула:** `Revenue_Dev_Ent_Annual = N_Dev_Ent_Annual_Contracts * Price_Dev_Enterprise_Annual`
- (по желанию) распределять на MRR через `Revenue / 12`

**Опция D — Lifetime (Enterprise deal):**

- `Avg_Lifetime_Deal_Size = ____` *(пример: 16000)*
- `Deals_Lifetime_per_year = ____`
- **Формула:** `Revenue_Lifetime = Deals_Lifetime_per_year * Avg_Lifetime_Deal_Size`

**Полезные параметры Enterprise для девелопера (если нужно точнее):**

- `Min_Contract_Term_Months = 12` *(или 6)*
- `Extra_Project_Fee = ____` *(если Enterprise продаётся пакетом и доп.проекты отдельно)*

---

### 3.5.2. Агентство — Enterprise (за компанию)

**Опция A — Enterprise как подписка (MRR):**

- `Price_Agency_Enterprise_Month = ____`
- `N_Agency_Enterprise` — сколько агентств на enterprise
- **Формула:** `MRR_Agency_Enterprise = N_Agency_Enterprise * Price_Agency_Enterprise_Month`

**Опция B — Setup + подписка:**

- `Agency_Enterprise_SetupFee = ____`
- `Price_Agency_Enterprise_Month = ____`
- **Формулы:**
  - `Revenue_Agency_Ent_Setup = New_Agency_Enterprise * Agency_Enterprise_SetupFee`
  - `MRR_Agency_Enterprise = N_Agency_Enterprise * Price_Agency_Enterprise_Month`

**Опция C — годовой контракт (Annual prepay):**

- `Price_Agency_Enterprise_Annual = ____`
- `N_Agency_Ent_Annual_Contracts = ____`
- **Формула:** `Revenue_Agency_Ent_Annual = N_Agency_Ent_Annual_Contracts * Price_Agency_Enterprise_Annual`

---

### 3.5.3. Как связать Enterprise-планы с Enterprise-услугами

Важно: **мобильное приложение / кастомные API / глубокий фирстиль** — это чаще **услуги (one-time)**, которые продаются рядом с Enterprise.

Рекомендуемая связка в модели:

- Enterprise-план даёт MRR (повторяемая выручка)
- Enterprise-услуги дают one-time (ускоряют cashflow)

**Формулы (шаблон):**

- `Revenue_Enterprise_Services = Deals_Enterprise_Services * Avg_Enterprise_Service_Price`
- `Enterprise_Service_AttachRate = ____` *(доля Enterprise-клиентов, кто покупает услуги)*
- `Deals_Enterprise_Services = New_Enterprise_Accounts * Enterprise_Service_AttachRate`

---

### 3.5.4. Сценарии для финмодели (быстрые переключатели)

Добавь в модель переключатели:

- `Enterprise_Model_Type` = {"MRR\_only", "Setup\_plus\_MRR", "Annual\_prepay", "Lifetime"}
- `Enterprise_Attach_Services` = TRUE/FALSE

Это позволит прогонять сценарии (Base/Optimistic/Pessimistic) без переписывания формул.

---

## 4) Услуги и разовые платежи (Services / Setup / Custom)

Важно: **Enterprise-решения — это услуги**, а не маркетплейс.

### 4.1. Настройка проекта (Setup fee)

**Ориентир:** **\$200** за настройку проекта

**Как считать в модели:**

- `Revenue_Setup = N_New_Projects * 200`

---

### 4.2. Enterprise-услуги (пакеты/проекты)

**Примеры:**

- кастомизация под фирстиль (глубокая)
- кастомные API и интеграции
- мобильное приложение
- выделенный контур / SLA

**Как считать в модели (простая версия):**

- `Revenue_Enterprise_Services = Deals_Enterprise_Services * Avg_Enterprise_Service_Price`

**Минимальные ориентиры:**

- `Avg_Enterprise_Service_Price` — от **\$2,000+** (по ситуации)

---

### 4.3. Внедрение / кастомизация / доработки по часам

**Как считать в модели:**

- `Revenue_Services = Service_Hours * Hour_Rate`

**Параметры:**

- `Hour_Rate` (например, \$30/час или другой прайс)
- `Service_Hours` (план/факт)

---

## 5) Канальные модели (важно для финмодели: комиссии, маржа, cashflow)

Здесь важно разделить **2 типа партнёров**.

### 5.1. Партнёр по реферальной ссылке (комиссия **20%** от подписок)

**Суть:** партнёр приводит клиента по ссылке → клиент платит подписку напрямую.

**Деньги и учёт:**

- Выручка остаётся в соответствующих подписках (`MRR_Dev`, `MRR_Agency`, и т.д.)
- Комиссия партнёра — это расход канала:
  - `Partner_Commission_20 = Partner_Sourced_Subscription_Revenue * 20%`

**Выплаты:**

- Партнёр видит начисления и может **вывести деньги по запросу**.

---

### 5.2. Интегратор / Reseller (скидка/маржа **40%**)

**Суть:** интегратор берёт на себя весь цикл (включая финвзаимотношения с клиентом) и фактически покупает GRIDIX «оптом» со скидкой.

**Модель денег:**

- Интегратор **сам оплачивает** подписки пользователей в GRIDIX **за минусом своей скидки** (по сути пополняет кабинет/баланс/кредиты).
- Дальше интегратор сам продаёт/обслуживает клиентов как бизнес, а вы даёте платформу.

**Как учитывать:**

- Вариант A (как “net revenue”):
  - `Reseller_Revenue_Net = Reseller_EndCustomer_Subscription_Revenue * (1 - 40%)`
- Вариант B (как “gross + discount”):
  - `Reseller_Revenue_Gross = Reseller_EndCustomer_Subscription_Revenue`
  - `Reseller_Discount = Reseller_Revenue_Gross * 40%`

**Cashflow нюанс:**

- Часто это предоплата/пополнение баланса → улучшает предсказуемость и снижает нагрузку на вашу поддержку.

---

## 6) Мини-набор показателей, который удобно заложить в финмодель

### 6.1. Подписки

- `MRR_Dev` / `MRR_Agency`
- `Churn_Dev`, `Churn_Agency`
- `ARPA / ARPU` по сегментам
- `Share_PRO` (доли PRO по девелоперам и агентствам)

### 6.2. Upsell

- `AttachRate_Addons`
- `Avg_Addons_Per_Account`

### 6.3. One-time

- `Deals_Lifetime` и `Avg_Lifetime_Deal_Size`
- `N_New_Projects` (для Setup \$200)
- `Service_Hours` и `Hour_Rate`

---

## 7) Место для твоих правок

### Тарифы

- Developer Enterprise: `Price_Dev_Enterprise_Month = ____` (если enterprise как подписка) или `Avg_Dev_Enterprise_SetupFee = ____` (если разово)
- Agency PRO: фикс \$49 (уже задано) — уточнить, какие фичи входят

### Add-ons маркетплейса

- `Avg_Addons_Per_Account = ____`
- `AttachRate_Addons = ____`

### Enterprise / Lifetime

- Lifetime (Enterprise): `Avg_Lifetime_Deal_Size = ____` (например, 16000)
- Enterprise services: `Avg_Enterprise_Service_Price = ____` (>= \$2000)

### Агенты → Агентства

- `Conversion_Agent_to_Agency = ____`
- `Share_Agency_PRO_from_Upgrades = ____`

