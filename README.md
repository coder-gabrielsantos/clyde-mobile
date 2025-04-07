# Clyde

**Clyde Mobile** is the official mobile companion for the Clyde Educational Platform — a personalized, role-based learning environment for students and teachers.  
This version is built entirely with **React Native + JavaScript**, integrated with a powerful **Spring Boot backend**.

---

## 🚀 Features

- Authentication (Login & Register)
- Role selection (Student or Teacher)
- Classroom creation (for teachers)
- Join classroom via code (for students)
- Token-based authorization
- Clean project architecture (with reusable services)

---

## 🧱 Project Structure

```
clyde-mobile-js/
├── App.js                      # App entry point
├── screens/
│   └── AuthScreen.js          # Login/Register UI
├── services/
│   ├── api.js                 # Axios instance
│   └── authenticationService.js         # Login/Register calls
├── constants/
│   └── endpoints.js           # Centralized API paths
└── assets/                    # (Optional) images/icons/fonts
```

---

## 📦 Stack

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Axios](https://axios-http.com/)
- [Spring Boot](https://spring.io/projects/spring-boot) backend (external)

---

## 🧪 Running Locally

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/clyde-mobile-js.git
cd clyde-mobile-js
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the app

```bash
npx expo start
```

> You can open it on Android/iOS simulators or via Expo Go on a physical device.

---

## 🔌 Backend Configuration

Make sure your backend (Spring Boot) is running on port `8080`.

In `services/api.js`, set the proper baseURL:

```js
baseURL: "http://10.0.2.2:8080", // For Android Emulator
// OR
baseURL: "http://192.168.x.x:8080", // For physical devices (same Wi-Fi network)
```

---

## 🔐 API Endpoints Used

| Endpoint               | Method | Role     | Description                   |
|------------------------|--------|----------|-------------------------------|
| `/auth/register`       | POST   | Public   | Register new user             |
| `/auth/login`          | POST   | Public   | Login and receive token       |
| `/classrooms`          | POST   | TEACHER  | Create a classroom            |
| `/classrooms/owned`    | GET    | TEACHER  | List teacher's classrooms     |
| `/classrooms/join`     | POST   | STUDENT  | Join classroom using code     |

> Token is stored manually for now (AsyncStorage integration coming soon).

---

## 📄 Auth Payloads

### Login
```json
{
  "email": "email@example.com",
  "password": "123456"
}
```

### Register
```json
{
  "name": "Your Name",
  "email": "email@example.com",
  "password": "123456",
  "role": "TEACHER" // or STUDENT
}
```

---

## ✅ Next Steps (Coming Soon)

- 📱 Navigation with React Navigation
- 🔐 Protected screens after login
- 🧑‍🏫 Dashboard for Teachers
- 🧑‍🎓 Classroom view for Students
- 📝 Assignments and submissions
- 🌗 Dark mode toggle

---

## 🧠 Clean Code Practices

- Services abstracted via `authenticationService.js`
- Centralized endpoints in `endpoints.js`
- Authentication logic is isolated from UI
- Modern UI with style encapsulation via `StyleSheet`

---

## 📄 License

MIT © Gabriel Santos

> Built with 💙 by [@coder-gabrielsantos](https://github.com/coder-gabrielsantos)

