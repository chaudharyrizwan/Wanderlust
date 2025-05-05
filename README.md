# 🌍 WanderLust - Travel Listing Web App

WanderLust is a full-stack travel accommodation listing platform inspired by Airbnb. 
Users can explore stays, book rooms, leave reviews, and manage listings.

---

## 🚀 Features

* 🏠 Add and explore travel listings by category (Mountains, Cities, Camping, etc.)
* 📍 Live location search using Mapbox
* 📅 Booking system with check-in/check-out
* ✉️ Email confirmations
* 💬 Reviews and ratings for listings
* 🔒 User authentication (login/signup)

---

## ⚙️ Setup

### Prerequisites

* Node.js and npm installed
* MongoDB (local or Atlas)

### Installation

```bash
git clone https://github.com/chaudharyrizwan/Wanderlust.git
cd Wanderlust
npm install
```

### Environment Variables

Create a `.env` file in the root folder with:

```env
DB_URL=your_mongodb_connection_string
MAPBOX_TOKEN=your_mapbox_token
SESSION_SECRET=your_session_secret
```

---

## ▶️ Run the App

```bash
npm start
```

Visit: `http://localhost:8080`

---

## 📂 Project Structure

```
Wanderlust/
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── models/
│   ├── booking.js
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/
│   ├── bookings.js
│   ├── listings.js
│   └── users.js
├── public/
│   ├── css/
│   │   ├── rating.css
│   │   └── style.css
│   └── js/
│       ├── map.js
│       ├── script.js
│       └── search.js
├── views/
│   ├── listings/
│   ├── partials/
│   └── ...
├── .env (not committed)
├── .gitignore
├── package.json
├── package-lock.json
├── app.js
└── README.md
```
## 📸 Screenshot
![image](https://github.com/user-attachments/assets/cf9a04b2-5e67-4e1e-bff2-826c969f4d6f)
![image](https://github.com/user-attachments/assets/b9e2fa6f-c08a-4d04-ac99-6d7dbf97973b)
![image](https://github.com/user-attachments/assets/1cb76d94-a954-43df-a2cd-9de769886adb)



---

## 🙌 Acknowledgements

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [EJS](https://ejs.co/)
* [Mapbox](https://www.mapbox.com/)
* [Bootstrap](https://getbootstrap.com/)

---

## 📬 Contact

**Rizwan Chaudhary**
📧 Email: [chaudharyrizwan77@gmail.com](mailto:chaudharyrizwan77@gmail.com)
🔗 GitHub: [chaudharyrizwan](https://github.com/chaudharyrizwan)

---

> Made with ❤️ for Web Development and learning.
