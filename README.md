# 📈 Node Crypto Tracker

A lightweight, real-time cryptocurrency price monitor for your terminal. This project was built to practice **Asynchronous JavaScript**, **Node.js Module System (CommonJS)**, and **API consumption**.

## 🚀 Features
- **Real-time Updates:** Fetches the latest prices from Binance API every 5 seconds.
- **Modular Architecture:** Separated concerns between API fetching, UI rendering, and the main server logic.
- **Clean UI:** Automatic terminal clearing for a smooth dashboard experience.
- **Error Handling:** Robust try/catch blocks to handle network or API failures.

## 🛠️ Technologies Used
- **Node.js** (v18+ recommended)
- **Fetch API** (Native)
- **Binance Public API**

## 📂 Project Structure
```text
.
├── api.js           # Handles all communication with Binance API
├── atualizacao.js   # Pure function responsible for terminal UI/UX
└── server.js        # Main entry point (the orchestrator)
```
