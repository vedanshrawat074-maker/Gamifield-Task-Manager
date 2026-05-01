# 🎮 Gamified Task Manager

A modern **React-based productivity app** that turns your daily tasks into a game.
Complete tasks, earn XP, level up, and unlock achievements 🚀

---

## ✨ Features

### 📝 Task Management

* Add tasks with **title, description, difficulty, and due date**
* Mark tasks as completed (one-click system)
* Delete tasks easily

### 🎮 Gamification System

* ⚡ Earn XP based on task difficulty:

  * Easy → +10 XP
  * Medium → +20 XP
  * Hard → +30 XP
* 🎯 Level system (XP → Levels)
* 🏆 Dynamic badge system (Beginner → Intermediate → Advanced)

### 🏆 Achievements

* Unlock achievements based on:

  * Tasks completed
  * Levels reached
  * Special conditions
* Locked vs unlocked UI system

### 📊 Dashboard (Home Page)

* View:

  * XP
  * Completed tasks
  * Streak (basic)
* Circular level display + progress bar

### 🎨 UI/UX

* Dark **gaming-style UI**
* Sidebar navigation (Home, Tasks, Achievements)
* Emoji-based visual system (stickers instead of plain colors)
* Smooth hover animations

---

## 🛠️ Tech Stack

* **React (Vite)**
* **React Router**
* **Tailwind CSS**
* **LocalStorage (for persistence)**

---

## 📁 Project Structure

```
src/
 ├── components/
 │     ├── common/
 │     │     └── Sidebar.jsx
 │     └── task/
 │           ├── TaskForm.jsx
 │           ├── TaskList.jsx
 │           └── TaskCard.jsx
 ├── pages/
 │     ├── Home.jsx
 │     ├── Tasks.jsx
 │     └── Achievements.jsx
 ├── App.jsx
 └── main.jsx
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/gamified-task-manager.git
cd gamified-task-manager
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

---

## 🧠 How It Works

* Tasks are stored in **localStorage**
* XP updates when tasks are completed
* Level is calculated as:

```
Level = floor(XP / 100) + 1
```

* Achievements unlock dynamically based on user progress

---

## 🔥 Future Improvements

* 🔥 Real streak tracking (date-based)
* 🎉 Achievement unlock animations
* 📊 Progress tracking per achievement
* 🌐 Backend integration (Firebase / Node)
* 🎮 Sound effects & advanced gamification

---

## 📸 Preview

> Add screenshots here (Home / Tasks / Achievements)

---

## 💡 Inspiration

This project was built to combine:

* Productivity systems
* Gamification mechanics
* Clean modern UI

---

## 📌 Author

**Vedu**
Engineering Student 🚀

---

## ⭐ If you like this project

Give it a star ⭐ and feel free to contribute!
