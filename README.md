Full Stack Music Streaming App

This is a full-stack **music streaming application** built using **React, Node.js, Express, and MongoDB**. It allows users to browse albums, play songs, manage playlists, and upload new music through an admin panel.

## 🚀 Features
- **Music Player** with play, pause, next, previous, and seek functionalities
- **Album & Song Listing** with dynamic background colors
- **Admin Panel** to upload albums and songs
- **Custom Playlists & Favorites**
- **Responsive Design** using Tailwind CSS
- **Backend with Node.js & Express**
- **MongoDB Database** for storing songs and album details

## 🛠️ Tech Stack
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **State Management:** React Context API
- **Routing:** React Router
- **Authentication:** JWT & Firebase (if implemented)
- **Deployment:** Vercel & Render

## 📂 Project Structure
```
spotify-clone
├── client (Frontend - React)
│   ├── src
│   │   ├── components (UI components)
│   │   ├── pages (Home, Album, Admin, etc.)
│   │   ├── context (Global state management)
│   │   ├── assets (Icons, Images, MP3 files)
│   │   ├── App.jsx (Main App Component)
│   │   ├── index.js (Entry Point)
│   ├── public (Static Files)
│   ├── package.json
│
├── server (Backend - Node.js, Express, MongoDB)
│   ├── models (Database Models)
│   ├── routes (API Routes)
│   ├── controllers (Business Logic)
│   ├── config (Database & Auth Config)
│   ├── server.js (Main Server File)
│   ├── package.json
│
├── README.md
├── LICENSE
```

## 🏗️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/jijojacob988/spotify-clone.git
cd spotify-clone
```
### 2️⃣ Install Dependencies
For **Frontend:**
```sh
cd client
npm install
```
For **Backend:**
```sh
cd server
npm install
```
### 3️⃣ Configure Environment Variables
- Create a `.env` file inside the `server` folder and add:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Run the Application
To start the **frontend**:
```sh
cd client
npm run dev
```
To start the **backend**:
```sh
cd server
npm start
```
Now open **http://localhost:5173** to use the app.

## 🌐 Deployment
If deployed, the project would use **Vercel (Frontend)** and **Render (Backend)**.

1. Push your project to GitHub.
2. Deploy the **frontend** using [Vercel](https://vercel.com/).
3. Deploy the **backend** using [Render](https://render.com/).

## 🤝 Contributing
Pull requests are welcome! Feel free to open issues for improvements or bug fixes.

## 📜 License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by **Jijo Jacob**
