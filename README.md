# 🎵 Full-Stack Music Streaming App  

[![Live Site](https://img.shields.io/badge/Live%20Demo-Render-brightgreen)](https://music-stream-app-fe.onrender.com/)  
[![Admin Panel](https://img.shields.io/badge/Admin%20Panel-Render-blue)](https://music-stream-app-1.onrender.com/add-song)  

This is a **full-stack music streaming application** built using **React, Node.js, Express, and MongoDB**.  
It allows users to **browse albums, play songs, manage playlists**, and admins can **upload new songs** via the admin panel.  

---

## **📂 Folder Structure**
```
spotify-full-stack/
│── spotify-clone/      # Frontend (React + Vite)
│    ├── public/        # Static files (_redirects, images, icons)
│    ├── src/           # React components, pages, context
│    ├── package.json   # Frontend dependencies
│    ├── vite.config.js # Vite configuration
│    ├── .env           # Frontend environment variables
│    └── dist/          # Build output (for deployment)
│
│── spotify-backend/    # Backend (Node.js + Express + MongoDB)
│    ├── models/        # Mongoose models (Songs, Albums, Users)
│    ├── routes/        # API routes (Auth, Songs, Albums)
│    ├── controllers/   # Business logic (handling requests)
│    ├── config/        # Database & Cloudinary config
│    ├── server.js      # Main backend server
│    ├── .env           # Backend environment variables
│    └── package.json   # Backend dependencies
│
│── spotify-admin/      # Admin Panel (React)
│    ├── src/           # Admin UI components
│    ├── package.json   # Admin dependencies
│    ├── vite.config.js # Vite config for admin panel
│    ├── dist/          # Build output (for deployment)
│    └── public/        # Static files
```

---

## **🛠 Tech Stack**
### **Frontend:**
- ⛒ **React** (Vite)
- 🎨 **Tailwind CSS**
- 🚀 **React Router** (for navigation)

### **Backend:**
- 🌐 **Node.js & Express**
- 📄 **MongoDB & Mongoose**
- 🔐 **JWT Authentication**
- ☁ **Cloudinary** (for song uploads)

### **Deployment:**
- 🔥 **Frontend** → [Render](https://render.com/)  
- 🚀 **Backend** → [Render](https://render.com/)  
- 💀 **Database** → [MongoDB Atlas](https://www.mongodb.com/)  

---

## **🚀 Installation & Setup**
### **1⃣ Clone the Repository**
```sh
git clone https://github.com/Jijojacob988/music-stream-app.git
cd music-stream-app
```

### **2⃣ Setup & Run Backend**
```sh
cd spotify-backend
npm install
npm start  # Runs backend on http://localhost:4000
```
📌 **Create a `.env` file in `spotify-backend/` and add:**
```
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
```

### **3⃣ Setup & Run Frontend**
```sh
cd ../spotify-clone
npm install
npm run dev  # Runs frontend on http://localhost:5173
```
📌 **Create a `.env` file in `spotify-clone/` and add:**
```
VITE_API_BASE_URL=http://localhost:4000
```

### **4⃣ Setup & Run Admin Panel**
```sh
cd ../spotify-admin
npm install
npm run dev  # Runs admin panel locally
```
📌 **Create a `.env` file in `spotify-admin/` and add:**
```
VITE_API_BASE_URL=http://localhost:4000
```

---

## **📀 Deployment**
### **Frontend (React) on Render**
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`
- **Start Command:** `npx serve -s dist`
- **Root Directory:** `spotify-clone`

### **Backend (Node.js) on Render**
- **Environment Variables:** Set MongoDB & Cloudinary keys
- **Start Command:** `npm start`

### **Admin Panel on Render**
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`
- **Start Command:** `npx serve -s dist`
- **Root Directory:** `spotify-admin`

---

## **🎉 Features**
✅ **Music Player** (Play, Pause, Next, Previous)  
✅ **Album & Song Listing** (With dynamic backgrounds)  
✅ **Admin Panel** (Upload songs, manage albums)  
✅ **Custom Playlists & Favorites**  
✅ **Secure Authentication** (JWT-based login)  
✅ **Cloudinary Storage** (For song uploads)  
✅ **Responsive Design** (Tailwind CSS)  

---

## **🤝 Contributing**
Pull requests are welcome! Feel free to open issues for **bugs or improvements**.  

---

## **💚 License**
This project is **open-source** under the **MIT License**.  

👨‍💻 **Developed by:** Jijo Jacob  
💻 **GitHub:** [Jijojacob988](https://github.com/Jijojacob988)  
🚀 **Live Demo:** [Music Streaming App](https://music-stream-app-fe.onrender.com/)  

