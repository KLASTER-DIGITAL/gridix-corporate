
# GRIDIX Database Schema

Архитектура базы данных спроектирована для поддержки мульти-тенантности (Developer, Agency) с использованием Row Level Security (RLS).

## Core Entities

### 1. Organizations (`organizations`)
Корневая сущность. Может быть застройщиком (`developer`) или агентством (`agency`).
- `type`: определяет доступные модули системы.
- RLS: Пользователи видят данные только своей организации.

### 2. Profiles (`profiles`)
Пользователи системы. Связаны с таблицей `auth.users` через `id`.
- `role`:
  - `admin`: Полный доступ к настройкам организации.
  - `manager`: Управление контентом и сделками.
  - `agent`: Только создание броней и просмотр доступных лотов.

### 3. Projects (`projects`)
Жилые комплексы. Принадлежат организации-застройщику.
- `stats`: JSONB поле для кэширования агрегированных данных (кол-во свободных квартир, мин. цена), чтобы не делать count(*) при каждом запросе.

### 4. Units (`units`)
Объекты недвижимости (квартиры, паркинги, коммерция).
- `status`:
  - `available`: Виден всем.
  - `booked`: Виден как забронированный (без данных клиента для внешних пользователей).
  - `sold`: Продан.
  - `hidden`: Скрыт из продажи (черновик или резерв застройщика).

### 5. Bookings (`bookings`)
Бронирования объектов.
- Имеет TTL (Time To Live) через поле `expires_at`.
- CRON-задача должна проверять просроченные брони и менять статус unit обратно на `available`.

## SQL Migration

```sql
-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ORGANIZATIONS
create table organizations (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  type text check (type in ('developer', 'agency')) not null,
  slug text unique not null,
  logo_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- PROFILES
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  organization_id uuid references organizations(id),
  full_name text,
  avatar_url text,
  role text check (role in ('admin', 'manager', 'agent')) default 'agent',
  phone text,
  email text,
  status text check (status in ('active', 'inactive')) default 'active',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- PROJECTS
create table projects (
  id uuid default uuid_generate_v4() primary key,
  organization_id uuid references organizations(id) not null,
  name text not null,
  slug text unique not null,
  location jsonb,
  status text check (status in ('planning', 'construction', 'delivered')) default 'planning',
  completion_date date,
  stats jsonb default '{}'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- UNITS
create table units (
  id uuid default uuid_generate_v4() primary key,
  project_id uuid references projects(id) on delete cascade not null,
  number text not null,
  floor int not null,
  rooms int not null,
  area numeric not null,
  price numeric not null,
  currency text default 'USD',
  status text check (status in ('available', 'booked', 'sold', 'hidden')) default 'available',
  plan_image_url text,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- BOOKINGS
create table bookings (
  id uuid default uuid_generate_v4() primary key,
  unit_id uuid references units(id) not null,
  agent_id uuid references profiles(id) not null,
  client_name text not null,
  client_phone text not null,
  expires_at timestamp with time zone not null,
  status text check (status in ('active', 'expired', 'cancelled', 'completed')) default 'active',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Indexes for Performance
create index units_project_id_idx on units(project_id);
create index units_status_idx on units(status);
create index units_price_idx on units(price);
create index bookings_agent_id_idx on bookings(agent_id);
create index bookings_unit_id_idx on bookings(unit_id);
```
