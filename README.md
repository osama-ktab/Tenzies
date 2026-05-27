# Tenzies
It is a simple game


# Tenzies Game

An interactive, fast-paced web-based dice game built using **React** and **Vite**. The project is a modern implementation of the classic Tenzies game, designed to demonstrate advanced UI state synchronization, side effects, and responsive layout design.

## 🎮 How to Play
* The game starts with 10 random dice.
* Click on any die to "freeze" its value.
* Roll the remaining dice until all 10 dice show the exact same number.
* Win the game in the shortest time and lowest number of rolls possible!

## 🚀 Features

* **Dynamic State Management:** Seamlessly tracks the numbers, "held" states, and grid updates for all 10 dice using React hooks.
* **Performance Tracking:** Built-in stats counter that displays the total number of rolls and tracks the player's elapsed time.
* **Win Condition Analytics:** Uses side-effects (`useEffect`) to constantly monitor and evaluate when all dice match to trigger a win.
* **Celebration Effects:** Integrates a smooth confetti explosion visual effect the moment the player successfully wins.
* **High-Score / Best Stats:** (Optional/Included) Tracks and displays the player's personal best records.

## 💻 Tech Stack

* **Frontend Framework:** React.js (Vite environment)
* **State & Effects:** React Hooks (`useState`, `useEffect`, `useRef`)
* **Styling:** CSS3 (Flexbox & Grid for the dice layout)
* **Deployment:** Live on Netlify
